# Transformer Implementation Comparison

## Our Implementation vs Qwen3

### Overview

This document compares our simplified transformer implementation ([transformer.py](file:///Users/sylvia/github/ml-experiments/word_diffusion_transformer/transformer.py)) with the Qwen3 reference ([modeling_qwen3.py](file:///Users/sylvia/github/ml-experiments/word_diffusion_transformer/gated_attention/modeling_qwen3.py)).

---

## ✅ What We Kept (Core Architecture)

### 1. **RMSNorm**

Both implementations are **identical**:

```python
# Both: Ours & Qwen3
rms = sqrt(mean(x^2) + eps)
output = weight * (x / rms)
```

### 2. **Gated Attention Output**

Both support **elementwise** and **headwise** gating:

- **Elementwise**: Gate has same shape as attention output `(batch, seq, heads, head_dim)`
- **Headwise**: Gate has one scalar per head `(batch, seq, heads, 1)`

**Ours:**

```python
q_proj = Linear(dim, dim * 2)  # elementwise: Q + gate
q_proj = Linear(dim, dim + n_heads)  # headwise: Q + gate scalars
```

**Qwen3:**

```python
# Lines 277-279, 314-318 in modeling_qwen3.py
# Same logic, slightly different splitting syntax
```

### 3. **RoPE (Rotary Position Embeddings)**

Both use the same rotation formula:

```python
# Precompute inv_freq = 1 / (base^(i/dim))
# Apply: x_rotated = [x1*cos - x2*sin, x2*cos + x1*sin]
```

**Difference**:

- **Ours**: Apply RoPE inside attention module
- **Qwen3**: Precompute `(cos, sin)` outside and pass in via `position_embeddings` argument

### 4. **SwiGLU MLP**

Identical implementation:

```python
gate = silu(gate_proj(x))
up = up_proj(x)
output = down_proj(gate * up)
```

---

## ❌ What We Simplified/Removed

### 1. **KV Caching**

**Qwen3 has:** `past_key_value.update()` for inference speedup  
**We removed:** Not needed for training-only use case

### 2. **Grouped Query Attention (GQA)**

**Qwen3 has:** `num_key_value_heads` < `num_heads` with `repeat_kv()`  
**We have:** Standard MHA only (`num_kv_heads == num_heads`)

### 3. **Flash Attention**

**Qwen3 has:** `Qwen3FlashAttention2` class for efficient attention  
**We have:** Standard PyTorch `softmax(Q @ K.T) @ V`

### 4. **Sliding Window Attention**

**Qwen3 has:** Optional sliding window (only attend to recent tokens)  
**We have:** Full causal attention

### 5. **Q/K Normalization**

**Qwen3 has:** Optional `q_norm` and `k_norm` (RMSNorm on Q/K)  
**We don't have:** Skipped for simplicity

### 6. **Position Embeddings Management**

**Qwen3:** Passes `position_ids` and precomputed `(cos, sin)` through layers  
**Ours:** RoPE module embedded in attention, no position_ids needed

### 7. **Attention Mask Handling**

**Qwen3:** Complex mask with additive bias (`attn + mask`)  
**Ours:** Simple boolean mask (`masked_fill(-inf)`)

---

## 📊 Side-by-Side Comparison

| Feature | Our Implementation | Qwen3 | Notes |
|---------|-------------------|-------|-------|
| **RMSNorm** | ✅ Identical | ✅ | No differences |
| **RoPE** | ✅ Core formula same | ✅ | Different integration |
| **Gated Attention** | ✅ Elementwise + Headwise | ✅ | Same logic |
| **SwiGLU MLP** | ✅ Identical | ✅ | No differences |
| **Pre-norm** | ✅ | ✅ | Both use pre-norm |
| **Attention Mask** | ✅ Bidirectional (no causal) | ✅ Causal | **Diffusion ≠ Autoregressive** |
| **KV Cache** | ❌ | ✅ | We removed |
| **GQA** | ❌ | ✅ | We removed |
| **Flash Attention** | ❌ | ✅ | We removed |
| **Sliding Window** | ❌ | ✅ | We removed |
| **Q/K Norm** | ❌ | ✅ Optional | We removed |
| **Bias in projections** | ❌ bias=False | ❌ bias=False | Both no bias |

---

## 🔍 Detailed Code Comparison

### Key Difference: Bidirectional vs Causal Attention

**Our implementation (diffusion):**

```python
# No causal mask - attend to all positions!
attn = (q @ k.T) * scale
# Only padding mask if provided
attn = softmax(attn)
```

**Qwen3 (autoregressive):**

```python
# Causal mask - only attend to past
attn = (q @ k.T) * scale
causal_mask = triu(ones(seq, seq), diagonal=1)  # Upper triangular
attn = attn.masked_fill(causal_mask, -inf)  # Block future
attn = softmax(attn)
```

This is critical: **Diffusion models need to see the entire sequence** (including "future" positions) to denoise properly. Autoregressive models only see the past to predict the next token.

### Attention Forward Pass

**Our implementation (simplified):**

```python
# 1. Project Q, K, V
q = q_proj(x)  # (batch, seq, dim) or (batch, seq, dim*2) with gating
k = k_proj(x)
v = v_proj(x)

# 2. Extract gate if using gating
if elementwise_gating:
    q, gate = q.chunk(2, dim=-1)

# 3. Reshape to multi-head
q = q.view(batch, seq, heads, head_dim)

# 4. Apply RoPE
q, k = rope(q, k)

# 5. Transpose for attention
q = q.transpose(1, 2)  # (batch, heads, seq, head_dim)

# 6. Compute attention
attn = (q @ k.T) * scale
attn = softmax(attn)
out = attn @ v

# 7. Apply gating
out = out * sigmoid(gate)

# 8. Output projection
out = o_proj(out)
```

**Qwen3 (with all features):**

```python
# Similar steps but with:
# - position_embeddings passed in
# - past_key_value caching
# - repeat_kv for GQA
# - optional q_norm/k_norm
# - complex mask handling
```

---

## 🎯 Key Takeaways

### What makes our implementation "Qwen3-like"

1. ✅ **RMSNorm** instead of LayerNorm
2. ✅ **RoPE** instead of learned/sinusoidal embeddings
3. ✅ **Gated attention output** (unique to Qwen3)
4. ✅ **SwiGLU** instead of standard FFN
5. ✅ **Pre-norm architecture**

### What we simplified

1. ❌ No KV caching (inference optimization)
2. ❌ No GQA (parameter efficiency)
3. ❌ No Flash Attention (speed optimization)
4. ❌ Simpler mask handling

### Why these simplifications are fine

- **Training-only**: We don't need KV cache or inference optimizations
- **Small scale**: Flash Attention and GQA are important for large models, less critical for our word generation task
- **Ablations**: Keeping it simple makes it easier to experiment with architecture variants

---

## 🧪 Ablation Experiments Possible

Thanks to our simple implementation, you can easily try:

1. **Remove gating**: `--no_gating`
2. **Change position encoding**: Replace RoPE with absolute or none
3. **Different normalization**: Swap RMSNorm for LayerNorm
4. **Standard MLP**: Replace SwiGLU with FFN
5. **Post-norm**: Move norm after residual instead of before

---

## Summary

Our implementation captures the **core innovations** of Qwen3 architecture (RMSNorm, RoPE, Gated Attention, SwiGLU) while removing inference-only optimizations and advanced features not critical for our word diffusion task. This makes it:

- ✅ **Easier to understand**
- ✅ **Easier to modify** for ablations
- ✅ **Sufficient** for training and research
- ❌ **Less optimized** for large-scale inference (but we don't need that)
