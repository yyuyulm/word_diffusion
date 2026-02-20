"""
Count total tokens in the word dataset.
"""

import argparse
import pandas as pd
from pathlib import Path
import sys

# Add parent directory to path to import from pytorch_md4
sys.path.insert(0, str(Path(__file__).parent.parent))
from pytorch_md4.dataset import CharacterTokenizer


def main():
    parser = argparse.ArgumentParser(description="Count tokens in dataset")
    parser.add_argument(
        "--data_path",
        type=Path,
        default=Path("words_merged.parquet"),
        help="Path to parquet data file",
    )
    parser.add_argument(
        "--max_words",
        type=int,
        default=None,
        help="Maximum number of words to process",
    )

    args = parser.parse_args()

    # Load data
    print(f"Loading data from {args.data_path}...")
    df = pd.read_parquet(args.data_path)
    words = df["word"].tolist()

    if args.max_words is not None:
        words = words[: args.max_words]
        print(f"Processing {len(words)} words")
    else:
        print(f"Processing {len(words):,} words")

    # Build tokenizer
    print("Building tokenizer...")
    tokenizer = CharacterTokenizer()
    tokenizer.build_vocab(words)

    print(f"Vocabulary size: {tokenizer.vocab_size}")
    print(f"  - Special tokens: {tokenizer.PAD_TOKEN}, {tokenizer.EOW_TOKEN}")
    print(f"  - Character tokens: {tokenizer.vocab_size - 2}")

    # List all tokens
    print("\nAll tokens in vocabulary:")
    for idx, token in enumerate(tokenizer.idx_to_char):
        if token in [tokenizer.PAD_TOKEN, tokenizer.EOW_TOKEN]:
            print(f"  [{idx:2d}] {token:6s} (special)")
        else:
            print(f"  [{idx:2d}] '{token}'")

    # Count tokens
    print("\nCounting tokens...")
    total_tokens = 0
    total_chars = 0
    max_word_length = 0
    long_words = []  # Words longer than 32 tokens

    for word in words:
        tokens = tokenizer.encode(word, add_eow=True)
        total_tokens += len(tokens)
        total_chars += len(word)
        max_word_length = max(max_word_length, len(tokens))

        # Track long words (>32 tokens)
        if len(tokens) > 32:
            long_words.append((word, len(tokens)))

    # Statistics
    avg_tokens_per_word = total_tokens / len(words)
    avg_chars_per_word = total_chars / len(words)

    print("\n" + "=" * 50)
    print("DATASET STATISTICS")
    print("=" * 50)
    print(f"Total words:              {len(words):,}")
    print(f"Total tokens (with <EOW>): {total_tokens:,}")
    print(f"Total characters:         {total_chars:,}")
    print(f"Max word length (tokens): {max_word_length}")
    print(f"Avg tokens per word:      {avg_tokens_per_word:.2f}")
    print(f"Avg chars per word:       {avg_chars_per_word:.2f}")
    print(f"Words > 32 tokens:        {len(long_words)}")
    print("=" * 50)

    # Token distribution
    print("\nToken length distribution (first 20 bins):")
    from collections import Counter

    length_dist = Counter()
    for word in words:
        tokens = tokenizer.encode(word, add_eow=True)
        length_dist[len(tokens)] += 1

    for length in sorted(length_dist.keys())[:20]:
        count = length_dist[length]
        pct = 100 * count / len(words)
        bar = "█" * int(pct / 2)
        print(f"  {length:2d} tokens: {count:6,} words ({pct:5.2f}%) {bar}")

    # Show long words
    if long_words:
        print("\n" + "=" * 50)
        print(f"WORDS LONGER THAN 32 TOKENS ({len(long_words)} total)")
        print("=" * 50)
        # Sort by length descending
        long_words.sort(key=lambda x: x[1], reverse=True)
        for word, token_count in long_words:
            print(f"  {token_count:3d} tokens: {word}")


if __name__ == "__main__":
    main()
