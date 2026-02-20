#!/usr/bin/env python3
"""
Extract words from english-wordnet-2024.ttl and apply same filters as Wiktionary
"""

import re
import argparse
from pathlib import Path

data_dir = Path(__file__).parent


def extract_wordnet(output_format="both"):
    """Extract and filter words from WordNet TTL file"""
    ttl_file = data_dir / "english-wordnet-2024.ttl"

    print(f"Reading: {ttl_file}")
    print("Parsing TTL file and extracting words...")

    # Extract words from TTL file
    # Words appear in URLs like: https://en-word.net/lemma/word#word-pos
    words_raw = set()
    multi_word_count = 0

    with open(ttl_file, "r", encoding="utf-8") as f:
        for line in f:
            # Look for lemma URLs
            if "/lemma/" in line:
                # Extract all lemma references
                matches = re.findall(r"/lemma/([^#]+)#", line)
                for match in matches:
                    # Replace underscores and hyphens with spaces
                    normalized = match.replace("_", " ").replace("-", " ")

                    # Split into individual words
                    individual_words = normalized.split()

                    if len(individual_words) > 1:
                        multi_word_count += 1
                        # Add each individual word from multi-word entries
                        for word in individual_words:
                            if word:
                                words_raw.add(word)
                    elif len(individual_words) == 1:
                        # Single word entry
                        words_raw.add(individual_words[0])

    print(f"Extracted {len(words_raw):,} raw words from TTL")
    print(f"  (from {multi_word_count:,} multi-word entries split)")

    # Apply filters (same as Wiktionary pipeline)
    print("\n" + "=" * 60)
    print("Applying filters...")
    print("=" * 60)

    # 1. Filter to alpha only (a-z, A-Z)
    words = set()
    for word in words_raw:
        if re.match(r"^[a-zA-Z]+$", word):
            words.add(word)
    print(f"1. Alpha only: {len(words):,} words")

    # 2. Lowercase dominance (mixed-case must have more lowercase than uppercase)
    filtered = set()
    for word in words:
        lowercase_count = sum(1 for c in word if c.islower())
        uppercase_count = sum(1 for c in word if c.isupper())
        # Keep all-lowercase OR more lowercase than uppercase
        if uppercase_count == 0 or lowercase_count > uppercase_count:
            filtered.add(word)
    words = filtered
    print(f"2. Lowercase dominance: {len(words):,} words")

    # 3. Convert to lowercase
    words = {w.lower() for w in words}
    print(f"3. Converted to lowercase: {len(words):,} words")

    # 4. Remove plurals
    word_list = list(words)
    plurals_to_remove = set()
    for word in word_list:
        if word.endswith("s") and len(word) > 1:
            singular = word[:-1]
            if singular in words:
                plurals_to_remove.add(word)
    words = words - plurals_to_remove
    print(
        f"4. Removed plurals: {len(words):,} words (removed {len(plurals_to_remove):,})"
    )

    # Sort and save
    words_sorted = sorted(words)
    print(f"\nFinal word count: {len(words_sorted):,}")

    # Save based on format
    if output_format in ("txt", "both"):
        output_txt = data_dir / "words_wordnet.txt"
        with open(output_txt, "w", encoding="utf-8") as f:
            for word in words_sorted:
                f.write(f"{word}\n")
        print(f"\n✓ Saved to TXT: {output_txt}")
        print(f"  Size: {output_txt.stat().st_size / 1024:.2f} KB")

    if output_format in ("parquet", "both"):
        import pandas as pd

        df = pd.DataFrame({"word": words_sorted})
        output_parquet = data_dir / "words_wordnet.parquet"
        df.to_parquet(output_parquet, index=False)
        print(f"\n✓ Saved to Parquet: {output_parquet}")
        print(f"  Size: {output_parquet.stat().st_size / 1024:.2f} KB")

    # Show samples
    print(f"\nFirst 20 words:")
    for word in words_sorted[:20]:
        print(f"  {word}")


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Extract words from WordNet")
    parser.add_argument(
        "--format",
        choices=["txt", "parquet", "both"],
        default="both",
        help="Output format (default: both)",
    )
    args = parser.parse_args()

    extract_wordnet(output_format=args.format)
