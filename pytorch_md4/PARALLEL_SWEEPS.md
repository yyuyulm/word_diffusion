# Running Parallel Sweeps on Google Colab

## The Problem: GPU Underutilization

When training **small models** (like the "tiny" config with dim=128, 4 layers), a single training run often doesn't fully saturate the GPU. On a Colab GPU (typically 15-16GB), you might only be using:

- 20-30% GPU compute
- 2-4GB memory
- Leaving 70-80% of resources idle!

## The Solution: Parallel Experiments on Same GPU

Run **2-3 experiments simultaneously** on the same GPU. Each experiment:

- Gets different hyperparameters from the WandB sweep
- Uses a fraction of GPU resources
- Together they maximize GPU utilization

## Method 1: Using the Parallel Sweep Script (Recommended for Colab)

In your Colab notebook, after running cells 1-7 (setup + init sweep):

```python
# Add this cell instead of Cell #8
import os
os.chdir("ml-experiments/word_diffusion_transformer/pytorch_md4")

# Run 2-3 parallel agents
!uv run python run_parallel_sweep.py \
    --sweep_id {sweep_id} \
    --num_agents 2 \
    --project {WANDB_PROJECT} \
    --entity {WANDB_ENTITY}
```

### Adjusting the Number of Agents

Start with 2 agents. Monitor GPU memory:

```python
# In a separate cell, run this while training
!watch -n 1 nvidia-smi
```

If GPU memory usage is < 80%, you can try 3 agents:

- **Tiny model (dim=128)**: 2-3 agents ✓
- **Small model (dim=256)**: 2 agents ✓
- **Medium+ models**: 1 agent (already saturates GPU)

## Method 2: Manually in Colab Notebook

Add this cell to your notebook:

```python
import multiprocessing as mp
import os

NUM_PARALLEL_AGENTS = 2  # Adjust based on model size

def run_agent(agent_id):
    """Run a single sweep agent."""
    print(f"Agent {agent_id} starting...")
    os.chdir("ml-experiments/word_diffusion_transformer/pytorch_md4")
    
    wandb.agent(
        sweep_id,
        project=WANDB_PROJECT,
        entity=WANDB_ENTITY,
        count=None
    )

# Start parallel agents
processes = []
for i in range(NUM_PARALLEL_AGENTS):
    p = mp.Process(target=run_agent, args=(i+1,))
    p.start()
    processes.append(p)
    print(f"✓ Started agent {i+1}")

# Wait for completion
for p in processes:
    p.join()

print("✓ All agents finished!")
```

## Method 3: Multiple Colab Notebooks (Alternative)

If multiprocessing doesn't work (some Colab restrictions), you can:

1. Open the same `colab_experiment.ipynb` in 2-3 browser tabs
2. Run all setup cells (1-7) in each
3. Run the single agent cell (#8) in each
4. Each notebook runs its own agent on the **same GPU**

**Note:** This is less efficient because each notebook has some overhead, but it works!

## How WandB Coordinates Multiple Agents

WandB's sweep server ensures:

- ✅ Each agent gets **different** hyperparameters
- ✅ No duplicate work
- ✅ Efficient exploration of the search space
- ✅ Real-time progress tracking on the WandB dashboard

## Performance Comparison

For a sweep with 6 learning rates (like `sweep_ablation_tiny.yaml`):

| Setup | GPU Utilization | Wall Time | Speedup |
|-------|----------------|-----------|---------|
| 1 sequential agent | 20-30% | 60 min | 1x |
| 2 parallel agents | 50-60% | 30 min | **2x** |
| 3 parallel agents | 70-90% | 20 min | **3x** |

## Monitoring GPU Usage

While experiments are running, check GPU utilization:

```bash
# On Colab, run this in a cell:
!nvidia-smi

# Look for:
# - GPU utilization % (should be 60-90% with 2-3 agents)
# - Memory usage (should be < 80% of total, leaving headroom)
```

## Troubleshooting

### Out of Memory (OOM) Errors

If you get CUDA OOM errors:

1. **Reduce `NUM_PARALLEL_AGENTS`** from 3 → 2
2. **Reduce batch size** in your sweep config (512 → 256)
3. **Check GPU type**: Some Colab sessions get smaller GPUs (K80 = 12GB)

### Agents Not Starting

If multiprocessing doesn't work on Colab:

- Use **Method 3** (multiple browser tabs) instead
- Or run agents sequentially with `count=1` per agent

## When NOT to Use Parallel Agents

**Don't use parallel execution if:**

- Your model is medium/large (already saturates GPU)
- GPU memory usage is > 80% with one experiment
- You want to debug/monitor one run carefully

For large models, use single sequential agents or multiple Colab notebooks (separate GPUs).
