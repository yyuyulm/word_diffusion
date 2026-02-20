"""
Transformer architecture for word diffusion.

Based on Qwen3 architecture with:
- RMSNorm
- Rotary Position Embeddings (RoPE)
- Gated Attention (optional)
- SwiGLU MLP
"""

from typing import Optional, Tuple
import math
import torch
import torch.nn as nn
import torch.nn.functional as F


class TimestepEmbedding(nn.Module):
    """Sinusoidal timestep embedding with MLP projection."""

    def __init__(self, dim: int, max_period: float = 10000.0, timesteps: int = 200):
        """
        Args:
            dim: Embedding dimension.
            max_period: Maximum period for sinusoidal encoding.
            timesteps: Number of diffusion timesteps (for scaling t).
        """
        super().__init__()
        self.dim = dim
        self.max_period = max_period
        self.timesteps = timesteps

        # MLP to project timestep embedding
        self.mlp = nn.Sequential(
            nn.Linear(dim, dim * 4),
            nn.SiLU(),
            nn.Linear(dim * 4, dim),
        )

    def forward(self, t: torch.Tensor) -> torch.Tensor:
        """
        Args:
            t: Timestep values of shape (batch,) in range [0, 1].

        Returns:
            Timestep embeddings of shape (batch, dim).
        """
        # Scale t to timestep range for proper frequency discrimination
        # Without this, max phase = 1 radian which is too low-frequency!
        t = t * self.timesteps  # Now t in [0, timesteps]

        # Sinusoidal embedding (like positional encoding)
        half_dim = self.dim // 2
        emb = math.log(self.max_period) / (half_dim - 1)
        emb = torch.exp(torch.arange(half_dim, device=t.device) * -emb)
        emb = t[:, None] * emb[None, :]
        emb = torch.cat([emb.sin(), emb.cos()], dim=-1)

        # Project with MLP
        emb = self.mlp(emb)
        return emb


class AdaLN(nn.Module):
    """Adaptive Layer Norm with normal initialization."""

    def __init__(self, dim: int):
        """
        Args:
            dim: Model dimension.
        """
        super().__init__()
        # Project time embedding to 6 modulation parameters
        self.linear = nn.Linear(dim, 6 * dim, bias=True)
        # Normal initialization (not zeros!)
        # PyTorch's default init is fine

    def forward(self, time_emb: torch.Tensor) -> Tuple[torch.Tensor, ...]:
        """
        Args:
            time_emb: Time embedding of shape (batch, dim).

        Returns:
            Tuple of (shift_att, scale_att, gate_att, shift_mlp, scale_mlp, gate_mlp),
            each of shape (batch, 1, dim).
        """
        # Project and split
        modulation = self.linear(time_emb)  # (batch, 6*dim)
        modulation = modulation.unsqueeze(1)  # (batch, 1, 6*dim)
        shift_att, scale_att, gate_att, shift_mlp, scale_mlp, gate_mlp = (
            modulation.chunk(6, dim=-1)
        )

        return shift_att, scale_att, gate_att, shift_mlp, scale_mlp, gate_mlp


class AdaLNZero(nn.Module):
    """Adaptive Layer Norm with zero-initialized modulation."""

    def __init__(self, dim: int):
        """
        Args:
            dim: Model dimension.
        """
        super().__init__()
        # Project time embedding to 6 modulation parameters (shift, scale, gate) x 2 (attn, mlp)
        self.linear = nn.Linear(dim, 6 * dim, bias=True)

        # Zero initialization (critical!)
        nn.init.zeros_(self.linear.weight)
        nn.init.zeros_(self.linear.bias)

    def forward(self, time_emb: torch.Tensor) -> Tuple[torch.Tensor, ...]:
        """
        Args:
            time_emb: Time embedding of shape (batch, dim).

        Returns:
            Tuple of (shift_att, scale_att, gate_att, shift_mlp, scale_mlp, gate_mlp),
            each of shape (batch, 1, dim).
        """
        # Project and split
        modulation = self.linear(time_emb)  # (batch, 6*dim)
        modulation = modulation.unsqueeze(1)  # (batch, 1, 6*dim)
        shift_att, scale_att, gate_att, shift_mlp, scale_mlp, gate_mlp = (
            modulation.chunk(6, dim=-1)
        )

        return shift_att, scale_att, gate_att, shift_mlp, scale_mlp, gate_mlp


class RMSNorm(nn.Module):
    """Root Mean Square Layer Normalization."""

    def __init__(self, dim: int, eps: float = 1e-6):
        """
        Args:
            dim: Dimension of the input.
            eps: Small constant for numerical stability.
        """
        super().__init__()
        self.eps = eps
        self.weight = nn.Parameter(torch.ones(dim))

    def forward(self, x: torch.Tensor) -> torch.Tensor:
        """
        Args:
            x: Input tensor of shape (..., dim).

        Returns:
            Normalized tensor of same shape as input.
        """
        # Compute RMS: sqrt(mean(x^2))
        rms = torch.sqrt(torch.mean(x**2, dim=-1, keepdim=True) + self.eps)
        # Normalize and scale
        return self.weight * (x / rms)


class RotaryEmbedding(nn.Module):
    """Rotary Position Embeddings (RoPE)."""

    def __init__(self, dim: int, max_seq_len: int = 512, base: float = 512.0):
        """
        Args:
            dim: Dimension of the embeddings (must be even).
            max_seq_len: Maximum sequence length.
            base: Base for the frequency computation.
        """
        super().__init__()
        assert dim % 2 == 0, "Dimension must be even for RoPE"

        self.dim = dim
        self.max_seq_len = max_seq_len
        self.base = base

        # Precompute frequency tensor
        inv_freq = 1.0 / (base ** (torch.arange(0, dim, 2).float() / dim))
        self.register_buffer("inv_freq", inv_freq)

        # Precompute cos and sin for max_seq_len
        t = torch.arange(max_seq_len, dtype=torch.float32)
        freqs = torch.outer(t, inv_freq)  # (max_seq_len, dim//2)
        emb = torch.cat([freqs, freqs], dim=-1)  # (max_seq_len, dim)
        self.register_buffer("cos_cached", emb.cos())
        self.register_buffer("sin_cached", emb.sin())

    def forward(
        self,
        q: torch.Tensor,
        k: torch.Tensor,
        conditioning_mask: Optional[torch.Tensor] = None,
    ) -> Tuple[torch.Tensor, torch.Tensor]:
        """Apply rotary embeddings to query and key.

        Args:
            q: Query tensor of shape (batch, seq_len, n_heads, head_dim).
            k: Key tensor of shape (batch, seq_len, n_heads, head_dim).
            conditioning_mask: Optional bool tensor of shape (batch, seq_len).
                True = conditioning token (skip RoPE), False = sequence token (apply RoPE).

        Returns:
            Tuple of (rotated_q, rotated_k).
        """
        batch_size, seq_len, n_heads, head_dim = q.shape

        if conditioning_mask is not None:
            # Apply RoPE only to sequence tokens
            # Conditioning tokens (mask=True) are left unmodified

            # We need to apply RoPE with sequence-relative positions
            # For sequence tokens, use positions 0, 1, 2, ... (not their absolute positions)

            # Create output tensors (copy input for conditioning tokens)
            q_out = q.clone()
            k_out = k.clone()

            # For each position in the sequence, if it's a sequence token, apply RoPE
            # with its sequence-relative position
            seq_positions = (~conditioning_mask).cumsum(
                dim=1
            ) - 1  # 0-indexed positions for seq tokens

            # Process each batch item
            for b in range(batch_size):
                seq_mask = ~conditioning_mask[b]  # True for sequence tokens
                if seq_mask.any():
                    # Get sequence tokens
                    q_seq = q[b, seq_mask]  # (num_seq_tokens, n_heads, head_dim)
                    k_seq = k[b, seq_mask]

                    # Get their sequence-relative positions
                    seq_pos = seq_positions[b, seq_mask]  # (num_seq_tokens,)
                    max_pos = seq_pos.max().item() + 1

                    # Get RoPE embeddings for these positions
                    cos = self.cos_cached[:max_pos][seq_pos].unsqueeze(
                        1
                    )  # (num_seq, 1, dim)
                    sin = self.sin_cached[:max_pos][seq_pos].unsqueeze(1)

                    # Apply rotary
                    q_seq_rot = self._apply_rotary(q_seq, cos, sin)
                    k_seq_rot = self._apply_rotary(k_seq, cos, sin)

                    # Put back
                    q_out[b, seq_mask] = q_seq_rot
                    k_out[b, seq_mask] = k_seq_rot

            return q_out, k_out
        else:
            # Normal RoPE for all tokens
            cos = (
                self.cos_cached[:seq_len, :].unsqueeze(0).unsqueeze(2)
            )  # (1, seq_len, 1, dim)
            sin = self.sin_cached[:seq_len, :].unsqueeze(0).unsqueeze(2)

            q_rot = self._apply_rotary(q, cos, sin)
            k_rot = self._apply_rotary(k, cos, sin)
            return q_rot, k_rot

    def _apply_rotary(
        self, x: torch.Tensor, cos: torch.Tensor, sin: torch.Tensor
    ) -> torch.Tensor:
        """Apply rotary transformation.

        Args:
            x: Input tensor (batch, seq_len, n_heads, head_dim).
            cos, sin: Precomputed cos/sin values.

        Returns:
            Rotated tensor.
        """
        # Split into two halves
        x1, x2 = x[..., : x.shape[-1] // 2], x[..., x.shape[-1] // 2 :]
        # Apply rotation
        return torch.cat(
            [
                x1 * cos[..., : x.shape[-1] // 2] - x2 * sin[..., x.shape[-1] // 2 :],
                x2 * cos[..., x.shape[-1] // 2 :] + x1 * sin[..., : x.shape[-1] // 2],
            ],
            dim=-1,
        )


class GatedAttention(nn.Module):
    """Multi-head attention with optional output gating."""

    def __init__(
        self,
        dim: int,
        n_heads: int,
        dropout: float = 0.0,
        gating_type: str = "none",  # "elementwise", "headwise", or "none"
        use_rope: bool = True,  # Whether to use RoPE or no positional encoding in attention
    ):
        """
        Args:
            dim: Model dimension.
            n_heads: Number of attention heads.
            dropout: Dropout probability.
            gating_type: Type of gating ("elementwise", "headwise", or "none" for no gating).
            use_rope: Whether to use RoPE. If False, no positional encoding in attention.
        """
        super().__init__()
        assert dim % n_heads == 0, "dim must be divisible by n_heads"

        self.dim = dim
        self.n_heads = n_heads
        self.head_dim = dim // n_heads
        self.scale = self.head_dim**-0.5
        self.gating_type = gating_type
        self.use_rope = use_rope

        # Query, Key, Value projections
        if gating_type == "elementwise":
            # Q includes gate parameters (2x for Q + gate)
            self.q_proj = nn.Linear(dim, dim * 2, bias=False)
        elif gating_type == "headwise":
            # Q includes gate parameters (1 scalar per head)
            self.q_proj = nn.Linear(dim, dim + n_heads, bias=False)
        else:  # gating_type == "none"
            self.q_proj = nn.Linear(dim, dim, bias=False)

        self.k_proj = nn.Linear(dim, dim, bias=False)
        self.v_proj = nn.Linear(dim, dim, bias=False)
        self.o_proj = nn.Linear(dim, dim, bias=False)

        self.dropout = nn.Dropout(dropout)

        # RoPE (only if use_rope=True)
        if use_rope:
            self.rope = RotaryEmbedding(self.head_dim)

    def forward(
        self,
        x: torch.Tensor,
        mask: Optional[torch.Tensor] = None,
        conditioning_mask: Optional[torch.Tensor] = None,
    ) -> torch.Tensor:
        """
        Args:
            x: Input tensor of shape (batch, seq_len, dim).
            mask: Optional padding mask (batch, seq_len). True = attend, False = ignore.
            conditioning_mask: Optional conditioning mask (batch, seq_len). True = conditioning token.

        Returns:
            Output tensor of shape (batch, seq_len, dim).
        """
        batch_size, seq_len, _ = x.shape

        # Project to Q, K, V
        q = self.q_proj(x)
        k = self.k_proj(x)
        v = self.v_proj(x)

        # Extract gate if using gating
        if self.gating_type == "elementwise":
            q, gate = q.chunk(2, dim=-1)  # (batch, seq_len, dim) each
            gate = gate.view(batch_size, seq_len, self.n_heads, self.head_dim)
        elif self.gating_type == "headwise":
            q, gate = q.split([self.dim, self.n_heads], dim=-1)
            gate = gate.view(batch_size, seq_len, self.n_heads, 1)

        # Reshape to (batch, seq_len, n_heads, head_dim)
        q = q.view(batch_size, seq_len, self.n_heads, self.head_dim)
        k = k.view(batch_size, seq_len, self.n_heads, self.head_dim)
        v = v.view(batch_size, seq_len, self.n_heads, self.head_dim)

        # Apply RoPE if enabled
        if self.use_rope:
            q, k = self.rope(q, k, conditioning_mask=conditioning_mask)

        # Transpose to (batch, n_heads, seq_len, head_dim)
        q = q.transpose(1, 2)
        k = k.transpose(1, 2)
        v = v.transpose(1, 2)

        # Use PyTorch's scaled_dot_product_attention (automatically uses Flash Attention on CUDA when available)
        # This provides 2-3x speedup on modern GPUs like L4
        if mask is not None:
            # Convert padding mask (batch, seq_len) to attention mask (batch, 1, 1, seq_len)
            # True = attend, False = ignore (opposite of what the manual implementation used)
            attn_mask = mask.unsqueeze(1).unsqueeze(2)  # (batch, 1, 1, seq_len)
        else:
            attn_mask = None

        # scaled_dot_product_attention automatically handles:
        # - Scaling by 1/sqrt(head_dim)
        # - Masking (with -inf for False positions)
        # - Softmax
        # - Dropout (if dropout_p > 0)
        # - Flash Attention backend selection on CUDA
        out = F.scaled_dot_product_attention(
            q,
            k,
            v,
            attn_mask=attn_mask,
            dropout_p=self.dropout.p if self.training else 0.0,
            is_causal=False,  # No causal masking for diffusion
        )  # (batch, n_heads, seq_len, head_dim)

        out = out.transpose(1, 2)  # (batch, seq_len, n_heads, head_dim)

        # Apply gating if enabled
        if self.gating_type != "none":
            out = out * torch.sigmoid(gate)

        # Reshape and project
        out = out.reshape(batch_size, seq_len, self.dim)
        out = self.o_proj(out)

        return out


class SwiGLU(nn.Module):
    """SwiGLU feedforward network."""

    def __init__(
        self, dim: int, hidden_dim: Optional[int] = None, dropout: float = 0.0
    ):
        """
        Args:
            dim: Input/output dimension.
            hidden_dim: Hidden dimension. If None, defaults to 4*dim.
            dropout: Dropout probability.
        """
        super().__init__()
        hidden_dim = hidden_dim or 4 * dim

        self.gate_proj = nn.Linear(dim, hidden_dim, bias=False)
        self.up_proj = nn.Linear(dim, hidden_dim, bias=False)
        self.down_proj = nn.Linear(hidden_dim, dim, bias=False)
        self.dropout = nn.Dropout(dropout)

    def forward(self, x: torch.Tensor) -> torch.Tensor:
        """
        Args:
            x: Input tensor of shape (batch, seq_len, dim).

        Returns:
            Output tensor of same shape.
        """
        gate = F.silu(self.gate_proj(x))
        up = self.up_proj(x)
        hidden = gate * up
        return self.dropout(self.down_proj(hidden))


class TransformerBlock(nn.Module):
    """Transformer block with attention and feedforward."""

    def __init__(
        self,
        dim: int,
        n_heads: int,
        dropout: float = 0.0,
        gating_type: str = "none",  # "elementwise", "headwise", or "none"
        use_rope: bool = True,
        cond_type: str = "adaln_zero",  # "adaln_zero", "in_context", or "none"
    ):
        """
        Args:
            dim: Model dimension.
            n_heads: Number of attention heads.
            dropout: Dropout probability.
            gating_type: Type of gating ("elementwise", "headwise", or "none" for no gating).
            use_rope: Whether to use RoPE.
            cond_type: Type of time conditioning ("adaln_zero", "in_context", "none").
        """
        super().__init__()

        self.cond_type = cond_type

        self.attn = GatedAttention(dim, n_heads, dropout, gating_type, use_rope)
        self.mlp = SwiGLU(dim, dropout=dropout)

        # Zero-initialized output scales for residual blocks (in_context_zero)
        if cond_type == "in_context_zero":
            # Per-channel scale for attention output (initialized to zero)
            self.attn_output_scale = nn.Parameter(torch.zeros(dim))
            # Per-channel scale for MLP output (initialized to zero)
            self.mlp_output_scale = nn.Parameter(torch.zeros(dim))

        # Normalization and conditioning modules
        if cond_type in ["adaln", "adaln_zero"]:
            # Use LayerNorm without affine parameters when conditioning (matches JAX)
            self.norm1 = nn.LayerNorm(dim, elementwise_affine=False)
            self.norm2 = nn.LayerNorm(dim, elementwise_affine=False)
            # Create conditioning module
            if cond_type == "adaln":
                self.adaln = AdaLN(dim)  # Normal initialization
            else:  # adaln_zero
                self.adaln = AdaLNZero(dim)  # Zero initialization
        else:
            # Use RMSNorm when no conditioning
            self.norm1 = RMSNorm(dim)
            self.norm2 = RMSNorm(dim)

        # Apply conservative initialization for in_context_residual_zero
        if cond_type == "in_context_residual_zero":
            self._init_residual_zero()

    def _init_residual_zero(self):
        """Apply conservative initialization for in_context_residual_zero mode.

        Uses Gaussian N(0, σ²) where σ² = 0.1/fan_in, equivalent to
        σ = gain/√fan_in where gain ≈ 0.32.
        """
        gain = 0.316  # ≈ √0.1

        # Re-initialize linear layers in attention and MLP with conservative gain
        for module in [self.attn, self.mlp]:
            for name, param in module.named_parameters():
                if "weight" in name and param.dim() >= 2:
                    # Apply gain-scaled initialization
                    nn.init.xavier_normal_(param, gain=gain)

    def forward(
        self,
        x: torch.Tensor,
        mask: Optional[torch.Tensor] = None,
        time_emb: Optional[torch.Tensor] = None,
        conditioning_mask: Optional[torch.Tensor] = None,
    ) -> torch.Tensor:
        """
        Args:
            x: Input tensor of shape (batch, seq_len, dim).
            mask: Optional padding mask.
            time_emb: Optional time embedding (batch, dim) for adaln_zero conditioning.
            conditioning_mask: Optional conditioning mask (batch, seq_len) for RoPE.

        Returns:
            Output tensor of same shape.
        """
        if self.cond_type in ["adaln", "adaln_zero"] and time_emb is not None:
            # Get modulation parameters from time embedding
            shift_att, scale_att, gate_att, shift_mlp, scale_mlp, gate_mlp = self.adaln(
                time_emb
            )

            # Attention path with modulation
            h = self.norm1(x) * (scale_att + 1.0) + shift_att
            h = self.attn(h, mask, conditioning_mask)
            x = x + gate_att * h

            # MLP path with modulation
            h = self.norm2(x) * (scale_mlp + 1.0) + shift_mlp
            h = self.mlp(h)
            x = x + gate_mlp * h
        else:
            # Standard pre-norm with residual
            x = x + self.attn(self.norm1(x), mask, conditioning_mask)
            x = x + self.mlp(self.norm2(x))

        return x


class Transformer(nn.Module):
    """Transformer model for discrete data."""

    def __init__(
        self,
        vocab_size: int,
        max_seq_len: int,
        dim: int = 128,
        n_layers: int = 4,
        n_heads: int = 4,
        dropout: float = 0.0,
        gating_type: str = "elementwise",  # "elementwise", "headwise", or "none"
        position_embedding_type: str = "rope",  # "rope", "learned", or "none"
        cond_type: str = "none",  # "adaln_zero", "in_context", or "none"
        timesteps: int = 1000,  # Number of diffusion timesteps for embedding scaling
        num_time_tokens: int = 1,  # Number of time conditioning tokens (MAR-style duplication)
    ):
        """
        Args:
            vocab_size: Size of vocabulary.
            max_seq_len: Maximum sequence length.
            dim: Model dimension.
            n_layers: Number of transformer layers.
            n_heads: Number of attention heads.
            dropout: Dropout probability.
            gating_type: Type of gating ("elementwise", "headwise", or "none" for no gating).
            position_embedding_type: Type of position embedding ("rope", "learned", "none").
            cond_type: Type of time conditioning ("adaln_zero", "in_context", "none").
            timesteps: Number of diffusion timesteps (for time embedding scaling).
            num_time_tokens: Number of time conditioning tokens for in_context modes (default: 1).
        """
        super().__init__()

        self.vocab_size = vocab_size
        self.max_seq_len = max_seq_len
        self.dim = dim
        self.position_embedding_type = position_embedding_type
        self.cond_type = cond_type
        self.num_time_tokens = num_time_tokens

        # Token embedding
        self.token_embedding = nn.Embedding(vocab_size, dim)

        # Position embedding (learned absolute)
        if position_embedding_type == "learned":
            # Standard size: only for sequence tokens
            self.position_embedding = nn.Embedding(max_seq_len, dim)
        else:
            self.position_embedding = None

        # Time embedding (for adaln, adaln_zero, in_context, and in_context_zero)
        if cond_type in [
            "adaln",
            "adaln_zero",
            "in_context",
            "in_context_zero",
        ]:
            self.time_embedding = TimestepEmbedding(dim, timesteps=timesteps)
        else:
            self.time_embedding = None

        # Type embeddings for in-context conditioning
        # These are separate from position embeddings and act as type indicators
        if cond_type in ["in_context", "in_context_zero"]:
            self.time_type_embedding = nn.Parameter(torch.zeros(dim))
        else:
            self.time_type_embedding = None

        # Transformer blocks
        use_rope = position_embedding_type == "rope"
        self.blocks = nn.ModuleList(
            [
                TransformerBlock(
                    dim,
                    n_heads,
                    dropout,
                    gating_type,
                    use_rope,
                    cond_type,
                )
                for _ in range(n_layers)
            ]
        )

        # Final norm and output projection
        self.norm_out = RMSNorm(dim)
        self.head = nn.Linear(dim, vocab_size, bias=False)

        # Initialize weights
        self._init_weights()

    def _init_weights(self):
        """Initialize weights with depth scaling (matching JAX)."""
        # Standard initialization for embeddings and linear layers
        nn.init.normal_(self.token_embedding.weight, std=0.02)
        if self.position_embedding is not None:
            nn.init.normal_(self.position_embedding.weight, std=0.02)
        if self.time_type_embedding is not None:
            nn.init.normal_(self.time_type_embedding, std=0.02)

        # Depth-scaled initialization for residual branches (hardcoded to True matching JAX)
        n_layers = len(self.blocks)
        depth_scale = 1.0 / math.sqrt(n_layers)

        for block in self.blocks:
            # Scale attention output projection
            if hasattr(block.attn, "out_proj"):
                nn.init.normal_(block.attn.out_proj.weight, std=0.02 * depth_scale)
                if block.attn.out_proj.bias is not None:
                    nn.init.zeros_(block.attn.out_proj.bias)

            # Scale MLP output projection (last linear layer in MLP)
            # For SwiGLU: self.mlp is a Sequential with [Linear, Linear, Linear]
            # The last Linear is the output projection
            if isinstance(block.mlp, nn.Sequential):
                last_layer = block.mlp[-1]  # Last layer in the sequential
                if isinstance(last_layer, nn.Linear):
                    nn.init.normal_(last_layer.weight, std=0.02 * depth_scale)
                    if last_layer.bias is not None:
                        nn.init.zeros_(last_layer.bias)

        # Output projection - zero initialization (following JAX/DiT)
        nn.init.zeros_(self.head.weight)

    def forward(
        self,
        x: torch.Tensor,
        mask: Optional[torch.Tensor] = None,
        t: Optional[torch.Tensor] = None,  # Timestep values for conditioning
        return_hidden: bool = False,
    ) -> torch.Tensor:
        """
        Args:
            x: Input token indices of shape (batch, seq_len).
            mask: Optional padding mask of shape (batch, seq_len).
            t: Optional timestep values of shape (batch,) for conditioning.
            return_hidden: If True, return hidden states instead of logits.

        Returns:
            Logits of shape (batch, seq_len, vocab_size) or hidden states.
        """
        batch_size, seq_len = x.shape

        # Embed time if conditioning is enabled
        time_emb = None
        if self.time_embedding is not None and t is not None:
            time_emb = self.time_embedding(t)  # (batch, dim)

        # Embed tokens
        h = self.token_embedding(x)  # (batch, seq_len, dim)

        # Track whether we're using in-context conditioning
        using_in_context = (
            self.cond_type in ["in_context", "in_context_zero"] and time_emb is not None
        )

        # Create conditioning mask for RoPE (None if not using in-context)
        conditioning_mask = None

        # Handle in-context conditioning: prepend time tokens with type embeddings
        if using_in_context:
            # Duplicate time tokens (MAR-style)
            # Shape: (batch, num_time_tokens, dim)
            time_tokens = time_emb.unsqueeze(1).repeat(1, self.num_time_tokens, 1)
            # Add type embedding to all duplicates (broadcasts to all)
            time_tokens = (
                time_tokens + self.time_type_embedding
            )  # (batch, num_time_tokens, dim)
            h = torch.cat(
                [time_tokens, h], dim=1
            )  # (batch, seq_len+num_time_tokens, dim)

            # Create conditioning mask: True for all conditioning tokens
            current_seq_len = h.shape[1]
            conditioning_mask = torch.zeros(
                batch_size, current_seq_len, dtype=torch.bool, device=x.device
            )
            conditioning_mask[:, : self.num_time_tokens] = (
                True  # All time tokens are conditioning
            )

            # Extend padding mask if provided
            if mask is not None:
                # Add True for time token position
                time_mask = torch.ones(
                    batch_size,
                    self.num_time_tokens,
                    dtype=mask.dtype,
                    device=mask.device,
                )
                mask = torch.cat([time_mask, mask], dim=1)

        # Add learned position embeddings if enabled
        if self.position_embedding is not None:
            if using_in_context:
                # In-context: only add position embeddings to sequence tokens (not conditioning)
                # Sequence tokens start after all conditioning tokens
                positions = (
                    torch.arange(seq_len, device=x.device)
                    .unsqueeze(0)
                    .expand(batch_size, -1)
                )
                h[:, self.num_time_tokens :] = h[
                    :, self.num_time_tokens :
                ] + self.position_embedding(positions)
            else:
                # Normal case: all tokens get position embeddings
                positions = (
                    torch.arange(seq_len, device=x.device)
                    .unsqueeze(0)
                    .expand(batch_size, -1)
                )
                h = h + self.position_embedding(positions)

        # Apply transformer blocks
        for block in self.blocks:
            if self.cond_type in ["adaln", "adaln_zero"]:
                h = block(
                    h, mask, time_emb, conditioning_mask
                )  # Pass time_emb for adaln/adaln_zero
            else:
                h = block(
                    h, mask, None, conditioning_mask
                )  # No time_emb for in_context/none

        h = self.norm_out(h)

        # Remove time tokens for in-context conditioning
        if using_in_context:
            h = h[:, self.num_time_tokens :, :]  # Remove all time tokens

        if return_hidden:
            return h

        # Project to vocabulary
        logits = self.head(h)  # (batch, seq_len, vocab_size)
        return logits
