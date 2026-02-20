#!/usr/bin/env python3
"""
Convert Wiktionary JSONL data to Parquet format.
Filters for English entries only and converts nested JSON to strings.
"""

import json
import pandas as pd
from pathlib import Path
from tqdm import tqdm


def convert_nested_to_string(obj):
    """
    Convert nested objects (lists, dicts) to JSON strings.
    Keep primitive types (str, int, float, bool, None) as-is.
    """
    if isinstance(obj, (list, dict)):
        return json.dumps(obj, ensure_ascii=False)
    return obj


def jsonl_to_parquet(
    input_path: str, output_path: str, lang_code: str = "en", chunk_size: int = 10000
):
    """
    Convert JSONL to Parquet, filtering by language code.

    Args:
        input_path: Path to input JSONL file
        output_path: Path to output Parquet file
        lang_code: Language code to filter (default: "en")
        chunk_size: Number of records to process at once for memory efficiency
    """
    input_file = Path(input_path)
    output_file = Path(output_path)

    print(f"Reading from: {input_file}")
    print(f"Writing to: {output_file}")
    print(f"Filtering for language code: {lang_code}")

    # First, count total lines for progress bar
    print("Counting total lines...")
    with open(input_file, "r", encoding="utf-8") as f:
        total_lines = sum(1 for _ in f)
    print(f"Total lines: {total_lines:,}")

    # Process in chunks to avoid memory issues
    chunks = []
    current_chunk = []
    english_count = 0

    with open(input_file, "r", encoding="utf-8") as f:
        for line in tqdm(f, total=total_lines, desc="Processing"):
            try:
                entry = json.loads(line.strip())

                # Filter for specified language code
                if entry.get("lang_code") == lang_code:
                    # Convert nested structures to strings
                    processed_entry = {
                        key: convert_nested_to_string(value)
                        for key, value in entry.items()
                    }
                    current_chunk.append(processed_entry)
                    english_count += 1

                    # Write chunk when it reaches chunk_size
                    if len(current_chunk) >= chunk_size:
                        chunks.append(pd.DataFrame(current_chunk))
                        current_chunk = []

            except json.JSONDecodeError as e:
                print(f"Warning: Failed to parse line: {e}")
                continue

    # Don't forget the last chunk
    if current_chunk:
        chunks.append(pd.DataFrame(current_chunk))

    print(
        f"\nFound {english_count:,} English entries ({english_count / total_lines * 100:.2f}%)"
    )

    # Concatenate all chunks and write to Parquet
    if chunks:
        print("Concatenating chunks...")
        df = pd.concat(chunks, ignore_index=True)

        print(f"Final DataFrame shape: {df.shape}")
        print(f"Columns: {list(df.columns)}")

        print("Writing to Parquet...")
        df.to_parquet(output_file, index=False, engine="pyarrow")

        print(f"✓ Successfully wrote {len(df):,} entries to {output_file}")
        print(f"File size: {output_file.stat().st_size / 1024 / 1024:.2f} MB")
    else:
        print("No English entries found!")


if __name__ == "__main__":
    # Configure paths
    data_dir = Path(__file__).parent
    input_file = data_dir / "raw-wiktextract-data.jsonl"
    output_file = data_dir / "wiktionary_en.parquet"

    # Run conversion
    jsonl_to_parquet(input_path=input_file, output_path=output_file, lang_code="en")
