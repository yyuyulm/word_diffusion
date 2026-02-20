"""
MD4 (Masked Discrete Diffusion) framework for discrete data.

Based on the JAX implementation from jax_md4/md4/models/diffusion/md4.py.
"""

import json
import math
from pathlib import Path
from typing import Optional, Tuple

import torch
import torch.nn as nn
import torch.nn.functional as F

from safetensors.torch import load_file, save_file
from transformer import Transformer


class MaskingSchedule:
    """Masking noise schedule for discrete diffusion."""

    def __init__(self, schedule_type: str = "cosine", eps: float = 1e-4):
        """
        Args:
            schedule_type: Type of schedule ('cosine', 'linear', 'poly2', etc.).
            eps: Small epsilon for numerical stability.
        """
        self.schedule_type = schedule_type
        self.eps = eps

    def _alpha(self, t: torch.Tensor) -> torch.Tensor:
        """Base alpha function (proportion of unmasked tokens).

        Args:
            t: Time tensor in [0, 1].

        Returns:
            Alpha values.
        """
        if self.schedule_type == "linear":
            return 1.0 - t
        elif self.schedule_type == "cosine":
            return 1.0 - torch.cos(math.pi / 2.0 * (1.0 - t))
        elif self.schedule_type.startswith("poly"):
            exponent = float(self.schedule_type.replace("poly", ""))
            return 1.0 - t**exponent
        else:
            raise NotImplementedError(f"Schedule {self.schedule_type} not implemented")

    def alpha(self, t: torch.Tensor) -> torch.Tensor:
        """Alpha with epsilon adjustment.

        Args:
            t: Time tensor in [0, 1].

        Returns:
            Alpha values in [eps, 1-eps].
        """
        return (1.0 - 2 * self.eps) * self._alpha(t) + self.eps

    def _dalpha(self, t: torch.Tensor) -> torch.Tensor:
        """Derivative of alpha."""
        if self.schedule_type == "cosine":
            return -math.pi / 2.0 * torch.sin(math.pi / 2.0 * (1.0 - t))
        elif self.schedule_type == "linear":
            return -torch.ones_like(t)
        elif self.schedule_type.startswith("poly"):
            exponent = float(self.schedule_type.replace("poly", ""))
            return -exponent * (t ** (exponent - 1.0))
        else:
            raise NotImplementedError()

    def dalpha(self, t: torch.Tensor) -> torch.Tensor:
        """Derivative of alpha with epsilon adjustment."""
        return (1.0 - 2 * self.eps) * self._dalpha(t)

    def log_snr(self, t: torch.Tensor) -> torch.Tensor:
        """Log signal-to-noise ratio.

        Args:
            t: Time tensor in [0, 1].

        Returns:
            log(alpha / (1 - alpha))
        """
        alpha_t = self.alpha(t)
        return torch.log(alpha_t / (1.0 - alpha_t))

    def dgamma_times_alpha(self, t: torch.Tensor) -> torch.Tensor:
        """Derivative term for continuous-time loss."""
        return self.dalpha(t) / (1.0 - self.alpha(t))


class LearnableVecMaskingSchedule(nn.Module):
    """Learnable vector-valued masking schedule for GenMD4.

    Unlike MaskingSchedule which uses a scalar alpha(t), this uses a vector
    alpha(t) of size [vocab_size], allowing different tokens to have different
    diffusion rates. The exponents are learned parameters.
    """

    def __init__(
        self,
        vocab_size: int,
        schedule_type: str = "poly",
        eps: float = 1e-4,
        power_init: float = 1.0,
    ):
        """
        Args:
            vocab_size: Size of vocabulary (not including mask token).
            schedule_type: Type of schedule ('poly' is the only supported type).
            eps: Small epsilon for numerical stability.
            power_init: Initial value for the polynomial exponents.
        """
        super().__init__()
        self.vocab_size = vocab_size
        self.schedule_type = schedule_type
        self.eps = eps

        if schedule_type == "poly":
            # Initialize w such that softplus(w) = power_init
            # softplus(w) = log(1 + exp(w)) ≈ w for large w
            # Inverse: w = log(exp(power_init) - 1)
            w_init = math.log(math.exp(power_init) - 1.0)
            self.w = nn.Parameter(torch.full((vocab_size,), w_init))
        else:
            raise NotImplementedError(f"Schedule {schedule_type} not implemented")

    @property
    def power(self) -> torch.Tensor:
        """Get the polynomial exponents via softplus activation.

        Returns:
            Tensor of shape [vocab_size] with positive exponents.
        """
        return F.softplus(self.w)

    def __call__(self, t: torch.Tensor) -> torch.Tensor:
        """Return log-SNR (for compatibility with base schedule interface).

        Args:
            t: Time tensor.

        Returns:
            log(alpha / (1 - alpha)) of shape [..., vocab_size].
        """
        alpha_t = self.alpha(t)
        return torch.log(alpha_t / (1.0 - alpha_t))

    def dalpha(self, t: torch.Tensor) -> torch.Tensor:
        """Derivative of alpha with respect to t.

        Args:
            t: Time tensor of shape [...].

        Returns:
            Derivative of shape [..., vocab_size].
        """
        if self.schedule_type == "poly":
            # alpha(t) = 1 - (1 - eps) * t^power
            # dalpha/dt = -(1 - eps) * power * t^(power - 1)
            power = self.power  # [vocab_size]
            t_expanded = t.unsqueeze(-1)  # [..., 1]
            return -(1.0 - self.eps) * power * (t_expanded ** (power - 1.0))
        else:
            raise NotImplementedError()

    def alpha(self, t: torch.Tensor) -> torch.Tensor:
        """Proportion of unmasked tokens (vector-valued).

        Args:
            t: Time tensor of shape [...].

        Returns:
            Alpha values of shape [..., vocab_size].
        """
        if self.schedule_type == "poly":
            # alpha(t) = 1 - (1 - eps) * t^power
            # Returns [..., vocab_size]
            power = self.power  # [vocab_size]
            t_expanded = t.unsqueeze(-1)  # [..., 1]
            return 1.0 - (1.0 - self.eps) * (t_expanded**power)
        else:
            raise NotImplementedError()

    def dgamma_times_alpha(self, t: torch.Tensor) -> torch.Tensor:
        """Derivative term for continuous-time loss.

        For polynomial schedule: dgamma/dt * alpha(t) = -power / t

        Args:
            t: Time tensor of shape [...].

        Returns:
            Derivative term of shape [..., vocab_size].
        """
        # For polynomial schedule: simplified form is -power / t
        power = self.power  # [vocab_size]
        t_expanded = t.unsqueeze(-1)  # [..., 1]
        return -power / t_expanded


class MD4(nn.Module):
    """MD4 discrete diffusion model."""

    def __init__(
        self,
        vocab_size: int,
        max_seq_len: int,
        dim: int = 128,
        n_layers: int = 4,
        n_heads: int = 4,
        dropout: float = 0.0,
        gating_type: str = "none",  # "elementwise", "headwise", or "none"
        schedule_type: str = "linear",
        timesteps: int = 1000,
        antithetic_sampling: bool = True,
        position_embedding_type: str = "rope",
        cond_type: str = "adaln_zero",  # NEW: time conditioning type
        sampling_grid: str = "cosine",  # NEW: sampling grid type
        cont_time: bool = True,  # NEW: use continuous-time loss (True) or discrete-time loss (False)
        num_time_tokens: int = 1,  # NEW: number of time conditioning tokens (MAR-style duplication)
        model_type: str = "md4",  # Model type: "md4" or "genmd4"
        t1: float = 1e-3,  # NEW: minimum time for GenMD4
        power_init: float = 1.0,  # NEW: initial exponent for GenMD4 schedule
    ):
        """
        Args:
            vocab_size: Vocabulary size (not including mask token).
            max_seq_len: Maximum sequence length.
            dim: Model dimension.
            n_layers: Number of transformer layers.
            n_heads: Number of attention heads.
            dropout: Dropout probability.
            gating_type: Type of gating ("elementwise", "headwise", or "none" for no gating).
            schedule_type: Type of masking schedule.
            timesteps: Number of discrete timesteps for training.
            antithetic_sampling: Whether to use antithetic time sampling.
            position_embedding_type: Type of position embedding ("rope", "learned", "none").
            cond_type: Type of time conditioning ("adaln_zero", "in_context", "none").
            sampling_grid: Type of sampling grid ("cosine" or "uniform").
            cont_time: Whether to use continuous-time loss (True) or discrete-time loss (False).
            num_time_tokens: Number of time conditioning tokens for in_context modes (default: 1).
            model_type: Model type ("md4" for standard cross-entropy, "genmd4" for learnable schedules).
            t1: Minimum time for GenMD4 (to avoid numerical issues at t=0).
            power_init: Initial value for GenMD4 schedule exponents.
        """
        super().__init__()

        # Validate model_type
        if model_type not in ["md4", "genmd4"]:
            raise ValueError(f"model_type must be 'md4' or 'genmd4', got {model_type}")

        # GenMD4 requires continuous-time loss
        if model_type == "genmd4" and not cont_time:
            raise ValueError("GenMD4 requires cont_time=True")

        self.vocab_size = vocab_size
        self.max_seq_len = max_seq_len
        self.timesteps = timesteps
        self.antithetic_sampling = antithetic_sampling
        self.cond_type = cond_type
        self.sampling_grid = sampling_grid
        self.cont_time = cont_time
        self.num_time_tokens = num_time_tokens
        self.model_type = model_type
        self.t1 = t1

        # Mask token is vocab_size (one beyond the regular vocabulary)
        self.mask_token_id = vocab_size

        # Transformer backbone (vocab + mask token)
        self.transformer = Transformer(
            vocab_size=vocab_size + 1,  # +1 for mask token
            max_seq_len=max_seq_len,
            dim=dim,
            n_layers=n_layers,
            n_heads=n_heads,
            dropout=dropout,
            gating_type=gating_type,
            position_embedding_type=position_embedding_type,
            cond_type=cond_type,
            timesteps=timesteps,  # Pass timesteps for embedding scaling
            num_time_tokens=num_time_tokens,  # Pass token duplication count
        )

        # Noise schedule - choose based on model type
        if model_type == "genmd4":
            # Learnable per-token schedule for GenMD4
            self.schedule = LearnableVecMaskingSchedule(
                vocab_size=vocab_size,
                schedule_type="poly",  # GenMD4 only supports polynomial
                power_init=power_init,
            )
        else:
            # Standard scalar schedule for MD4
            self.schedule = MaskingSchedule(schedule_type)

    def save_pretrained(self, save_directory: str):
        """Save model weights and config in HuggingFace format.

        Args:
            save_directory: Directory to save model and config.
        """
        save_path = Path(save_directory)
        save_path.mkdir(parents=True, exist_ok=True)

        # Save config
        config = {
            "vocab_size": self.vocab_size,
            "max_seq_len": self.max_seq_len,
            "timesteps": self.timesteps,
            "cond_type": self.cond_type,
            "num_time_tokens": self.num_time_tokens,  # Save time token count
            "schedule_type": self.schedule.schedule_type,
            "sampling_grid": self.sampling_grid,
            "cont_time": self.cont_time,
            "model_type": self.model_type,
            "t1": self.t1,
            # Get transformer config from the instance
            "dim": self.transformer.dim,
            "n_layers": len(self.transformer.blocks),
            "n_heads": self.transformer.blocks[0].attn.n_heads,
            "dropout": self.transformer.blocks[0].attn.dropout.p,
            "gating_type": self.transformer.blocks[0].attn.gating_type,
            "position_embedding_type": self.transformer.position_embedding_type,
        }

        # Add power_init for GenMD4 models
        if self.model_type == "genmd4":
            # Save the current power values (they will be loaded from state_dict)
            # But save initial power_init for reference
            config["power_init"] = 1.0  # Default value, actual values in state_dict

        with open(save_path / "config.json", "w") as f:
            json.dump(config, f, indent=2)

        # Save weights
        save_file(self.state_dict(), save_path / "model.safetensors")

        print(f"Model saved to {save_directory}/")
        print("  - config.json")
        print("  - model.safetensors")

    @classmethod
    def from_pretrained(cls, load_directory: str, device: str = "cpu"):
        """Load model from HuggingFace format.

        Args:
            load_directory: Directory containing config.json and model.safetensors.
            device: Device to load model on.

        Returns:
            Loaded MD4 model.
        """
        load_path = Path(load_directory)

        # Load config
        with open(load_path / "config.json") as f:
            config = json.load(f)

        # Handle backward compatibility: old configs have use_gating, new ones only have gating_type
        if "use_gating" in config and "gating_type" not in config:
            # Old config: convert use_gating to gating_type
            config["gating_type"] = "elementwise" if config["use_gating"] else "none"
        elif "use_gating" in config and "gating_type" in config:
            # Transitional config: has both, ignore use_gating
            pass

        # Create model
        model = cls(
            vocab_size=config["vocab_size"],
            max_seq_len=config["max_seq_len"],
            dim=config["dim"],
            n_layers=config["n_layers"],
            n_heads=config["n_heads"],
            dropout=config["dropout"],
            gating_type=config["gating_type"],
            timesteps=config["timesteps"],
            schedule_type=config["schedule_type"],
            position_embedding_type=config["position_embedding_type"],
            cond_type=config["cond_type"],
            sampling_grid=config.get(
                "sampling_grid", "cosine"
            ),  # Default for old configs
            cont_time=config.get("cont_time", True),  # Default for old configs
            model_type=config.get(
                "model_type", config.get("loss_type", "md4")
            ),  # Support both old (loss_type) and new (model_type)
            t1=config.get("t1", 1e-3),  # Default for old configs
            power_init=config.get("power_init", 1.0),  # Default for old configs
        )

        # Load weights
        state_dict = load_file(load_path / "model.safetensors")
        model.load_state_dict(state_dict)
        model = model.to(device)

        print(f"Model loaded from {load_directory}/")
        return model

    def forward_sample(self, x: torch.Tensor, t: torch.Tensor) -> torch.Tensor:
        """Sample z_t from q(z_t | x).

        Randomly mask tokens based on the masking rate alpha(t).

        Args:
            x: Clean data of shape (batch, seq_len).
            t: Time values of shape (batch,) or scalar.

        Returns:
            Noisy data z_t of same shape as x.
        """
        batch_size, seq_len = x.shape

        # Compute alpha(t)
        if t.dim() == 0:
            t = t.unsqueeze(0).expand(batch_size)
        alpha_t = self.schedule.alpha(t).view(batch_size, 1)  # (batch, 1)

        # Sample mask: keep with probability alpha_t
        keep_mask = torch.bernoulli(alpha_t.expand(batch_size, seq_len))

        # Apply mask: replace with mask_token_id where keep_mask=0
        z_t = torch.where(keep_mask.bool(), x, self.mask_token_id)
        return z_t

    def predict_logits(self, z_t: torch.Tensor, t: torch.Tensor) -> torch.Tensor:
        """Predict logits for the clean data given noisy z_t.

        Args:
            z_t: Noisy data of shape (batch, seq_len).
            t: Time values of shape (batch,) or scalar.

        Returns:
            Logits of shape (batch, seq_len, vocab_size).
        """
        # Ensure t is batch tensor for conditioning
        if t.dim() == 0:
            batch_size = z_t.shape[0]
            t = t.unsqueeze(0).expand(batch_size)

        # Note: Transformer outputs logits for vocab_size+1 (including mask token)
        # We only need vocab_size logits (no need to predict mask token)
        logits = self.transformer(z_t, t=t)  # Pass time for conditioning
        return logits[..., : self.vocab_size]  # (batch, seq_len, vocab_size)

    def get_sampling_grid(
        self, i: int, num_steps: int, device: str
    ) -> Tuple[float, float]:
        """Calculate s and t values for sampling step i.

        Args:
            i: Current sampling step (0 to num_steps-1)
            num_steps: Total number of sampling steps
            device: Device for tensors

        Returns:
            Tuple of (s, t) values in [0, 1]
        """
        t = (num_steps - i) / num_steps
        s = t - 1 / num_steps

        if self.sampling_grid == "cosine":
            t = math.cos(math.pi / 2.0 * (1.0 - t))
            s = math.cos(math.pi / 2.0 * (1.0 - s))
        # else: uniform grid, use linear t and s

        return s, t

    def compute_loss(self, x: torch.Tensor) -> Tuple[torch.Tensor, dict]:
        """Compute the training loss (MD4 or GenMD4).

        Args:
            x: Clean data of shape (batch, seq_len).

        Returns:
            Tuple of (loss, metrics_dict).
        """
        if self.model_type == "genmd4":
            return self.genmd4_compute_loss(x)
        else:
            return self.md4_compute_loss(x)

    def md4_compute_loss(self, x: torch.Tensor) -> Tuple[torch.Tensor, dict]:
        """Compute the standard MD4 training loss.

        Args:
            x: Clean data of shape (batch, seq_len).

        Returns:
            Tuple of (loss, metrics_dict).
        """
        batch_size, seq_len = x.shape
        device = x.device

        # 1. Sample time steps
        if self.antithetic_sampling:
            # Antithetic sampling for lower variance
            t0 = torch.rand(1, device=device)
            t = (t0 + torch.arange(batch_size, device=device) / batch_size) % 1.0
        else:
            t = torch.rand(batch_size, device=device)

        # 2. Discretize time (for discrete-time loss) or use continuous time
        if self.cont_time:
            # Continuous-time: use t directly
            t_used = t
        else:
            # Discrete-time: discretize to timesteps
            t_used = (torch.floor(t * self.timesteps) + 1) / self.timesteps

        # 3. Sample noisy data z_t
        z_t = self.forward_sample(x, t_used)

        # 4. Predict logits
        logits = self.predict_logits(z_t, t_used)  # (batch, seq_len, vocab_size)

        # 5. Compute cross-entropy loss for masked tokens only
        log_probs = F.log_softmax(logits, dim=-1)  # (batch, seq_len, vocab_size)

        # Get log probability of ground truth
        target_log_probs = torch.gather(
            log_probs, dim=-1, index=x.unsqueeze(-1)
        ).squeeze(-1)  # (batch, seq_len)

        # Mask indicating which tokens are masked
        is_masked = (z_t == self.mask_token_id).float()  # (batch, seq_len)

        # Negative cross-entropy for masked tokens
        masked_nll = -target_log_probs * is_masked  # (batch, seq_len)
        masked_nll = masked_nll.sum(dim=1)  # (batch,)

        # 6. Compute diffusion loss with appropriate weighting
        if self.cont_time:
            # Continuous-time diffusion loss
            # weight = dgamma/dt * alpha(t) (see JAX implementation L234-237)
            # JAX: neg_cross_ent (negative) * dgamma_alpha (negative) = positive loss
            # PyTorch: masked_nll (positive) * dgamma_alpha (negative) = negative loss
            # Solution: negate to get positive loss for PyTorch
            dgamma_alpha = self.schedule.dgamma_times_alpha(t_used)
            loss_diff = -(dgamma_alpha * masked_nll).mean()  # Negate for positive loss
        else:
            # Discrete-time diffusion loss
            s = t_used - (1.0 / self.timesteps)
            gt = self.schedule.log_snr(t_used)
            gs = self.schedule.log_snr(s)
            alpha_s = self.schedule.alpha(s)

            # Loss weight: timesteps * (exp(gs - gt) - 1) * alpha(s)
            # NOTE: Use gs - gt (not gt - gs) because:
            # - s < t so alpha_s > alpha_t so log_snr_s > log_snr_t
            # - This makes weight positive
            # - JAX uses gt - gs but with negative cross-entropy, we use positive NLL
            weight = self.timesteps * torch.expm1(gs - gt) * alpha_s
            loss_diff = (weight * masked_nll).mean()

        # 6. Reconstruction loss (constant term)
        alpha_0 = self.schedule.alpha(torch.tensor(0.0, device=device))
        # This is a constant, so divide by batch_size to match per-sample loss
        loss_recon = (
            seq_len * (1.0 - alpha_0) * math.log(self.vocab_size)
        ) / batch_size

        # Total loss
        loss = loss_diff + loss_recon

        # Metrics
        metrics = {
            "loss": loss.item(),
            "loss_nelbo": loss.item(),  # For MD4, NELBO = loss (no REINFORCE)
            "loss_diff": loss_diff.item(),
            "loss_recon": loss_recon,
            "mask_ratio": is_masked.mean().item(),
        }

        return loss, metrics

    def genmd4_forward_sample(self, x: torch.Tensor, t: torch.Tensor) -> torch.Tensor:
        """Sample z_t from q(z_t | x) with state-dependent masking (GenMD4).

        Unlike MD4 which uses scalar alpha(t), GenMD4 uses vector alpha(t) where
        the masking probability depends on the actual token value at each position.

        Args:
            x: Clean data of shape (batch, seq_len).
            t: Time values of shape (batch,) or scalar.

        Returns:
            Noisy data z_t of same shape as x.
        """
        batch_size, seq_len = x.shape

        # Compute alpha(t) - returns [batch, vocab_size]
        if t.dim() == 0:
            t = t.unsqueeze(0).expand(batch_size)
        alpha_t = self.schedule.alpha(t)  # [batch, vocab_size]

        # Extract per-token unmask probabilities based on actual tokens
        # x: [batch, seq_len], alpha_t: [batch, vocab_size]
        # Need to gather: un_mask_p[i, j] = alpha_t[i, x[i, j]]
        un_mask_p = torch.gather(alpha_t, dim=1, index=x)  # [batch, seq_len]

        # Sample mask: keep with probability un_mask_p
        keep_mask = torch.bernoulli(un_mask_p)

        # Apply mask: replace with mask_token_id where keep_mask=0
        z_t = torch.where(keep_mask.bool(), x, self.mask_token_id)
        return z_t

    def genmd4_diffusion_loss(
        self, t: torch.Tensor, x: torch.Tensor
    ) -> Tuple[torch.Tensor, torch.Tensor]:
        """Compute GenMD4 diffusion loss component.

        This implements the continuous-time diffusion loss with the GenMD4 integrand:
        integrand = (neg_cross_ent + 1) * one_hot_x - exp(log_p)

        Args:
            t: Time values of shape (batch,).
            x: Clean data of shape (batch, seq_len).

        Returns:
            Tuple of (loss_diff, z_t) where:
                loss_diff: Diffusion loss of shape (batch,).
                z_t: Noisy samples of shape (batch, seq_len).
        """
        batch_size, seq_len = x.shape

        # Sample z_t with state-dependent masking
        z_t = self.genmd4_forward_sample(x, t)

        # Predict logits
        logits = self.predict_logits(z_t, t)  # [batch, seq_len, vocab_size]
        log_p = F.log_softmax(logits, dim=-1)  # [batch, seq_len, vocab_size]

        # One-hot encode ground truth
        one_hot_x = F.one_hot(
            x, self.vocab_size
        ).float()  # [batch, seq_len, vocab_size]

        # Negative cross-entropy: sum(one_hot_x * log_p)
        neg_cross_ent = one_hot_x * log_p  # [batch, seq_len, vocab_size]
        neg_cross_ent = torch.where(
            one_hot_x.bool(), neg_cross_ent, torch.zeros_like(neg_cross_ent)
        )
        neg_cross_ent = neg_cross_ent.sum(dim=-1, keepdim=True)  # [batch, seq_len, 1]

        # GenMD4 integrand: (neg_cross_ent + 1) * one_hot_x - exp(log_p)
        integrand = (neg_cross_ent + 1.0) * one_hot_x - torch.exp(log_p)
        # [batch, seq_len, vocab_size]

        # Mask indicator: which positions are masked
        mask = (z_t == self.mask_token_id).float()  # [batch, seq_len]
        mask = mask.unsqueeze(-1)  # [batch, seq_len, 1]

        # masked_integrand: sum over seq_len
        masked_integrand = (mask * integrand).sum(dim=1)  # [batch, vocab_size]

        # Apply continuous-time weighting: dgamma_times_alpha(t)
        # dgamma_alpha: [batch, vocab_size]
        dgamma_alpha = self.schedule.dgamma_times_alpha(t)  # [batch, vocab_size]

        # Loss: sum over vocab dimension
        loss_diff = (dgamma_alpha * masked_integrand).sum(dim=-1)  # [batch]

        return loss_diff, z_t

    def genmd4_recon_loss(self, x: torch.Tensor) -> torch.Tensor:
        """Compute GenMD4 reconstruction loss.

        The reconstruction loss is state-dependent and measures the cost
        at t=t1 (near t=0).

        Args:
            x: Clean data of shape (batch, seq_len).

        Returns:
            Reconstruction loss of shape (batch,).
        """
        assert self.schedule.schedule_type == "poly"
        eps = self.schedule.eps
        power = self.schedule.power  # [vocab_size]

        # Extract per-token exponents based on actual tokens in x
        # x: [batch, seq_len], power: [vocab_size]
        # w_x[i, j] = power[x[i, j]]
        w_x = torch.gather(
            power.unsqueeze(0).expand(x.shape[0], -1), dim=1, index=x
        )  # [batch, seq_len]

        # w * log(t): [batch, seq_len]
        wlogt_x = w_x * math.log(self.t1)

        # logsumexp(w * log(t)) over vocab: scalar
        wlogt = power * math.log(self.t1)  # [vocab_size]
        logsumexp_wlogt = torch.logsumexp(wlogt, dim=0)  # scalar

        # loss_recon per position: -(1 - eps) * exp(w_x * log(t)) * (w_x * log(t) - logsumexp(...))
        loss_recon = (
            -(1.0 - eps) * torch.exp(wlogt_x) * (wlogt_x - logsumexp_wlogt)
        )  # [batch, seq_len]

        # Sum over sequence dimension
        loss_recon = loss_recon.sum(dim=1)  # [batch]

        return loss_recon

    def genmd4_reinforce_loss(
        self,
        t: torch.Tensor,
        x: torch.Tensor,
        zt_1: torch.Tensor,
        zt_2: torch.Tensor,
        loss_diff_1: torch.Tensor,
        loss_diff_2: torch.Tensor,
    ) -> torch.Tensor:
        """Compute REINFORCE (RLOO) gradient estimator for GenMD4.

        This provides low-variance gradient estimates for the learnable
        schedule parameters by using leave-one-out estimation.

        Args:
            t: Time values of shape (batch,).
            x: Clean data of shape (batch, seq_len).
            zt_1: First noise realization of shape (batch, seq_len).
            zt_2: Second noise realization of shape (batch, seq_len).
            loss_diff_1: Diffusion loss for first realization, shape (batch,).
            loss_diff_2: Diffusion loss for second realization, shape (batch,).

        Returns:
            REINFORCE loss of shape (batch,).
        """
        assert self.schedule.schedule_type == "poly"
        eps = self.schedule.eps
        power = self.schedule.power  # [vocab_size]
        batch_size, seq_len = x.shape

        # Extract per-token exponents
        w_x = torch.gather(
            power.unsqueeze(0).expand(batch_size, -1), dim=1, index=x
        )  # [batch, seq_len]

        # Expand t for broadcasting: [batch, 1]
        t_expanded = t.unsqueeze(-1)  # [batch, 1]

        # alpha_t_x: per-token unmask probability
        # alpha_t_x = 1 - (1 - eps) * t^w_x
        alpha_t_x = 1.0 - (1.0 - eps) * (t_expanded**w_x)  # [batch, seq_len]

        # Log probabilities of the forward process
        # log p(masked) = log((1 - eps) * t^w_x) = log(1 - eps) + w_x * log(t)
        # log p(unmasked) = log(alpha_t_x)
        log_q_mask = torch.log(
            torch.tensor(1.0 - eps, device=x.device)
        ) + w_x * torch.log(t_expanded)
        log_q_unmask = torch.log(alpha_t_x)

        # Compute log probabilities for both realizations
        log_q1 = torch.where(
            zt_1 == self.mask_token_id, log_q_mask, log_q_unmask
        )  # [batch, seq_len]
        log_q2 = torch.where(
            zt_2 == self.mask_token_id, log_q_mask, log_q_unmask
        )  # [batch, seq_len]

        # Sum over sequence dimension
        log_q1_sum = log_q1.sum(dim=1)  # [batch]
        log_q2_sum = log_q2.sum(dim=1)  # [batch]

        # RLOO estimator: 0.5 * stop_gradient(loss_diff_1 - loss_diff_2) * (log_q1 - log_q2)
        rloo_1 = (
            0.5 * (loss_diff_1 - loss_diff_2).detach() * (log_q1_sum - log_q2_sum)
        )  # [batch]

        return rloo_1

    def genmd4_compute_loss(self, x: torch.Tensor) -> Tuple[torch.Tensor, dict]:
        """Compute the GenMD4 training loss.

        Args:
            x: Clean data of shape (batch, seq_len).

        Returns:
            Tuple of (loss, metrics_dict).
        """
        batch_size, seq_len = x.shape
        device = x.device

        # 1. Sample time steps
        if self.antithetic_sampling:
            # Antithetic sampling for lower variance
            t0 = torch.rand(1, device=device)
            t = (t0 + torch.arange(batch_size, device=device) / batch_size) % 1.0
        else:
            t = torch.rand(batch_size, device=device)

        # Rescale t to be in [t1, 1.0] to avoid numerical issues at t=0
        t = (1.0 - self.t1) * t + self.t1

        # 2. Compute diffusion loss with two independent noise realizations
        loss_diff_1, zt_1 = self.genmd4_diffusion_loss(t, x)
        loss_diff_2, zt_2 = self.genmd4_diffusion_loss(t, x)

        # 3. REINFORCE (RLOO) gradient estimator
        rloo_1 = self.genmd4_reinforce_loss(t, x, zt_1, zt_2, loss_diff_1, loss_diff_2)

        # 4. Average diffusion loss
        loss_diff = 0.5 * (loss_diff_1 + loss_diff_2)  # [batch]

        # 5. Surrogate loss including REINFORCE term
        loss_diff_sg = loss_diff + rloo_1  # [batch]

        # 6. Reconstruction loss
        loss_recon = self.genmd4_recon_loss(x)  # [batch]

        # 7. Total loss
        loss = loss_diff_sg.mean() + loss_recon.mean()
        loss_diff_mean = loss_diff.mean()
        loss_recon_mean = loss_recon.mean()

        # 8. NELBO (without REINFORCE term, for monitoring)
        loss_nelbo = loss_diff_mean + loss_recon_mean

        # Metrics
        metrics = {
            "loss": loss.item(),
            "loss_diff": loss_diff_mean.item(),
            "loss_recon": loss_recon_mean.item(),
            "loss_nelbo": loss_nelbo.item(),
            "power_max": self.schedule.power.max().item(),
            "power_min": self.schedule.power.min().item(),
            "power_avg": self.schedule.power.mean().item(),
            "mask_ratio": (zt_1 == self.mask_token_id).float().mean().item(),
        }

        return loss, metrics

    @torch.no_grad()
    def sample(
        self,
        batch_size: int,
        num_steps: Optional[int] = None,
        device: str = "cuda",
        conditioning_mask: Optional[torch.Tensor] = None,
        conditioning_tokens: Optional[torch.Tensor] = None,
    ) -> torch.Tensor:
        """Generate samples using ancestral sampling.

        Args:
            batch_size: Number of samples to generate.
            num_steps: Number of denoising steps. Defaults to self.timesteps.
            device: Device to generate samples on.
            conditioning_mask: Optional (batch, seq_len) bool tensor.
                True = keep token fixed during generation.
            conditioning_tokens: Optional (batch, seq_len) int tensor.
                Tokens to condition on (used where conditioning_mask is True).

        Returns:
            Generated samples of shape (batch, seq_len).
        """
        if num_steps is None:
            num_steps = self.timesteps

        # Start from all mask tokens
        z_t = torch.full(
            (batch_size, self.max_seq_len),
            self.mask_token_id,
            dtype=torch.long,
            device=device,
        )

        # Apply conditioning if provided
        if conditioning_mask is not None and conditioning_tokens is not None:
            z_t = torch.where(conditioning_mask, conditioning_tokens, z_t)

        # Iteratively denoise
        for i in range(num_steps):
            s, t = self.get_sampling_grid(i, num_steps, device)

            alpha_t = self.schedule.alpha(torch.tensor(t, device=device))
            alpha_s = self.schedule.alpha(torch.tensor(s, device=device))

            # Predict distribution over tokens
            logits = self.predict_logits(z_t, torch.tensor(t, device=device))
            probs = F.softmax(logits, dim=-1)  # (batch, seq_len, vocab_size)

            # Unmask probability (can be negative if alpha_s > alpha_t due to discretization)
            # For GenMD4, alpha_t/alpha_s are vectors [vocab_size], for MD4 they're scalars
            if self.model_type == "genmd4":
                # Proper state-dependent sampling: per-token unmask probabilities
                # alpha_t, alpha_s: [vocab_size]
                # unmask_prob: [vocab_size] - different unmask rate for each token
                unmask_prob_per_token = (alpha_s - alpha_t) / (1.0 - alpha_t + 1e-10)
                unmask_prob_per_token = torch.clamp(unmask_prob_per_token, 0.0, 1.0)

                # Scale predicted probs by token-specific unmask probabilities
                # probs: [batch, seq_len, vocab_size]
                # unmask_prob_per_token: [vocab_size]
                probs_vocab = probs * unmask_prob_per_token.unsqueeze(0).unsqueeze(0)

                # Compute scalar unmask probability for mask token
                # Use mean unmask rate for the mask dimension
                unmask_prob_mean = unmask_prob_per_token.mean()
            else:
                # MD4: scalar unmask probability
                unmask_prob = (alpha_s - alpha_t) / (1.0 - alpha_t + 1e-10)
                unmask_prob = torch.clamp(unmask_prob, 0.0, 1.0)
                probs_vocab = unmask_prob * probs
                unmask_prob_mean = unmask_prob

            # Probability to unmask with predicted distribution

            # Probability to stay masked
            probs_mask = (1.0 - unmask_prob_mean).expand(
                batch_size, self.max_seq_len, 1
            )

            # Combine: [vocab probs | mask prob]
            probs_combined = torch.cat([probs_vocab, probs_mask], dim=-1)

            # Normalize to ensure valid probability distribution
            probs_combined = probs_combined / (
                probs_combined.sum(dim=-1, keepdim=True) + 1e-10
            )

            # Sample new tokens
            sampled = torch.multinomial(
                probs_combined.view(-1, self.vocab_size + 1),
                num_samples=1,
            ).view(batch_size, self.max_seq_len)

            # Update only masked positions
            is_masked = z_t == self.mask_token_id
            z_t = torch.where(is_masked, sampled, z_t)

            # Re-apply conditioning (keep conditioned tokens fixed)
            if conditioning_mask is not None and conditioning_tokens is not None:
                z_t = torch.where(conditioning_mask, conditioning_tokens, z_t)

        # Final cleanup: decode any remaining mask tokens
        final_logits = self.predict_logits(z_t, torch.tensor(0.0, device=device))
        final_pred = final_logits.argmax(dim=-1)
        z_t = torch.where(z_t == self.mask_token_id, final_pred, z_t)

        # Re-apply conditioning one last time
        if conditioning_mask is not None and conditioning_tokens is not None:
            z_t = torch.where(conditioning_mask, conditioning_tokens, z_t)

        return z_t

    @torch.no_grad()
    def sample_with_length(
        self,
        batch_size: int,
        word_length: int,
        num_steps: Optional[int] = None,
        device: str = "cuda",
    ) -> torch.Tensor:
        """Generate samples of a specific word length.

        This uses conditioning to fix the <EOW> token at the desired position,
        and starts denoising from an appropriate noise level to match the
        training distribution.

        Args:
            batch_size: Number of samples to generate.
            word_length: Desired word length (number of characters, not including <EOW>).
            num_steps: Number of denoising steps. If None, calculated based on noise level.
            device: Device to generate samples on.

        Returns:
            Generated samples of shape (batch, seq_len).
        """
        # <EOW> position is right after the word characters
        eow_position = word_length

        if eow_position >= self.max_seq_len:
            raise ValueError(
                f"word_length={word_length} is too long for max_seq_len={self.max_seq_len}"
            )

        # Create conditioning: reveal <EOW> at the desired position
        conditioning_mask = torch.zeros(
            batch_size, self.max_seq_len, dtype=torch.bool, device=device
        )
        conditioning_mask[:, eow_position] = True

        # Note: <EOW> token is at index 1 in the vocabulary
        # (based on CharacterTokenizer: [PAD=0, EOW=1, MASK=2, ...])
        eow_token_id = 1

        conditioning_tokens = torch.full(
            (batch_size, self.max_seq_len),
            self.mask_token_id,
            dtype=torch.long,
            device=device,
        )
        conditioning_tokens[:, eow_position] = eow_token_id

        # Calculate appropriate number of steps based on how much of the sequence is revealed
        # We're revealing 1 token out of max_seq_len, so we want to start from
        # a noise level where alpha(t) ≈ 1/max_seq_len
        #
        # For linear schedule: alpha(t) = 1 - t
        # So: 1 - t ≈ 1/max_seq_len
        # Therefore: t ≈ 1 - 1/max_seq_len
        if num_steps is None:
            # Fraction of sequence that's revealed
            revealed_fraction = 1.0 / self.max_seq_len
            # Start time: high noise but not completely noisy
            start_t = 1.0 - revealed_fraction
            # Number of steps proportional to how much denoising we need to do
            num_steps = int(start_t * self.timesteps)
            # Ensure at least a few steps
            num_steps = max(num_steps, 10)

        return self.sample(
            batch_size=batch_size,
            num_steps=num_steps,
            device=device,
            conditioning_mask=conditioning_mask,
            conditioning_tokens=conditioning_tokens,
        )
