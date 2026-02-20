"""
Character-level tokenizer and dataset for word diffusion.
"""

from pathlib import Path
from typing import List, Optional

import pandas as pd
import torch
from torch.utils.data import Dataset


class CharacterTokenizer:
    """Character-level tokenizer with special tokens."""

    def __init__(self, vocab: Optional[List[str]] = None):
        """
        Args:
            vocab: Optional predefined vocabulary. If None, will be built from data.
        """
        # Special tokens
        self.PAD_TOKEN = "<PAD>"
        self.EOW_TOKEN = "<EOW>"  # End of word

        if vocab is None:
            # Will be built from data
            self.char_to_idx = {}
            self.idx_to_char = []
            self.vocab_size = 0
        else:
            self.char_to_idx = {char: idx for idx, char in enumerate(vocab)}
            self.idx_to_char = vocab
            self.vocab_size = len(vocab)

    def build_vocab(self, words: List[str]):
        """Build vocabulary from a list of words.

        Args:
            words: List of words to build vocabulary from.
        """
        # Collect all unique characters
        unique_chars = set()
        for word in words:
            unique_chars.update(word)

        # Build vocabulary: [PAD, EOW, chars...]
        # NOTE: MASK token is NOT in the vocabulary!
        # It exists only during training as vocab_size (outside the learnable vocab)
        vocab = [self.PAD_TOKEN, self.EOW_TOKEN]
        vocab.extend(sorted(unique_chars))

        self.idx_to_char = vocab
        self.char_to_idx = {char: idx for idx, char in enumerate(vocab)}
        self.vocab_size = len(vocab)

        # Store indices for special tokens
        # MASK token is NOT in vocab - it's at index vocab_size (used only during training)
        # We keep a reference to MASK_TOKEN string for display purposes only
        self.pad_idx = self.char_to_idx[self.PAD_TOKEN]
        self.eow_idx = self.char_to_idx[self.EOW_TOKEN]

    def encode(self, word: str, add_eow: bool = True) -> List[int]:
        """Encode a word into token indices.

        Args:
            word: Word to encode.
            add_eow: Whether to add <EOW> token at the end.

        Returns:
            List of token indices.
        """
        tokens = [self.char_to_idx[char] for char in word]
        if add_eow:
            tokens.append(self.eow_idx)
        return tokens

    def decode(self, tokens: List[int], remove_special: bool = True) -> str:
        """Decode token indices into a word.

        Args:
            tokens: List of token indices.
            remove_special: Whether to remove special tokens.

        Returns:
            Decoded word.
        """
        chars = []
        for idx in tokens:
            # Handle mask token (at vocab_size, outside normal vocab)
            if idx >= len(self.idx_to_char):
                if not remove_special:
                    chars.append("<MASK>")  # Hardcoded for display only
                continue

            char = self.idx_to_char[idx]
            if remove_special and char in [
                self.PAD_TOKEN,
                self.EOW_TOKEN,
            ]:
                continue
            chars.append(char)
        return "".join(chars)

    def save(self, path: str):
        """Save vocabulary to file."""
        import json

        with open(path, "w") as f:
            json.dump(self.idx_to_char, f)

    @classmethod
    def load(cls, path: str):
        """Load vocabulary from file."""
        import json

        with open(path, "r") as f:
            vocab = json.load(f)

        # Create instance with vocab
        tokenizer = cls(vocab=vocab)

        # Rebuild special token indices
        tokenizer.pad_idx = tokenizer.char_to_idx.get(tokenizer.PAD_TOKEN, 0)
        tokenizer.eow_idx = tokenizer.char_to_idx.get(tokenizer.EOW_TOKEN, 1)

        return tokenizer


class WordDataset(Dataset):
    """Dataset for word data from parquet file."""

    def __init__(
        self,
        parquet_path: Path,
        tokenizer: CharacterTokenizer,
        max_length: Optional[int] = None,
    ):
        """
        Args:
            parquet_path: Path to parquet file containing words.
            tokenizer: CharacterTokenizer instance.
            max_length: Maximum sequence length. If None, computed from data.
        """
        self.tokenizer = tokenizer

        # Load data
        df = pd.read_parquet(parquet_path)
        self.words = df["word"].tolist()

        # Compute max length if not provided
        if max_length is None:
            self.max_length = max(len(word) for word in self.words) + 1  # +1 for <EOW>
        else:
            self.max_length = max_length

    def __len__(self) -> int:
        return len(self.words)

    def __getitem__(self, idx: int) -> torch.Tensor:
        """Get a tokenized word.

        Returns:
            Tensor of token indices, padded to max_length.
        """
        word = self.words[idx]
        tokens = self.tokenizer.encode(word, add_eow=True)

        # Pad to max_length (right padding)
        if len(tokens) < self.max_length:
            tokens = tokens + [self.tokenizer.pad_idx] * (self.max_length - len(tokens))
        else:
            # Truncate if too long
            tokens = tokens[: self.max_length]

        return torch.tensor(tokens, dtype=torch.long)


def collate_fn(batch: List[torch.Tensor]) -> torch.Tensor:
    """Collate function for DataLoader.

    Args:
        batch: List of tensors.

    Returns:
        Stacked batch tensor.
    """
    return torch.stack(batch)
