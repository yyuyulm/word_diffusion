"""JiT (Just-in-Time) Flow Matching Diffusion for Words.

Based on: "Back to Basics: Let Denoising Generative Models Denoise"
Reference: https://arxiv.org/abs/2511.13720

This implements continuous flow matching in probability simplex space,
using v-prediction loss and ODE sampling.
"""

import torch
import torch.nn as nn
import torch.nn.functional as F
from typing import Optional, Tuple


class JiT(nn.Module):
    """Flow matching diffusion model for words in continuous space.

    Unlike MD4/GenMD4 which operate on discrete tokens with masking,
    JiT performs diffusion in the continuous probability simplex.

    Forward process: z_t = t * x_0 + (1-t) * noise
    Model outputs: x_0 prediction
    Loss: v-prediction MSE where v = (x_0 - z_t) / (1-t)
    Sampling: ODE integration (Euler or Heun)
    """

    def __init__(
        self,
        vocab_size: int,
        max_seq_len: int,
        dim: int = 512,
        n_layers: int = 12,
        n_heads: int = 8,
        dropout: float = 0.0,
        gating_type: str = "none",
        position_embedding_type: str = "learned",
        cond_type: str = "adaln_zero",
        num_time_tokens: int = 1,
        noise_scale: float = 1.0,
        P_mean: float = -0.8,
        P_std: float = 0.8,
        t_eps: float = 5e-2,  # Match JiT reference (0.05)
    ):
        """Initialize JiT model.

        Args:
            vocab_size: Size of vocabulary
            max_seq_len: Maximum sequence length
            dim: Model dimension
            n_layers: Number of transformer layers
            n_heads: Number of attention heads
            dropout: Dropout rate
            gating_type: Attention gating type
            position_embedding_type: Position embedding type
            cond_type: Time conditioning type
            num_time_tokens: Number of time tokens for in-context conditioning
            noise_scale: Scale of Gaussian noise for flow matching
            P_mean: Mean of log-normal time distribution
            P_std: Std of log-normal time distribution
            t_eps: Minimum time value to avoid division by zero
        """
        super().__init__()

        self.vocab_size = vocab_size
        self.max_seq_len = max_seq_len
        self.dim = dim
        self.noise_scale = noise_scale
        self.P_mean = P_mean
        self.P_std = P_std
        self.t_eps = t_eps

        # Input projection: [B, L, V] -> [B, L, dim]
        self.input_proj = nn.Linear(vocab_size, dim)

        # Import transformer components
        from transformer import TimestepEmbedding, TransformerBlock, RMSNorm

        # Time embedding for conditioning
        # JiT reference uses t directly in [0,1] with no scaling  
        self.time_embedding = TimestepEmbedding(dim, timesteps=1)

        # Transformer blocks (built manually for continuous inputs)
        use_rope = position_embedding_type == "rope"
        self.blocks = nn.ModuleList(
            [
                TransformerBlock(
                    dim=dim,
                    n_heads=n_heads,
                    dropout=dropout,
                    gating_type=gating_type,
                    use_rope=use_rope,
                    cond_type=cond_type,
                )
                for _ in range(n_layers)
            ]
        )

        # Final norm
        self.norm_out = RMSNorm(dim)

        # Output projection: [B, L, dim] -> [B, L, V]
        self.output_proj = nn.Linear(dim, vocab_size)

        # Initialize output projection to zero (following JiT paper)
        nn.init.constant_(self.output_proj.weight, 0)
        nn.init.constant_(self.output_proj.bias, 0)

    def sample_time(self, batch_size: int, device: torch.device) -> torch.Tensor:
        """Sample time from log-normal distribution.

        Following JiT paper: t = sigmoid(N(P_mean, P_std^2))

        Args:
            batch_size: Number of samples
            device: Device to create tensor on

        Returns:
            Time values in [0, 1] of shape (batch_size,)
        """
        z = torch.randn(batch_size, device=device) * self.P_std + self.P_mean
        t = torch.sigmoid(z)
        return t

    def forward(self, x_continuous: torch.Tensor, t: torch.Tensor) -> torch.Tensor:
        """Forward pass: predict clean distribution x_0 from noisy z_t.

        Args:
            x_continuous: Continuous distributions [B, L, V]
            t: Time values [B]

        Returns:
            Predicted clean distributions [B, L, V]
        """
        # Project to model dimension
        h = self.input_proj(x_continuous)  # [B, L, dim]

        # Embed time
        time_emb = self.time_embedding(t)  # [B, dim]

        # Apply transformer blocks with time conditioning
        for block in self.blocks:
            h = block(h, mask=None, time_emb=time_emb, conditioning_mask=None)

        # Final norm
        h = self.norm_out(h)

        # Project to vocabulary
        x_pred = self.output_proj(h)  # [B, L, V]

        return x_pred

    def compute_loss(self, x_discrete: torch.Tensor) -> Tuple[torch.Tensor, dict]:
        """Compute flow matching v-prediction loss.

        Forward process: z_t = t * x_0 + (1-t) * noise
        Velocity: v = (x_0 - z_t) / (1-t)
        Model: predicts x_0, converted to v_pred
        Loss: MSE(v_pred, v_target)

        Args:
            x_discrete: Discrete token IDs [B, L]

        Returns:
            Tuple of (loss, metrics_dict)
        """
        batch_size, seq_len = x_discrete.shape
        device = x_discrete.device

        # Convert discrete tokens to continuous (one-hot)
        x_0 = F.one_hot(x_discrete, self.vocab_size).float()  # [B, L, V]

        # Sample time from log-normal distribution
        t = self.sample_time(batch_size, device)  # [B]

        # Sample Gaussian noise
        noise = torch.randn_like(x_0) * self.noise_scale  # [B, L, V]

        # Flow matching: linear interpolation
        t_expanded = t.view(batch_size, 1, 1)  # [B, 1, 1]
        z_t = t_expanded * x_0 + (1 - t_expanded) * noise  # [B, L, V]

        # Compute velocity target: v = (x_0 - z_t) / (1-t)
        v_target = (x_0 - z_t) / (1 - t_expanded).clamp_min(self.t_eps)

        # Predict x_0
        x_pred = self.forward(z_t, t)  # [B, L, V]

        # Convert to velocity prediction
        v_pred = (x_pred - z_t) / (1 - t_expanded).clamp_min(self.t_eps)

        # v-prediction loss (MSE)
        loss = F.mse_loss(v_pred, v_target)

        # Metrics
        metrics = {
            "loss": loss.item(),
            "loss_nelbo": loss.item(),  # For JiT, loss = ELBO
            "t_mean": t.mean().item(),
            "t_std": t.std().item(),
        }

        return loss, metrics

    @torch.no_grad()
    def sample(
        self,
        batch_size: int,
        num_steps: int = 50,
        device: str = "cuda",
        method: str = "euler",
        conditioning_mask: Optional[torch.Tensor] = None,
        conditioning_tokens: Optional[torch.Tensor] = None,
    ) -> torch.Tensor:
        """Generate samples via ODE integration.

        Solves: dz/dt = v(z, t) from t=0 to t=1

        Args:
            batch_size: Number of samples to generate
            num_steps: Number of ODE integration steps
            device: Device to generate on
            method: ODE solver ('euler' or 'heun')
            conditioning_mask: Optional mask for hard constraints [B, L]
            conditioning_tokens: Optional tokens for hard constraints [B, L]

        Returns:
            Generated token IDs [B, L]
        """
        # Start from pure noise at t=0
        z = (
            torch.randn(batch_size, self.max_seq_len, self.vocab_size, device=device)
            * self.noise_scale
        )

        # Create timesteps from 0 to 1
        timesteps = torch.linspace(0.0, 1.0, num_steps + 1, device=device)

        # ODE integration
        for i in range(num_steps):
            t = timesteps[i]
            t_next = timesteps[i + 1]

            if method == "euler":
                z = self._euler_step(z, t, t_next)
            elif method == "heun":
                z = self._heun_step(z, t, t_next)
            else:
                raise ValueError(f"Unknown method: {method}")

            # Apply hard constraints if provided
            if conditioning_mask is not None and conditioning_tokens is not None:
                # Convert conditioning tokens to one-hot
                cond_onehot = F.one_hot(conditioning_tokens, self.vocab_size).float()
                # Apply at conditioned positions
                z = torch.where(
                    conditioning_mask.unsqueeze(-1).expand_as(z), cond_onehot, z
                )

        # Convert continuous distributions to discrete tokens (argmax)
        tokens = z.argmax(dim=-1)  # [B, L]

        return tokens

    @torch.no_grad()
    def _euler_step(self, z: torch.Tensor, t: float, t_next: float) -> torch.Tensor:
        """Euler ODE integration step.

        z_next = z + (t_next - t) * v(z, t)
        """
        batch_size = z.shape[0]
        t_tensor = torch.full((batch_size,), t, device=z.device)

        # Predict x_0
        x_pred = self.forward(z, t_tensor)

        # Convert to velocity: v = (x_pred - z) / (1 - t)
        v_pred = (x_pred - z) / (1 - t).clamp_min(self.t_eps)

        # Euler step
        z_next = z + (t_next - t) * v_pred

        return z_next

    @torch.no_grad()
    def _heun_step(self, z: torch.Tensor, t: float, t_next: float) -> torch.Tensor:
        """Heun (RK2) ODE integration step.

        More accurate than Euler but requires 2 model evaluations.
        """
        batch_size = z.shape[0]
        t_tensor = torch.full((batch_size,), t, device=z.device)
        t_next_tensor = torch.full((batch_size,), t_next, device=z.device)

        # First Euler step
        x_pred_t = self.forward(z, t_tensor)
        v_pred_t = (x_pred_t - z) / (1 - t).clamp_min(self.t_eps)
        z_euler = z + (t_next - t) * v_pred_t

        # Second evaluation at t_next
        x_pred_next = self.forward(z_euler, t_next_tensor)
        v_pred_next = (x_pred_next - z_euler) / (1 - t_next).clamp_min(self.t_eps)

        # Average velocities
        v_pred_avg = 0.5 * (v_pred_t + v_pred_next)

        # Heun step
        z_next = z + (t_next - t) * v_pred_avg

        return z_next

    def save_pretrained(self, save_directory: str):
        """Save model weights and config in HuggingFace format.

        Args:
            save_directory: Directory to save model and config.
        """
        from pathlib import Path
        import json
        from safetensors.torch import save_file

        save_path = Path(save_directory)
        save_path.mkdir(parents=True, exist_ok=True)

        # Save config
        config = {
            "model_type": "jit",
            "vocab_size": self.vocab_size,
            "max_seq_len": self.max_seq_len,
            "dim": self.dim,
            "n_layers": len(self.blocks),
            "n_heads": self.blocks[0].attn.n_heads,
            "dropout": self.blocks[0].attn.dropout.p,
            "gating_type": self.blocks[0].attn.gating_type,
            "position_embedding_type": "rope"
            if self.blocks[0].attn.use_rope
            else "learned",
            "cond_type": self.blocks[0].cond_type,
            "noise_scale": self.noise_scale,
            "P_mean": self.P_mean,
            "P_std": self.P_std,
            "t_eps": self.t_eps,
        }

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
            Loaded JiT model.
        """
        from pathlib import Path
        import json
        from safetensors.torch import load_file

        load_path = Path(load_directory)

        # Load config
        with open(load_path / "config.json") as f:
            config = json.load(f)

        # Create model
        model = cls(
            vocab_size=config["vocab_size"],
            max_seq_len=config["max_seq_len"],
            dim=config["dim"],
            n_layers=config["n_layers"],
            n_heads=config["n_heads"],
            dropout=config["dropout"],
            gating_type=config["gating_type"],
            position_embedding_type=config["position_embedding_type"],
            cond_type=config["cond_type"],
            noise_scale=config.get("noise_scale", 1.0),
            P_mean=config.get("P_mean", -0.8),
            P_std=config.get("P_std", 0.8),
            t_eps=config.get("t_eps", 1e-3),
        )

        # Load weights
        state_dict = load_file(load_path / "model.safetensors")
        model.load_state_dict(state_dict)
        model = model.to(device)

        print(f"Model loaded from {load_directory}/")
        return model
