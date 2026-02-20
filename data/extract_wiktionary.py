#!/usr/bin/env python3
"""
Extract just the words from the Wiktionary Parquet file.
Creates a simple list of unique English words.
"""

import pandas as pd
from pathlib import Path
import argparse


def extract_words(
    input_path: str,
    output_path: str,
    unique: bool = True,
    min_length: int = 1,
    max_length: int = None,
    filter_multiword: bool = False,
    filter_alpha_only: bool = False,
    require_lowercase_dominance: bool = False,
    convert_to_lowercase: bool = False,
    remove_plurals: bool = False,
    output_format: str = "txt",
):
    """
    Extract words from Parquet file.

    Args:
        input_path: Path to input Parquet file
        output_path: Path to output file
        unique: Whether to deduplicate words
        min_length: Minimum word length
        max_length: Maximum word length (None = no limit)
        filter_multiword: If True, exclude entries with spaces (multi-word phrases)
        filter_alpha_only: If True, keep only words with letters (a-z, A-Z)
        require_lowercase_dominance: If True, require lowercase count > uppercase count (for mixed-case)
        convert_to_lowercase: If True, convert all words to lowercase before deduplication
        remove_plurals: If True, remove words ending in 's' if the form without 's' exists
        output_format: Output format ('txt', 'parquet', or 'csv')
    """
    input_file = Path(input_path)
    output_file = Path(output_path + "." + output_format)

    print(f"Reading from: {input_file}")

    # Load only the word column for efficiency
    df = pd.read_parquet(input_file, columns=["word"])

    print(f"Total entries: {len(df):,}")

    # Extract words as a Series
    words = df["word"]

    # Apply filters
    if filter_multiword:
        before = len(words)
        words = words[~words.str.contains(" ", na=False)]
        print(f"Filtered out multi-word phrases: {before:,} -> {len(words):,}")

    if filter_alpha_only:
        before = len(words)
        # Only keep words with letters (a-z, A-Z)
        words = words[words.str.match(r"^[a-zA-Z]+$")]
        print(f"Filtered to alpha only: {before:,} -> {len(words):,}")

    if require_lowercase_dominance:
        before = len(words)
        # For words with uppercase, require more lowercase than uppercase
        lowercase_count = words.str.count(r"[a-z]")
        uppercase_count = words.str.count(r"[A-Z]")
        # Keep all-lowercase (uppercase_count == 0) OR lowercase > uppercase
        words = words[(uppercase_count == 0) | (lowercase_count > uppercase_count)]
        print(f"Filtered to lowercase dominance: {before:,} -> {len(words):,}")

    if min_length > 1:
        before = len(words)
        words = words[words.str.len() >= min_length]
        print(f"Filtered by min_length={min_length}: {before:,} -> {len(words):,}")

    if max_length is not None:
        before = len(words)
        words = words[words.str.len() <= max_length]
        print(f"Filtered by max_length={max_length}: {before:,} -> {len(words):,}")

    if convert_to_lowercase:
        before = len(words)
        words = words.str.lower()
        print(f"Converted to lowercase: {before:,} words")

    if remove_plurals:
        before = len(words)
        # Create a set for fast lookup
        word_set = set(words)
        # Check each word: if it ends with 's' and the singular exists, mark for removal
        is_plural = words.str.endswith("s") & words.str[:-1].isin(word_set)
        words = words[~is_plural]
        removed = before - len(words)
        print(f"Removed plurals: {before:,} -> {len(words):,} (removed {removed:,})")

    if unique:
        before = len(words)
        words = words.drop_duplicates()
        print(f"Deduplicated: {before:,} -> {len(words):,}")

    words = words.sort_values().reset_index(drop=True)

    print(f"\nFinal word count: {len(words):,}")
    print(f"Sample words: {words.head(10).tolist()}")

    # Save based on format
    if output_format == "txt":
        print(f"Writing to text file: {output_file}")
        with open(output_file, "w", encoding="utf-8") as f:
            for word in words:
                f.write(f"{word}\n")
    elif output_format == "parquet":
        print(f"Writing to Parquet: {output_file}")
        pd.DataFrame({"word": words}).to_parquet(output_file, index=False)
    elif output_format == "csv":
        print(f"Writing to CSV: {output_file}")
        pd.DataFrame({"word": words}).to_csv(output_file, index=False, header=False)
    else:
        raise ValueError(f"Unknown format: {output_format}")

    print(f"✓ Successfully wrote {len(words):,} words to {output_file}")
    print(f"File size: {output_file.stat().st_size / 1024 / 1024:.2f} MB")


if __name__ == "__main__":
    parser = argparse.ArgumentParser(
        description="Extract words from Wiktionary Parquet"
    )
    parser.add_argument(
        "--input",
        default="wiktionary_en.parquet",
        help="Input Parquet file (default: wiktionary_en.parquet)",
    )
    parser.add_argument(
        "--output", default="words_wiktionary", help="Output file name without extension"
    )
    parser.add_argument(
        "--unique",
        action="store_true",
        default=True,
        help="Keep only unique words (default: True)",
    )
    parser.add_argument(
        "--no-unique", dest="unique", action="store_false", help="Keep duplicate words"
    )
    parser.add_argument(
        "--min-length", type=int, default=1, help="Minimum word length (default: 1)"
    )
    parser.add_argument(
        "--max-length",
        type=int,
        default=None,
        help="Maximum word length (default: no limit)",
    )
    parser.add_argument(
        "--filter-multiword",
        action="store_true",
        help="Exclude multi-word phrases (entries with spaces)",
    )
    parser.add_argument(
        "--filter-alpha-only",
        action="store_true",
        help="Keep only words with letters (a-z, A-Z)",
    )
    parser.add_argument(
        "--require-lowercase-dominance",
        action="store_true",
        help="Require more lowercase than uppercase letters (for mixed-case words)",
    )
    parser.add_argument(
        "--convert-to-lowercase",
        action="store_true",
        help="Convert all words to lowercase and deduplicate",
    )
    parser.add_argument(
        "--remove-plurals",
        action="store_true",
        help="Remove words ending in 's' if the form without 's' exists",
    )
    parser.add_argument(
        "--format",
        choices=["txt", "parquet", "csv"],
        default="txt",
        help="Output format (default: txt)",
    )

    args = parser.parse_args()

    # Resolve paths
    data_dir = Path(__file__).parent
    input_path = data_dir / args.input
    output_path = data_dir / args.output

    extract_words(
        input_path=input_path,
        output_path=output_path,
        unique=args.unique,
        min_length=args.min_length,
        max_length=args.max_length,
        filter_multiword=args.filter_multiword,
        filter_alpha_only=args.filter_alpha_only,
        require_lowercase_dominance=args.require_lowercase_dominance,
        convert_to_lowercase=args.convert_to_lowercase,
        remove_plurals=args.remove_plurals,
        output_format=args.format,
    )
