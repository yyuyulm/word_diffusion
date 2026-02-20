"""
Generate synthetic alphabet sequence dataset for testing MD4.

Creates sequences like:
- "ab", "abc", "abcd", ..., "abcdefghijklmnopqrstuvwxyz"
- Easy pattern to learn - perfect for debugging
"""

import pandas as pd
from pathlib import Path


def generate_alphabet_sequences(min_len=2, max_len=26, seed=42):
    """Generate alphabet sequences of varying lengths.

    Args:
        min_len: Minimum sequence length
        max_len: Maximum sequence length (up to 26 for a-z)
        seed: Random seed

    Returns:
        List of alphabet sequences
    """
    import random

    random.seed(seed)

    alphabet = "abcdefghijklmnopqrstuvwxyz"
    sequences = []

    # Generate all possible lengths
    for length in range(min_len, max_len + 1):
        seq = alphabet[:length]
        sequences.append(seq)

    # Duplicate to have more training data (with shuffling)
    sequences = sequences * 5300  # 5300 copies (26 unique * 5300 ≈ 100k samples)
    random.shuffle(sequences)

    return sequences


def main():
    # Generate sequences
    sequences = generate_alphabet_sequences(min_len=2, max_len=26)

    print(f"Generated {len(sequences)} sequences")
    print(f"Sample sequences:")
    for seq in sequences[:10]:
        print(f"  {seq}")

    # Save to parquet
    output_dir = Path("../data")
    output_dir.mkdir(exist_ok=True)

    df = pd.DataFrame({"text": sequences})
    output_path = output_dir / "alphabet_sequences.parquet"
    df.to_parquet(output_path, index=False)

    print(f"\nSaved to: {output_path}")
    print(f"Total samples: {len(sequences)}")
    print(f"Unique patterns: {len(set(sequences))}")


if __name__ == "__main__":
    main()
