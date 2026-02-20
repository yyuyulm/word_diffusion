# Weights & Biases Integration

## Setup

### Self-Hosted Wandb

If you're running a self-hosted wandb server:

```bash
# Set your wandb server URL and API key
export WANDB_BASE_URL="https://your-wandb-server.com"
export WANDB_API_KEY="your-api-key"

# Or pass as arguments
python train.py --use_wandb \
  --wandb_base_url https://your-wandb-server.com \
  --wandb_api_key your-api-key
```

### Cloud Wandb

```bash
# Login once
wandb login

# Then just enable wandb
python train.py --use_wandb
```

## Basic Usage

### Single Run with Wandb

```bash
python train.py \
  --use_wandb \
  --wandb_project word-diffusion \
  --wandb_name "baseline-run" \
  --model_size base \
  --epochs 50
```

### Custom Run Grouping

```bash
# All runs with same project/entity are grouped together
python train.py \
  --use_wandb \
  --wandb_project my-experiments \
  --wandb_entity my-team \
  --wandb_name "exp-1-rope" \
  --pos_emb_type rope
```

## Sweeps (Hyperparameter Search)

### 1. Grid Search

```yaml
# sweep_grid.yaml
program: train.py
method: grid
metric:
  name: val/loss
  goal: minimize
parameters:
  dim:
    values: [64, 128, 256]
  n_layers:
    values: [12, 18, 24]
  use_wandb:
    value: true
```

```bash
# Create sweep
wandb sweep sweep_grid.yaml

# Run agents (can run multiple in parallel!)
wandb agent your-entity/word-diffusion/sweep-id
```

### 2. Bayesian Optimization

Use the provided `sweep_config.yaml`:

```bash
# Create sweep
wandb sweep sweep_config.yaml

# Run agent
wandb agent your-entity/word-diffusion/sweep-id

# Run multiple agents in parallel
wandb agent your-entity/word-diffusion/sweep-id &
wandb agent your-entity/word-diffusion/sweep-id &
```

### 3. Random Search

```yaml
method: random
parameters:
  lr:
    distribution: log_uniform_values
    min: 1e-4
    max: 1e-2
  dim:
    values: [128, 256, 512, 768]
  n_layers:
    distribution: int_uniform
    min: 6
    max: 24
```

## What Gets Logged

**Automatically logged:**

- All hyperparameters (args)
- Train/val metrics every epoch:
  - `train/loss`, `train/loss_diff`, `train/loss_recon`
  - `val/loss`, `val/loss_diff`, `val/loss_recon`
  - `train/mask_ratio`
- Generated samples (as tables)
- Best validation loss
- System metrics (GPU, CPU, memory)

**Access via dashboard:**

- Real-time metric plots
- Hyperparameter importance
- Parallel coordinates plot
- Sample comparison

## Early Stopping with Hyperband

The `sweep_config.yaml` includes Hyperband early termination:

```yaml
early_terminate:
  type: hyperband
  min_iter: 5
  eta: 2
  s: 2
```

This stops poorly performing runs early to save compute!

## Comparing Runs

After training, view in dashboard:

1. Go to wandb UI
2. Select multiple runs
3. Compare metrics side-by-side
4. Use parallel coordinates to visualize hyperparameter effects

## Resume Failed Runs

Wandb automatically handles resumption:

```bash
# If a run crashes, just restart with same args
python train.py --use_wandb --wandb_name same-run-name

# Wandb will ask if you want to resume
```

## Offline Mode

For self-hosted with no internet:

```bash
# Run offline
export WANDB_MODE=offline
python train.py --use_wandb

# Sync later
wandb sync wandb/offline-run-*
```

## Tips

1. **Tag runs**: Use `--wandb_name` with descriptive names
2. **Parallel sweeps**: Run multiple agents on different GPUs
3. **Early stopping**: Enable in sweep config to save time
4. **Group experiments**: Use same project for related experiments
5. **Notes**: Add notes to runs in UI to track ideas

## Without Wandb

If you don't want wandb, simply don't use `--use_wandb` flag. Everything works normally without it.
