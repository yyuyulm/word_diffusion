# Word Diffusion Transformer

PyTorch implementation of a discrete diffusion model (MD4) for word generation using character-level tokenization.

## Overview

This project implements a word generator using:

- **MD4 Framework**: Masked Discrete Diffusion for discrete data
- **Transformer Architecture**: Based on Qwen3 (RMSNorm, RoPE, Gated Attention, SwiGLU)
- **Character-level tokenization**: With special tokens `<EOW>`, `<PAD>`, `<MASK>`

## Files

- `dataset.py`: Character tokenizer and dataset classes
- `transformer.py`: Transformer architecture components
- `diffusion.py`: MD4 diffusion framework
- `train.py`: Training script

## Quick Start

### Model Sizes

Choose from predefined configurations (following modern LM scaling):

- `tiny`: 64 dim, 12 layers (~370K params) - Matches MD4 text8
- `small`: 256 dim, 12 layers (~7M params) - Fast training
- `medium`: 512 dim, 18 layers (~30M params) - Similar to Gemma 3
- `base`: 768 dim, 24 layers, 24 heads (~85M params) - Standard architecture
- `large`: 1024 dim, 28 layers, 32 heads (~140M params) - Similar to Qwen3/Granite small

### Train on small subset (for testing)

```bash
uv run --with torch --with pandas --with pyarrow --with tqdm \
  python train.py --max_words 1000 --epochs 20 --batch_size 64 --model_size tiny
```

### Full training

```bash
# Using predefined size
uv run --with torch --with pandas --with pyarrow --with tqdm \
  python train.py --epochs 50 --batch_size 128 --model_size base

# Or specify custom size
uv run --with torch --with pandas --with pyarrow --with tqdm \
  python train.py --epochs 50 --batch_size 128 --dim 256 --n_layers 6
```

### Options

- `--dim`: Model dimension (default: 128)
- `--n_layers`: Number of transformer layers (default: 4)
- `--n_heads`: Number of attention heads (default: 4)
- `--model_size`: Predefined size (tiny, small, medium, base, large)
- `--no_gating`: Disable gated attention
- `--schedule`: Noise schedule type (linear, cosine, poly2)
- `--timesteps`: Number of diffusion steps (default: 1000)
- `--pos_emb_type`: Position embedding (rope, learned, none)

### Experiment Tracking

Enable Weights & Biases logging:

```bash
# Self-hosted wandb
export WANDB_BASE_URL="https://your-wandb-server.com"
export WANDB_API_KEY="your-api-key"

python train.py --use_wandb --model_size base

# Sweep for hyperparameter search
wandb sweep sweep_config.yaml
wandb agent your-entity/word-diffusion/sweep-id
```

See [WANDB.md](WANDB.md) for full documentation.

## Hyperparameter Search

For architecture search and hyperparameter optimization, use wandb sweeps:

```bash
# Create sweep
wandb sweep sweep_config.yaml

# Run sweep agents (can run multiple in parallel)
wandb agent your-entity/word-diffusion/sweep-id
```

The `sweep_config.yaml` includes Bayesian optimization with early stopping. See [WANDB.md](WANDB.md) for details.

## Architecture Details

### Transformer

- **RoPE**: Rotary position embeddings
- **RMSNorm**: Root mean square normalization
- **Gated Attention**: Optional output gating (elementwise or headwise)
- **SwiGLU**: Gated feedforward network

### MD4 Diffusion

- **Masking**: Tokens are randomly masked with `<MASK>` token
- **Schedule**: Cosine/linear/polynomial masking rate
- **Loss**: Weighted cross-entropy on masked tokens
- **Sampling**: Ancestral sampling with iterative unmasking

## References

- MD4: [https://github.com/google-deepmind/md4]
- Gated Attention: [https://github.com/qiuzh20/gated_attention]
- Multi-token in-context conditioning: [Improved Mean Flows](https://arxiv.org/pdf/2512.02012)
