"""
Model configurations for different sizes.

Based on MD4 text8 config.
"""

from typing import Dict, Any


# Model size configurations
MODEL_CONFIGS: Dict[str, Dict[str, Any]] = {
    "tiny-8l": {
        "dim": 64,
        "n_layers": 8,
        "n_heads": 4,
        "description": "Tiny model matching MD4 text8 (~370K params)",
    },
    "tiny": {
        "dim": 64,
        "n_layers": 12,
        "n_heads": 4,
        "description": "Tiny model matching MD4 text8 (~370K params)",
    },
    "tiny-8h": {
        "dim": 64,
        "n_layers": 12,
        "n_heads": 8,
        "description": "Tiny model matching MD4 text8 (~370K params)",
    },
    "small": {
        "dim": 128,
        "n_layers": 24,
        "n_heads": 8,
        "description": "Small model (~7M params)",
    },
    "medium": {
        "dim": 192,
        "n_layers": 32,
        "n_heads": 12,
        "description": "Medium model, similar to Gemma 3 (~30M params)",
    },
    "base": {
        "dim": 256,
        "n_layers": 40,
        "n_heads": 16,
        "description": "Base model (~120M params)",
    },
    "large": {
        "dim": 384,
        "n_layers": 48,
        "n_heads": 24,
        "description": "Large model, similar to Qwen3/Granite small (~140M params)",
    },
}


def get_model_config(size: str) -> Dict[str, Any]:
    """Get model configuration by size name.

    Args:
        size: One of 'tiny', 'small', 'base', 'large'.

    Returns:
        Dictionary with dim, n_layers, n_heads.

    Raises:
        ValueError: If size is not recognized.
    """
    if size not in MODEL_CONFIGS:
        valid_sizes = ", ".join(MODEL_CONFIGS.keys())
        raise ValueError(f"Invalid model size '{size}'. Choose from: {valid_sizes}")

    return MODEL_CONFIGS[size].copy()


def list_model_configs():
    """Print all available model configurations."""
    print("Available model configurations:")
    print("-" * 60)
    for size, config in MODEL_CONFIGS.items():
        print(f"{size:8s}: {config['description']}")
        print(
            f"          dim={config['dim']}, n_layers={config['n_layers']}, n_heads={config['n_heads']}"
        )
    print("-" * 60)
