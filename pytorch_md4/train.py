"""
Training script for Word Diffusion Transformer.
"""

import argparse
import copy
import random
from pathlib import Path

import numpy as np
import torch
from torch.utils.data import DataLoader, random_split
from torch.cuda.amp import autocast, GradScaler
from tqdm.auto import tqdm

try:
    import wandb

    WANDB_AVAILABLE = True
except ImportError:
    WANDB_AVAILABLE = False
    wandb = None

from dataset import CharacterTokenizer, WordDataset, collate_fn
from diffusion import MD4
from jit import JiT
from model_config import MODEL_CONFIGS, get_model_config


def update_ema(ema_model, model, ema_rate=0.9999):
    """Update EMA parameters.

    Args:
        ema_model: Model holding EMA parameters
        model: Current training model
        ema_rate: EMA decay rate (default: 0.9999)
    """
    with torch.no_grad():
        for ema_param, param in zip(ema_model.parameters(), model.parameters()):
            ema_param.data.mul_(ema_rate).add_(param.data, alpha=1 - ema_rate)


def train_epoch(
    model,
    dataloader,
    optimizer,
    device,
    epoch,
    ema_model=None,
    ema_rate=0.9999,
    use_wandb=False,
    global_step=0,
    log_interval=10,
    scheduler=None,
    scaler=None,
):
    """Train for one epoch."""
    model.train()
    total_loss = 0
    total_metrics = {}  # Use empty dict and accumulate dynamically

    pbar = tqdm(dataloader, desc=f"Epoch {epoch}")
    for batch_idx, batch in enumerate(pbar):
        batch = batch.to(device)

        # Forward pass (with mixed precision if enabled)
        if scaler is not None:
            # Mixed precision training
            with autocast():
                loss, metrics = model.compute_loss(batch)

            # Backward pass with gradient scaling
            for opt in optimizer:
                opt.zero_grad()
            scaler.scale(loss).backward()
            for opt in optimizer:
                scaler.step(opt)
                scaler.update()
        else:
            # Standard FP32 training
            loss, metrics = model.compute_loss(batch)

            # Backward pass
            for opt in optimizer:
                opt.zero_grad()
            loss.backward()
            for opt in optimizer:
                opt.step()

        # Update learning rate scheduler (handle list of schedulers)
        if scheduler is not None:
            for sched in scheduler:
                sched.step()

        # Update EMA parameters
        if ema_model is not None and ema_rate > 0.0:
            update_ema(ema_model, model, ema_rate)

        # Accumulate metrics dynamically
        total_loss += loss.item()
        for key, value in metrics.items():
            if key not in total_metrics:
                total_metrics[key] = 0
            total_metrics[key] += value

        # Update progress bar
        if batch_idx % 10 == 0:
            postfix = {"loss": f"{loss.item():.4f}"}
            if "mask_ratio" in metrics:
                postfix["mask_ratio"] = f"{metrics['mask_ratio']:.2f}"
            if "t_mean" in metrics:
                postfix["t_mean"] = f"{metrics['t_mean']:.3f}"
            pbar.set_postfix(postfix)

        # Log to wandb per step
        if use_wandb and batch_idx % log_interval == 0:
            if WANDB_AVAILABLE:
                log_dict = {
                    "train/step_loss": loss.item(),
                    "train/step_loss_diff": metrics.get("loss_diff", 0),
                    "train/step_loss_recon": metrics.get("loss_recon", 0),
                    "train/step_mask_ratio": metrics.get("mask_ratio", 0),
                    "train/learning_rate": optimizer[0].param_groups[0]["lr"],
                    "step": global_step + batch_idx,
                }
                # Add GenMD4-specific metrics
                if "loss_nelbo" in metrics:
                    log_dict["train/step_loss_nelbo"] = metrics["loss_nelbo"]
                if "power_avg" in metrics:
                    log_dict["train/step_power_avg"] = metrics["power_avg"]
                    log_dict["train/step_power_min"] = metrics["power_min"]
                    log_dict["train/step_power_max"] = metrics["power_max"]
                wandb.log(log_dict)

    # Average metrics
    n_batches = len(dataloader)
    avg_loss = total_loss / n_batches
    avg_metrics = {k: v / n_batches for k, v in total_metrics.items()}
    avg_metrics["loss"] = avg_loss

    # Return updated global step
    return avg_metrics, global_step + n_batches


@torch.no_grad()
def evaluate(model, dataloader, device, use_ema_model=None, use_amp=False):
    """Evaluate model.

    Args:
        model: Model to evaluate (will be ignored if use_ema_model is provided)
        dataloader: Validation dataloader
        device: Device to use
        use_ema_model: Optional EMA model to use instead of the regular model
        use_amp: If True, use AMP (training precision); compare with FP16 deployment
    """
    # Use EMA model if provided, otherwise use regular model
    eval_model = use_ema_model if use_ema_model is not None else model
    eval_model.eval()

    # Training precision metrics (AMP if enabled, FP32 otherwise)
    total_loss_train = 0
    total_metrics_train = {}

    # FP16 deployment metrics (always FP16 for comparison)
    total_loss_fp16 = 0
    total_metrics_fp16 = {}

    for batch in tqdm(dataloader, desc="Evaluating"):
        batch = batch.to(device)

        # Training precision evaluation (AMP or FP32)
        if use_amp and device == "cuda":
            with autocast():
                loss_train, metrics_train = eval_model.compute_loss(batch)
        else:
            loss_train, metrics_train = eval_model.compute_loss(batch)

        total_loss_train += loss_train.item()
        for key, value in metrics_train.items():
            if key not in total_metrics_train:
                total_metrics_train[key] = 0
            total_metrics_train[key] += value

        # FP16 deployment evaluation (for deployment comparison)
        with autocast():
            loss_fp16, metrics_fp16 = eval_model.compute_loss(batch)
        total_loss_fp16 += loss_fp16.item()
        for key, value in metrics_fp16.items():
            if key not in total_metrics_fp16:
                total_metrics_fp16[key] = 0
            total_metrics_fp16[key] += value

    n_batches = len(dataloader)

    # Average training precision metrics
    avg_loss_train = total_loss_train / n_batches
    avg_metrics_train = {k: v / n_batches for k, v in total_metrics_train.items()}
    avg_metrics_train["loss"] = avg_loss_train

    # Average FP16 deployment metrics
    avg_loss_fp16 = total_loss_fp16 / n_batches
    avg_metrics_fp16 = {k: v / n_batches for k, v in total_metrics_fp16.items()}
    avg_metrics_fp16["loss"] = avg_loss_fp16

    # Always return both for comparison
    return avg_metrics_train, avg_metrics_fp16


@torch.no_grad()
def generate_samples(
    model, tokenizer, num_samples=10, device="cuda", use_fp16=False, num_steps=None
):
    """Generate and decode samples.

    Args:
        model: Model to sample from
        tokenizer: Tokenizer for decoding
        num_samples: Number of samples to generate
        device: Device to use
        use_fp16: If True, use FP16 precision for sampling (deployment mode)
        num_steps: Optional number of sampling steps (for deployment comparison)
    """
    # Temporarily override num_sampling_steps if specified
    original_steps = None
    if num_steps is not None and hasattr(model, "num_sampling_steps"):
        original_steps = model.num_sampling_steps
        model.num_sampling_steps = num_steps

    if use_fp16 and device == "cuda":
        # FP16 sampling (deployment mode)
        with autocast():
            samples = model.sample(batch_size=num_samples, device=device)
    else:
        # FP32 sampling (full precision)
        samples = model.sample(batch_size=num_samples, device=device)

    # Restore original steps
    if original_steps is not None:
        model.num_sampling_steps = original_steps

    samples = samples.cpu().numpy()

    words = []
    for sample in samples:
        # Show special tokens (PAD, MASK, EOW) to debug padding/masking issues
        word = tokenizer.decode(sample.tolist(), remove_special=False)
        words.append(word)

    return words


def main():
    parser = argparse.ArgumentParser(description="Train Word Diffusion Transformer")
    parser.add_argument(
        "--data_path",
        type=str,
        default="../data/words_dictionary.parquet",
        help="Path to parquet data file",
    )
    parser.add_argument(
        "--output_dir",
        type=str,
        default="output",
        help="Output directory for checkpoints",
    )
    parser.add_argument(
        "--model_size",
        type=str,
        default=None,
        choices=list(MODEL_CONFIGS.keys()),
        help="Predefined model size (tiny, small, medium, base, large). Overrides dim/n_layers/n_heads.",
    )
    parser.add_argument("--dim", type=int, default=128, help="Model dimension")
    parser.add_argument(
        "--n_layers", type=int, default=4, help="Number of transformer layers"
    )
    parser.add_argument(
        "--n_heads", type=int, default=4, help="Number of attention heads"
    )
    parser.add_argument("--batch_size", type=int, default=128, help="Batch size")
    parser.add_argument("--epochs", type=int, default=10, help="Number of epochs")
    parser.add_argument("--lr", type=float, default=1e-3, help="Learning rate")
    parser.add_argument(
        "--timesteps", type=int, default=100, help="Number of diffusion timesteps"
    )
    parser.add_argument(
        "--schedule",
        type=str,
        default="linear",
        choices=["linear", "cosine", "poly2"],
        help="Noise schedule type",
    )
    parser.add_argument(
        "--max_words",
        type=int,
        default=None,
        help="Maximum number of words to use (for testing)",
    )
    parser.add_argument(
        "--gating_type",
        type=str,
        default="none",
        choices=["elementwise", "none"],
        help="Gating type: 'elementwise' for gated attention, 'none' for no gating",
    )
    parser.add_argument(
        "--pos_emb_type",
        type=str,
        default="learned",
        choices=["rope", "learned", "none"],
        help="Position embedding type (rope, learned, none)",
    )
    parser.add_argument(
        "--cond_type",
        type=str,
        default="adaln_zero",
        choices=[
            "adaln",
            "adaln_zero",
            "in_context",
            "in_context_zero",
            "in_context_2",  # in_context with 2 tokens
            "in_context_zero_2",  # in_context_zero with 2 tokens
            "in_context_4",  # in_context with 4 tokens
            "in_context_zero_4",  # in_context_zero with 4 tokens
            "none",
        ],
        help="Time conditioning: adaln (normal init), adaln_zero (zero init), in_context (time tokens), in_context_zero (time tokens + zero output scales), in_context_N (N time tokens), in_context_zero_N (residual zero with N tokens), none",
    )
    parser.add_argument(
        "--device",
        type=str,
        default="mps"
        if torch.backends.mps.is_available()
        else "cuda"
        if torch.cuda.is_available()
        else "cpu",
        help="Device to use",
    )

    # Wandb arguments
    parser.add_argument(
        "--use_wandb", action="store_true", help="Enable Weights & Biases logging"
    )
    parser.add_argument(
        "--wandb_project", type=str, default="word-diffusion", help="Wandb project name"
    )
    parser.add_argument(
        "--wandb_entity", type=str, default=None, help="Wandb entity (username/team)"
    )
    parser.add_argument("--wandb_name", type=str, default=None, help="Wandb run name")
    parser.add_argument(
        "--wandb_base_url",
        type=str,
        default=None,
        help="Wandb base URL for self-hosted",
    )
    parser.add_argument(
        "--wandb_api_key",
        type=str,
        default=None,
        help="Wandb API key (or set WANDB_API_KEY env var)",
    )
    parser.add_argument(
        "--ema_rate",
        type=float,
        default=0.0,
        help="EMA decay rate (0.0 to disable EMA, 0.9999 to enable, default: 0.0)",
    )
    parser.add_argument(
        "--weight_decay",
        type=float,
        default=0.0,
        help="Weight decay for AdamW optimizer (default: 0.0)",
    )
    parser.add_argument(
        "--dropout",
        type=float,
        default=0.0,
        help="Dropout rate (default: 0.0 matching JAX text8)",
    )
    parser.add_argument(
        "--optimizer",
        type=str,
        default="adamw",
        choices=["adamw", "muon"],
        help="Optimizer choice: adamw or muon (default: adamw)",
    )
    parser.add_argument(
        "--compile",
        type=lambda x: str(x).lower() == "true",
        default=False,
        help="Use torch.compile for faster training (default: False)",
    )
    parser.add_argument(
        "--cont_time",
        type=lambda x: str(x).lower() == "true",
        default=True,
        help="Use continuous-time loss (True) or discrete-time loss (False) (default: True)",
    )
    parser.add_argument(
        "--warmup_steps",
        type=int,
        default=2000,
        help="Number of warmup steps for learning rate schedule (default: 2000 for JAX compatibility, use smaller values like 100 for short runs)",
    )
    parser.add_argument(
        "--num_time_tokens",
        type=int,
        default=1,
        help="Number of time conditioning tokens for in_context modes (MAR-style duplication, default: 1)",
    )
    parser.add_argument(
        "--model_type",
        type=str,
        default="md4",
        choices=["md4", "genmd4", "jit"],
        help="Model type: md4 (discrete masking), genmd4 (learnable schedules + REINFORCE), jit (continuous flow matching) (default: md4)",
    )
    # GenMD4-specific arguments
    parser.add_argument(
        "--t1",
        type=float,
        default=1e-3,
        help="GenMD4: Minimum time to avoid numerical issues at t=0 (default: 1e-3)",
    )
    parser.add_argument(
        "--power_init",
        type=float,
        default=1.0,
        help="GenMD4: Initial value for schedule exponents (default: 1.0)",
    )
    # JiT-specific arguments
    parser.add_argument(
        "--noise_scale",
        type=float,
        default=1.0,
        help="JiT: Scale of Gaussian noise for flow matching (default: 1.0)",
    )
    parser.add_argument(
        "--P_mean",
        type=float,
        default=-0.8,
        help="JiT: Mean of log-normal time distribution (default: -0.8)",
    )
    parser.add_argument(
        "--P_std",
        type=float,
        default=0.8,
        help="JiT: Std of log-normal time distribution (default: 0.8)",
    )
    parser.add_argument(
        "--num_sampling_steps",
        type=int,
        default=50,
        help="JiT: Number of ODE integration steps for sampling (default: 50)",
    )
    parser.add_argument(
        "--ode_method",
        type=str,
        default="heun",
        choices=["euler", "heun"],
        help="JiT: ODE solver method (euler=1st order, heun=2nd order) (default: heun)",
    )
    parser.add_argument(
        "--no_val",
        action="store_true",
        help="Use full dataset for training (no validation split)",
    )
    parser.add_argument(
        "--use_amp",
        type=lambda x: str(x).lower() == "true",
        default=False,
        help="Use Automatic Mixed Precision (AMP) training for faster training on CUDA GPUs (default: False)",
    )
    parser.add_argument(
        "--seed",
        type=int,
        default=42,
        help="Random seed for reproducibility (default: 42)",
    )

    args = parser.parse_args()

    # Set random seeds for reproducibility
    torch.manual_seed(args.seed)
    if torch.cuda.is_available():
        torch.cuda.manual_seed_all(args.seed)
    np.random.seed(args.seed)
    random.seed(args.seed)
    # For deterministic behavior (may impact performance)
    # torch.backends.cudnn.deterministic = True
    # torch.backends.cudnn.benchmark = False

    # Parse convenience aliases for in_context conditioning with token counts
    # e.g., "in_context_2" -> cond_type="in_context", num_time_tokens=2
    if args.cond_type.startswith("in_context_zero_"):
        # Extract number from suffix
        token_count = int(args.cond_type.split("_")[-1])
        args.cond_type = "in_context_zero"
        args.num_time_tokens = token_count
    elif (
        args.cond_type.startswith("in_context_") and args.cond_type != "in_context_zero"
    ):
        # Extract number from suffix
        token_count = int(args.cond_type.split("_")[-1])
        args.cond_type = "in_context"
        args.num_time_tokens = token_count

    # Apply model size config if specified (BEFORE wandb init so it logs correctly)
    if args.model_size is not None:
        config = get_model_config(args.model_size)
        args.dim = config["dim"]
        args.n_layers = config["n_layers"]
        args.n_heads = config["n_heads"]
        # Apply gating_type if specified in model config
        if "gating_type" in config:
            args.gating_type = config["gating_type"]
        print(f"\nUsing '{args.model_size}' model config:")
        print(f"  {config['description']}")
        print(f"  dim={args.dim}, n_layers={args.n_layers}, n_heads={args.n_heads}")
        if "gating_type" in config:
            print(f"  gating_type={args.gating_type}")

    # Check wandb availability
    if args.use_wandb and not WANDB_AVAILABLE:
        print("Warning: wandb requested but not installed. Run: pip install wandb")
        print("Continuing without wandb...")
        args.use_wandb = False

    # Initialize wandb
    if args.use_wandb:
        # Set API key if provided
        if args.wandb_api_key:
            import os

            os.environ["WANDB_API_KEY"] = args.wandb_api_key

        # Set base URL for self-hosted
        if args.wandb_base_url:
            import os

            os.environ["WANDB_BASE_URL"] = args.wandb_base_url

        wandb.init(
            project=args.wandb_project,
            entity=args.wandb_entity,
            name=args.wandb_name,
            config=vars(args),
        )
        print(f"Wandb initialized: {wandb.run.url}")

    # Create output directory
    output_dir = Path(args.output_dir)
    output_dir.mkdir(parents=True, exist_ok=True)

    # Load data and build tokenizer
    print("Loading data...")
    import pandas as pd

    df = pd.read_parquet(args.data_path)
    words = df["word"].tolist()

    if args.max_words is not None:
        words = words[: args.max_words]
        print(f"Using {len(words)} words for training")

    # Build tokenizer
    tokenizer = CharacterTokenizer()
    tokenizer.build_vocab(words)
    print(f"Vocabulary size: {tokenizer.vocab_size}")

    # Save tokenizer
    tokenizer.save(output_dir / "tokenizer.json")

    # Create dataset
    # First save filtered parquet if using max_words
    if args.max_words is not None:
        temp_parquet = output_dir / "temp_data.parquet"
        df_filtered = pd.DataFrame({"word": words})
        df_filtered.to_parquet(temp_parquet)
        data_path = temp_parquet
    else:
        data_path = args.data_path

    dataset = WordDataset(data_path, tokenizer)

    # Split into train/val (or use full dataset if --no_val)
    if args.no_val:
        train_dataset = dataset
        val_dataset = None
        train_size = len(dataset)
        val_size = 0

        train_loader = DataLoader(
            train_dataset,
            batch_size=args.batch_size,
            shuffle=True,
            collate_fn=collate_fn,
            num_workers=2,
            pin_memory=True,
        )
        val_loader = None

        print(f"Train size: {train_size} (using full dataset, no validation)")
    else:
        train_size = int(0.9 * len(dataset))
        val_size = len(dataset) - train_size
        train_dataset, val_dataset = random_split(dataset, [train_size, val_size])

        train_loader = DataLoader(
            train_dataset,
            batch_size=args.batch_size,
            shuffle=True,
            collate_fn=collate_fn,
            num_workers=2,
            pin_memory=True,
        )
        val_loader = DataLoader(
            val_dataset,
            batch_size=args.batch_size,
            shuffle=False,
            collate_fn=collate_fn,
            num_workers=2,
            pin_memory=True,
        )

        print(f"Train size: {train_size}, Val size: {val_size}")

    print(f"Max sequence length: {dataset.max_length}")

    # Create model
    print("\nCreating model...")

    if args.model_type == "jit":
        # Create JiT model (continuous flow matching)
        model = JiT(
            vocab_size=tokenizer.vocab_size,
            max_seq_len=dataset.max_length,
            dim=args.dim,
            n_layers=args.n_layers,
            n_heads=args.n_heads,
            dropout=args.dropout,
            gating_type=args.gating_type,
            position_embedding_type=args.pos_emb_type,
            cond_type=args.cond_type,
            num_time_tokens=args.num_time_tokens,
            noise_scale=args.noise_scale,
            P_mean=args.P_mean,
            P_std=args.P_std,
            t_eps=1e-3,
        )
    else:
        # Create MD4 or GenMD4 model (discrete diffusion)
        model = MD4(
            vocab_size=tokenizer.vocab_size,
            max_seq_len=dataset.max_length,
            dim=args.dim,
            n_layers=args.n_layers,
            n_heads=args.n_heads,
            dropout=args.dropout,
            gating_type=args.gating_type,
            schedule_type=args.schedule,
            timesteps=args.timesteps,
            position_embedding_type=args.pos_emb_type,
            cond_type=args.cond_type,
            cont_time=args.cont_time,
            num_time_tokens=args.num_time_tokens,
            model_type=args.model_type,  # Changed from loss_type
            t1=args.t1,
            power_init=args.power_init,
        )
    model = model.to(args.device)

    # Apply torch.compile if requested
    if args.compile:
        print("Compiling model with torch.compile...")
        model = torch.compile(model, mode="default")
        print("Model compiled!")

    # Count parameters
    n_params = sum(p.numel() for p in model.parameters() if p.requires_grad)
    print(f"Model parameters: {n_params:,}")

    # Update wandb with actual model config (parameters that aren't in argparse)
    if args.use_wandb:
        wandb.config.update(
            {
                "vocab_size": tokenizer.vocab_size,
                "max_seq_len": dataset.max_length,
                "use_gating": (args.gating_type != "none"),
                "dropout": 0.0,  # Current hardcoded default
                "antithetic_sampling": True,  # Current hardcoded default
                "n_params": n_params,  # Total trainable parameters
                "ema_rate": args.ema_rate,  # EMA decay rate
                "cont_time": args.cont_time,  # Continuous vs discrete time loss
            },
            allow_val_change=True,
        )

    # Create EMA model if enabled
    ema_model = None
    if args.ema_rate > 0.0:
        ema_model = copy.deepcopy(model)
        ema_model.eval()
        print(f"EMA enabled with rate: {args.ema_rate}")

    # Optimizer - select based on CLI argument
    if args.optimizer == "muon":
        # PyTorch Muon only supports 2D parameters (weight matrices)
        # Split parameters into 2D (for Muon) and 1D (for AdamW)
        muon_params = []
        adamw_params = []

        for name, param in model.named_parameters():
            if param.requires_grad:
                if param.ndim >= 2:
                    muon_params.append(param)
                else:
                    adamw_params.append(param)

        print(
            f"Muon params (2D): {len(muon_params)}, AdamW params (1D): {len(adamw_params)}"
        )

        # Create Muon optimizer for 2D params
        muon_optimizer = torch.optim.Muon(
            muon_params,
            lr=args.lr,
            weight_decay=args.weight_decay,
            momentum=0.95,
            nesterov=True,
            ns_steps=5,
            adjust_lr_fn="match_rms_adamw",
        )

        # Create AdamW optimizer for 1D params (biases, norms, embeddings)
        adamw_optimizer = torch.optim.AdamW(
            adamw_params,
            lr=args.lr,
            weight_decay=args.weight_decay,
            betas=(0.9, 0.999),
        )

        # Combine into a list for the training loop
        optimizer = [muon_optimizer, adamw_optimizer]
        print(
            f"Using Muon (2D params) + AdamW (1D params), lr={args.lr}, wd={args.weight_decay}"
        )
    else:  # adamw
        optimizer = torch.optim.AdamW(
            model.parameters(),
            lr=args.lr,
            weight_decay=args.weight_decay,
            betas=(0.9, 0.999),
        )
        optimizer = [optimizer]  # Wrap in list for consistent interface
        print(f"Using AdamW optimizer (lr={args.lr}, wd={args.weight_decay})")

    # Learning rate scheduler - always use cosine with warmup (matching JAX)
    import math
    from torch.optim.lr_scheduler import LambdaLR

    warmup_steps = args.warmup_steps

    def get_lr_lambda(warmup_steps, total_steps):
        def lr_lambda(step):
            if step < warmup_steps:
                # Linear warmup
                return step / max(1, warmup_steps)
            else:
                # Cosine decay
                progress = (step - warmup_steps) / max(1, total_steps - warmup_steps)
                return 0.5 * (1.0 + math.cos(math.pi * progress))

        return lr_lambda

    total_steps = args.epochs * len(train_loader)
    # Create scheduler for each optimizer in the list
    scheduler = [
        LambdaLR(opt, get_lr_lambda(warmup_steps, total_steps)) for opt in optimizer
    ]
    print(f"Using cosine LR schedule with {warmup_steps} warmup steps")

    # Create GradScaler for mixed precision training if enabled
    scaler = None
    if args.use_amp:
        if args.device == "cuda":
            scaler = GradScaler()
            print("Mixed precision training enabled (AMP)")
        else:
            print(
                f"Warning: --use_amp is only supported on CUDA. Running in FP32 on {args.device}."
            )

    # Training loop
    best_val_loss = float("inf")
    global_step = 0  # Track global step across epochs

    for epoch in range(1, args.epochs + 1):
        print(f"\nEpoch {epoch}/{args.epochs}")

        # Train
        train_metrics, global_step = train_epoch(
            model,
            train_loader,
            optimizer,
            args.device,
            epoch,
            ema_model=ema_model,
            ema_rate=args.ema_rate,
            use_wandb=args.use_wandb,
            global_step=global_step,
            log_interval=10,  # Log every 10 batches
            scheduler=scheduler,
            scaler=scaler,
        )
        # Console output (conditional for JiT vs MD4/GenMD4)
        train_output = f"Train - Loss: {train_metrics['loss']:.4f}"
        if "loss_diff" in train_metrics:
            train_output += f", Loss Diff: {train_metrics['loss_diff']:.4f}"
        if "mask_ratio" in train_metrics:
            train_output += f", Mask Ratio: {train_metrics['mask_ratio']:.2f}"
        if "loss_nelbo" in train_metrics:
            train_output += f", NELBO: {train_metrics['loss_nelbo']:.4f}"
        if "power_avg" in train_metrics:
            train_output += f", Power: {train_metrics['power_avg']:.2f}"
        if "t_mean" in train_metrics:
            train_output += f", T: {train_metrics['t_mean']:.3f}±{train_metrics.get('t_std', 0):.3f}"
        print(train_output)

        # Evaluate (skip if no validation set)
        if val_loader is not None:
            # Evaluate at training precision and FP16 deployment precision
            val_metrics_train, val_metrics_fp16 = evaluate(
                model,
                val_loader,
                args.device,
                use_ema_model=ema_model,
                use_amp=args.use_amp,
            )

            # Determine if FP16 metrics were returned (i.e., if FP16 evaluation was performed)
            has_fp16 = val_metrics_fp16 is not None

            # Use training precision as primary for console output and checkpointing
            val_metrics = val_metrics_train

            # Get ELBO for comparison (more generalizable across models)
            train_elbo = val_metrics_train.get("loss_nelbo", val_metrics_train["loss"])
            fp16_elbo = (
                val_metrics_fp16.get("loss_nelbo", val_metrics_fp16["loss"])
                if has_fp16
                else None
            )

            # Console output (conditional for JiT vs MD4/GenMD4)
            precision_name = "AMP" if args.use_amp else "FP32"
            val_output = f"Val - Loss ({precision_name}): {val_metrics['loss']:.4f}"
            if has_fp16:
                val_output += f" | Loss (FP16): {val_metrics_fp16['loss']:.4f}"
            if "loss_nelbo" in val_metrics:
                val_output += f", ELBO ({precision_name}): {train_elbo:.4f}"
                if has_fp16 and fp16_elbo is not None:
                    val_output += f" | ELBO (FP16): {fp16_elbo:.4f}"
            if "loss_diff" in val_metrics:
                val_output += f", Loss Diff: {val_metrics['loss_diff']:.4f}"
            if "power_avg" in val_metrics:
                val_output += f", Power: {val_metrics['power_avg']:.2f}"
            print(val_output)

            # Log to wandb
            if args.use_wandb:
                log_dict = {
                    "epoch": epoch,
                    "train/loss": train_metrics["loss"],
                    "train/loss_diff": train_metrics.get("loss_diff", 0),
                    "train/loss_recon": train_metrics.get("loss_recon", 0),
                    "train/mask_ratio": train_metrics.get("mask_ratio", 0),
                    "val/loss_train_prec": val_metrics["loss"],
                    "val/loss_diff_train_prec": val_metrics.get("loss_diff", 0),
                }
                # FP16 deployment comparison metrics
                if has_fp16:
                    log_dict["val/loss_fp16_deploy"] = val_metrics_fp16["loss"]
                    log_dict["val/loss_diff_fp16_deploy"] = val_metrics_fp16.get(
                        "loss_diff", 0
                    )

                    # ELBO comparison (key metric across models)
                    if train_elbo is not None and fp16_elbo is not None:
                        log_dict["val/elbo_train_prec"] = train_elbo
                        log_dict["val/elbo_fp16_deploy"] = fp16_elbo
                        log_dict["val/elbo_degradation"] = fp16_elbo - train_elbo

                # Add GenMD4-specific metrics if present
                if "loss_nelbo" in train_metrics:
                    log_dict["train/loss_nelbo"] = train_metrics["loss_nelbo"]
                if "loss_nelbo" in val_metrics:
                    log_dict["val/loss_nelbo_train_prec"] = val_metrics["loss_nelbo"]
                if "power_avg" in train_metrics:
                    log_dict["train/power_avg"] = train_metrics["power_avg"]
                    log_dict["train/power_min"] = train_metrics["power_min"]
                    log_dict["train/power_max"] = train_metrics["power_max"]
                if "power_avg" in val_metrics:
                    log_dict["val/power_avg"] = val_metrics["power_avg"]
                    log_dict["val/power_min"] = val_metrics["power_min"]
                    log_dict["val/power_max"] = val_metrics["power_max"]

                wandb.log(log_dict)

            # Save best model based on validation loss
            if val_metrics["loss"] < best_val_loss:
                best_val_loss = val_metrics["loss"]

                # Save using HuggingFace format (config.json + safetensors)
                # Save EMA model if available, otherwise save regular model
                save_model = ema_model if ema_model is not None else model
                save_model.save_pretrained(output_dir)

                # Also save training state separately for resuming
                training_state = {
                    "epoch": epoch,
                    "optimizer_state_dicts": [opt.state_dict() for opt in optimizer],
                    "val_loss": best_val_loss,
                    "model_state_dict": model.state_dict(),
                }
                if ema_model is not None:
                    training_state["ema_model_state_dict"] = ema_model.state_dict()

                torch.save(training_state, output_dir / "training_state.pt")

                print(f"Saved best model (val_loss: {best_val_loss:.4f})")

                # Log best model to wandb
                if args.use_wandb:
                    wandb.run.summary["best_val_loss"] = best_val_loss
                    wandb.run.summary["best_epoch"] = epoch
        else:
            # No validation - just log training metrics and save last model
            if args.use_wandb:
                log_dict = {
                    "epoch": epoch,
                    "train/loss": train_metrics["loss"],
                    "train/loss_diff": train_metrics.get("loss_diff", 0),
                    "train/loss_recon": train_metrics.get("loss_recon", 0),
                    "train/mask_ratio": train_metrics.get("mask_ratio", 0),
                }
                # Add GenMD4-specific metrics if present
                if "loss_nelbo" in train_metrics:
                    log_dict["train/loss_nelbo"] = train_metrics["loss_nelbo"]
                if "power_avg" in train_metrics:
                    log_dict["train/power_avg"] = train_metrics["power_avg"]
                    log_dict["train/power_min"] = train_metrics["power_min"]
                    log_dict["train/power_max"] = train_metrics["power_max"]

                wandb.log(log_dict)

            # Save model every epoch (no validation to compare against)
            save_model = ema_model if ema_model is not None else model
            save_model.save_pretrained(output_dir)

            training_state = {
                "epoch": epoch,
                "optimizer_state_dicts": [opt.state_dict() for opt in optimizer],
                "model_state_dict": model.state_dict(),
            }
            if ema_model is not None:
                training_state["ema_model_state_dict"] = ema_model.state_dict()

            torch.save(training_state, output_dir / "training_state.pt")
            print(f"Saved model checkpoint (epoch {epoch})")

        # Generate samples every few epochs
        if epoch % 5 == 0 or epoch == 1:
            print("\nGenerating samples...")
            # Use EMA model for generation if available
            gen_model = ema_model if ema_model is not None else model

            # Training precision samples (AMP or FP32, default steps)
            precision_name = "AMP" if args.use_amp else "FP32"
            samples_train = generate_samples(
                gen_model,
                tokenizer,
                num_samples=10,
                device=args.device,
                use_fp16=args.use_amp,
            )
            print(f"Sampled words ({precision_name}):")
            for i, word in enumerate(samples_train, 1):
                print(f"  {i}. {word}")

            # FP16 deployment samples with 50 steps (deployment setting)
            samples_fp16 = generate_samples(
                gen_model,
                tokenizer,
                num_samples=10,
                device=args.device,
                use_fp16=True,
                num_steps=50,
            )
            print("Sampled words (FP16 deploy, 50 steps):")
            for i, word in enumerate(samples_fp16, 1):
                print(f"  {i}. {word}")

            # Log samples to wandb with comparison table
            if args.use_wandb:
                table_data = []
                for i, (w_train, w_fp16) in enumerate(
                    zip(samples_train, samples_fp16), 1
                ):
                    table_data.append([epoch, i, precision_name, w_train, w_fp16])

                wandb.log(
                    {
                        "samples": wandb.Table(
                            columns=[
                                "epoch",
                                "sample_id",
                                "train_prec",
                                f"{precision_name.lower()}_sample",
                                "fp16_deploy_sample",
                            ],
                            data=table_data,
                        )
                    }
                )

    print("\nTraining complete!")
    print(f"Best validation loss: {best_val_loss:.4f}")
    print(f"Model saved to: {output_dir}/")

    # Finish wandb
    if args.use_wandb:
        wandb.finish()


if __name__ == "__main__":
    main()
