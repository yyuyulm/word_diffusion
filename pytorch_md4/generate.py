"""Simple script to load and generate samples from a trained MD4 or JiT model."""

import argparse
import json
from pathlib import Path

import torch

from dataset import CharacterTokenizer
from diffusion import MD4
from jit import JiT


def main():
    parser = argparse.ArgumentParser(description="Generate samples from trained MD4")
    parser.add_argument(
        "--model_dir",
        type=str,
        default="output",
        help="Directory containing config.json, model.safetensors, and tokenizer.json",
    )
    parser.add_argument(
        "--num_samples", type=int, default=10, help="Number of samples to generate"
    )
    parser.add_argument(
        "--num_steps",
        type=int,
        default=None,
        help="Number of sampling steps (defaults to training timesteps)",
    )
    parser.add_argument(
        "--length",
        type=int,
        default=None,
        help="Generate words of specific length (number of characters, not including <EOW>)",
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

    args = parser.parse_args()

    # Load tokenizer from model_dir
    tokenizer_path = Path(args.model_dir) / "tokenizer.json"
    print(f"Loading tokenizer from {tokenizer_path}...")
    tokenizer = CharacterTokenizer.load(str(tokenizer_path))
    print(f"Vocabulary size: {tokenizer.vocab_size}")

    # Load model config
    config_path = Path(args.model_dir) / "config.json"
    with open(config_path) as f:
        config = json.load(f)

    # Get model_type (supports both new 'model_type' and old 'loss_type' keys)
    model_type = config.get("model_type", config.get("loss_type", "md4"))

    # Load model
    print(f"\nLoading {model_type.upper()} model from {args.model_dir}...")
    if model_type == "jit":
        model = JiT.from_pretrained(args.model_dir, device=args.device)
    else:  # md4 or genmd4
        model = MD4.from_pretrained(args.model_dir, device=args.device)
    model.eval()

    # Generate samples
    if args.length is not None:
        # Length-constrained generation (MD4 only)
        if model_type == "jit":
            print(
                "Warning: Length-constrained generation not supported for JiT, using unconstrained"
            )
            args.length = None
        else:
            print(f"\nGenerating {args.num_samples} words of length {args.length}...")
            samples = model.sample_with_length(
                batch_size=args.num_samples,
                word_length=args.length,
                num_steps=args.num_steps,
                device=args.device,
            )

    if args.length is None:
        print(f"\nGenerating {args.num_samples} samples (unconstrained length)...")
        if model_type == "jit":
            # JiT uses ODE sampling
            num_steps = args.num_steps if args.num_steps is not None else 50
            samples = model.sample(
                batch_size=args.num_samples,
                num_steps=num_steps,
                device=args.device,
                method="heun",  # Use Heun by default for better quality
            )
        else:
            # MD4/GenMD4 use ancestral sampling
            samples = model.sample(
                batch_size=args.num_samples,
                num_steps=args.num_steps,
                device=args.device,
            )
    samples = samples.cpu().numpy()

    # Decode
    print("\nGenerated samples:")
    print(
        f"(Tokenizer special tokens: PAD={tokenizer.pad_idx}, EOW={tokenizer.eow_idx})"
    )
    print()

    for i, sample in enumerate(samples, 1):
        word = tokenizer.decode(sample.tolist(), remove_special=False)
        # Show raw tokens for debugging
        print(f"  {i}. {word}")
        if args.length is not None:
            # Show the raw tokens around the expected EOW position
            expected_eow_pos = args.length
            start = max(0, expected_eow_pos - 2)
            end = min(len(sample), expected_eow_pos + 5)
            tokens_slice = sample[start:end].tolist()
            print(f"      Raw tokens [{start}:{end}]: {tokens_slice}")
            print(
                f"      Expected <EOW> at position {expected_eow_pos}, actual token: {sample[expected_eow_pos]}"
            )
        else:
            # For unconstrained, just show all tokens
            print(f"      Raw tokens: {sample.tolist()}")
        print()


if __name__ == "__main__":
    main()
