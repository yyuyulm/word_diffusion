#!/usr/bin/env python3
"""
Merge all three word datasets and create a Venn diagram
"""

import argparse
import pandas as pd
from pathlib import Path
import matplotlib.pyplot as plt
from matplotlib_venn import venn3, venn3_circles


def main(max_length=None):
    """Main merge logic"""
    data_dir = Path(__file__).parent

    print("=" * 70)
    print("LOADING DATASETS")
    print("=" * 70)

    # 1. Load words_dictionary.parquet and depluralize
    print("\n1. Loading words_dictionary.parquet...")

    dict_file = data_dir / "words_dictionary.parquet"
    df_dict = pd.read_parquet(dict_file)
    dict_words = set(df_dict["word"].tolist())
    print(f"   Loaded: {len(dict_words):,} words")

    # Remove plurals
    word_set = set(dict_words)
    plurals = {w for w in dict_words if w.endswith("s") and w[:-1] in word_set}
    dict_words_clean = set(dict_words) - plurals
    print(f"   After plural removal: {len(dict_words_clean):,} words")

    # 2. Load words_wiktionary.parquet
    print("\n2. Loading words_wiktionary.parquet...")
    wikt_file = data_dir / "words_wiktionary.parquet"
    df_wikt = pd.read_parquet(wikt_file)
    wikt_words = set(df_wikt["word"].tolist())
    print(f"   Loaded: {len(wikt_words):,} words")

    # 3. Load words_wordnet.parquet
    print("\n3. Loading words_wordnet.parquet...")
    wordnet_file = data_dir / "words_wordnet.parquet"
    df_wordnet = pd.read_parquet(wordnet_file)
    wordnet_words = set(df_wordnet["word"].tolist())
    print(f"   Loaded: {len(wordnet_words):,} words")

    print("\n" + "=" * 70)
    print("ANALYZING OVERLAPS (3-WAY VENN)")
    print("=" * 70)

    # Calculate all intersections
    dict_only = dict_words_clean - wikt_words - wordnet_words
    wikt_only = wikt_words - dict_words_clean - wordnet_words
    wordnet_only = wordnet_words - dict_words_clean - wikt_words

    dict_wikt = (dict_words_clean & wikt_words) - wordnet_words
    dict_wordnet = (dict_words_clean & wordnet_words) - wikt_words
    wikt_wordnet = (wikt_words & wordnet_words) - dict_words_clean

    all_three = dict_words_clean & wikt_words & wordnet_words

    print(f"\nOnly in words_dictionary: {len(dict_only):,}")
    print(f"Only in Wiktionary: {len(wikt_only):,}")
    print(f"Only in WordNet: {len(wordnet_only):,}")
    print(f"\nIn dict + Wiktionary (not WordNet): {len(dict_wikt):,}")
    print(f"In dict + WordNet (not Wiktionary): {len(dict_wordnet):,}")
    print(f"In Wiktionary + WordNet (not dict): {len(wikt_wordnet):,}")
    print(f"\nIn all three: {len(all_three):,}")

    total_unique = len(dict_words_clean | wikt_words | wordnet_words)
    print(f"\n{'=' * 70}")
    print(f"TOTAL UNIQUE WORDS: {total_unique:,}")
    print(f"{'=' * 70}")

    # Create Venn diagram
    print("\nCreating Venn diagram...")
    plt.figure(figsize=(12, 10))

    # Create the Venn diagram
    venn = venn3(
        [dict_words_clean, wikt_words, wordnet_words],
        set_labels=("words_dictionary\n(dwyl)", "Wiktionary", "WordNet"),
        set_colors=("#ff9999", "#66b3ff", "#99ff99"),
        alpha=0.7,
    )

    # Add circles for better visibility
    venn3_circles([dict_words_clean, wikt_words, wordnet_words], linewidth=1.5)

    # Customize labels
    if venn.get_label_by_id("100"):
        venn.get_label_by_id("100").set_text(f"{len(dict_only):,}")
    if venn.get_label_by_id("010"):
        venn.get_label_by_id("010").set_text(f"{len(wikt_only):,}")
    if venn.get_label_by_id("001"):
        venn.get_label_by_id("001").set_text(f"{len(wordnet_only):,}")
    if venn.get_label_by_id("110"):
        venn.get_label_by_id("110").set_text(f"{len(dict_wikt):,}")
    if venn.get_label_by_id("101"):
        venn.get_label_by_id("101").set_text(f"{len(dict_wordnet):,}")
    if venn.get_label_by_id("011"):
        venn.get_label_by_id("011").set_text(f"{len(wikt_wordnet):,}")
    if venn.get_label_by_id("111"):
        venn.get_label_by_id("111").set_text(f"{len(all_three):,}")

    plt.title(
        f"Word Dataset Overlap\nTotal Unique Words: {total_unique:,}",
        fontsize=16,
        fontweight="bold",
        pad=20,
    )

    # Save the diagram
    output_image = data_dir / "dataset_venn_diagram.png"
    plt.tight_layout()
    plt.savefig(output_image, dpi=300, bbox_inches="tight")
    print(f"✓ Saved Venn diagram to: {output_image}")

    print("\n" + "=" * 70)
    print("MERGING DATASETS")
    print("=" * 70)

    # Merge all datasets
    merged_words = sorted(dict_words_clean | wikt_words | wordnet_words)
    print(f"Merged word count: {len(merged_words):,}")

    # Filter by max length if specified
    if max_length:
        before = len(merged_words)
        merged_words = [w for w in merged_words if len(w) <= max_length]
        removed = before - len(merged_words)
        print(
            f"Filtered to max length {max_length}: {before:,} -> {len(merged_words):,} (removed {removed:,})"
        )

    # Save merged dataset (Parquet only)
    df_merged = pd.DataFrame({"word": merged_words})

    output_parquet = data_dir / "words_merged.parquet"
    df_merged.to_parquet(output_parquet, index=False)
    print(f"\n✓ Saved merged Parquet: {output_parquet}")
    print(f"  Words: {len(merged_words):,}")
    print(f"  Size: {output_parquet.stat().st_size / 1024 / 1024:.2f} MB")

    print("\n" + "=" * 70)
    print("SUMMARY")
    print("=" * 70)
    print(f"words_dictionary: {len(dict_words_clean):,} words")
    print(f"Wiktionary:       {len(wikt_words):,} words")
    print(f"WordNet:          {len(wordnet_words):,} words")
    print(f"{'─' * 70}")
    print(f"Total merged:     {len(merged_words):,} words")
    print(
        f"Overlap (all 3):  {len(all_three):,} words ({len(all_three) / len(merged_words) * 100:.1f}%)"
    )


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Merge word datasets")
    parser.add_argument(
        "--max-length",
        type=int,
        default=None,
        help="Maximum word length to keep (in characters, default: no limit)",
    )
    args = parser.parse_args()

    main(max_length=args.max_length)
