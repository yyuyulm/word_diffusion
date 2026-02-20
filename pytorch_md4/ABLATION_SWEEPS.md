# Ablation Study Sweeps for Tiny Model

Four separate wandb sweeps for systematic ablation study on the tiny model configuration.

## Baseline Configuration

All sweeps use this baseline:

- **Model**: tiny (dim=64, n_layers=12, n_heads=4)
- **Dataset**: Full data (all words)
- **Training**: 10 epochs, 200 timesteps
- **Gating**: None (`gating_type=none`)
- **Position embedding**: Learned (`pos_emb_type=learned`)
- **Conditioning**: AdaLN-Zero (`cond_type=adaln_zero`)
- **Learning rate**: 1e-3 (for non-LR ablations)

## Sweep Files

### 1. Learning Rate Sweep

**File**: [`sweep_ablation_tiny.yaml`](file:///Users/sylvia/github/ml-experiments/word_diffusion_transformer/pytorch_md4/sweep_ablation_tiny.yaml)

- **Varies**: Learning rate
- **Values**: `[1e-4, 3e-4, 5e-4, 1e-3, 2e-3, 3e-3]`
- **Runs**: 6

### 2. Gating Ablation

**File**: [`sweep_ablation_gating.yaml`](file:///Users/sylvia/github/ml-experiments/word_diffusion_transformer/pytorch_md4/sweep_ablation_gating.yaml)

- **Varies**: Gating type
- **Values**: `["none", "elementwise"]` (baseline is `none`)
- **Runs**: 2

### 3. Position Embedding Ablation

**File**: [`sweep_ablation_posemb.yaml`](file:///Users/sylvia/github/ml-experiments/word_diffusion_transformer/pytorch_md4/sweep_ablation_posemb.yaml)

- **Varies**: Position embedding type
- **Values**: `["learned", "rope"]` (baseline is `learned`)
- **Runs**: 2

### 4. Conditioning Type Ablation

**File**: [`sweep_ablation_conditioning.yaml`](file:///Users/sylvia/github/ml-experiments/word_diffusion_transformer/pytorch_md4/sweep_ablation_conditioning.yaml)

- **Varies**: Time conditioning type
- **Values**: `["adaln_zero", "adaln", "in_context", "in_context_zero", "none"]` (baseline is `adaln_zero`)
- **Runs**: 5

**Total experiments**: 15 runs (6 + 2 + 2 + 5)

## Running the Sweeps

### Initialize All Sweeps

```bash
cd /Users/sylvia/github/ml-experiments/word_diffusion_transformer/pytorch_md4

# Initialize each sweep
wandb sweep sweep_ablation_tiny.yaml
wandb sweep sweep_ablation_gating.yaml
wandb sweep sweep_ablation_posemb.yaml
wandb sweep sweep_ablation_conditioning.yaml
```

Each command returns a sweep ID like: `username/word-diffusion/abc123xyz`

### Start Agents

Run an agent for each sweep ID:

```bash
# Option 1: Run in parallel (4 agents)
wandb agent <entity>/word-diffusion/<lr-sweep-id> &
wandb agent <entity>/word-diffusion/<gating-sweep-id> &
wandb agent <entity>/word-diffusion/<posemb-sweep-id> &
wandb agent <entity>/word-diffusion/<conditioning-sweep-id> &

# Option 2: Run sequentially
wandb agent <entity>/word-diffusion/<lr-sweep-id>
# After completion, run next sweep...
```

### Monitor Results

Visit your wandb project: `https://wandb.ai/<username>/word-diffusion`

- Navigate to "Sweeps" tab
- Compare validation loss across ablations
- Identify best learning rate and architectural choices

## Analysis Guide

After sweeps complete, analyze:

1. **Best Learning Rate**: Which LR achieves lowest validation loss?
2. **Gating Impact**: Does enabling gating improve performance?
3. **Position Embedding**: Is learned or rope better for word generation?
4. **Conditioning Type**: Which conditioning method works best?

Use the best configuration from each ablation to guide final model design.

## Early Termination

All sweeps use Hyperband early stopping to save compute on poor-performing runs (minimum 3 epochs before termination).
