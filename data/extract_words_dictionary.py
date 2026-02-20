import json
import pandas as pd
import os
import argparse


# Convert the words_dictionary.json from dwyl/english-words to a Parquet file
def main(
    remove_plurals: bool = False,
    alphabetical_only: bool = False,
    output_path: str = None,
):
    input_path = os.path.join(os.path.dirname(__file__), "words_dictionary.json")
    if output_path is None:
        output_path = os.path.join(
            os.path.dirname(__file__), "words_dictionary.parquet"
        )
    elif not os.path.isabs(output_path):
        # If relative path, make it relative to the script directory
        output_path = os.path.join(os.path.dirname(__file__), output_path)

    print(f"Loading {input_path}...")
    try:
        with open(input_path, "r") as f:
            data = json.load(f)
    except FileNotFoundError:
        print(f"Error: Could not find {input_path}")
        return

    print(f"Loaded {len(data)} entries.")

    # Extract keys
    words = list(data.keys())

    # Remove plurals if requested
    if remove_plurals:
        print("Removing plurals...")
        words_set = set(words)
        filtered_words = []
        removed_count = 0

        for word in words:
            # Check if word ends in 's' and if removing 's' gives a word in the set
            if word.endswith("s") and len(word) > 1 and word[:-1] in words_set:
                removed_count += 1
                continue
            filtered_words.append(word)

        words = filtered_words
        print(f"Removed {removed_count} plural forms. {len(words)} words remaining.")

    # Filter for alphabetical-only words if requested
    if alphabetical_only:
        print("Filtering for alphabetical-only words...")
        initial_count = len(words)
        words = [word for word in words if word.isalpha()]
        removed_count = initial_count - len(words)
        print(
            f"Removed {removed_count} non-alphabetical words. {len(words)} words remaining."
        )

    # Create DataFrame
    df = pd.DataFrame(words, columns=["word"])

    print(f"Saving to {output_path}...")
    try:
        df.to_parquet(output_path, engine="pyarrow")
        print("Done.")
    except ImportError:
        print(
            "Error: Pyarrow or fastparquet is required. Please install pyarrow: pip install pyarrow"
        )
    except Exception as e:
        print(f"An error occurred saving the file: {e}")


if __name__ == "__main__":
    parser = argparse.ArgumentParser(
        description="Convert words_dictionary.json to Parquet format"
    )
    parser.add_argument(
        "--remove_plurals",
        action="store_true",
        help="Remove plural forms (words ending in 's' that have a singular form in the dataset)",
    )
    parser.add_argument(
        "--alphabetical_only",
        action="store_true",
        help="Keep only words containing alphabetical characters (no hyphens, apostrophes, numbers, etc.)",
    )
    parser.add_argument(
        "--output",
        type=str,
        default=None,
        help="Output Parquet file path (default: words_dictionary.parquet)",
    )
    args = parser.parse_args()

    main(
        remove_plurals=args.remove_plurals,
        alphabetical_only=args.alphabetical_only,
        output_path=args.output,
    )
