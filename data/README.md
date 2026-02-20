# Data sources for word diffusion model training (and potentially other dictionary/wordlist projects)

After extracting the data from the three following datasets with `merge_datasets.py`, we get around 771k words (mostly from dwyl/english-words, see Venn diagram in `dataset_venn_diagram.png`) which is used as the final dataset for training the word diffusion model.

## [dwyl/english-words](https://github.com/dwyl/english-words)

English only, but most accessible/manageable in terms of size and file type/format. Conversion scripts for `words_dictionary.json` are provided in `extract_words_dictionary.py`.

466k English words. 370k alphabetical words (with plural forms).

Files you may be interested in from the repository:

* `words.txt` contains all words.
* `words_alpha.txt` contains only `re[[:alpha:]]` words (words that only have letters, no numbers or symbols). If you want a quick solution choose this.
* `words_dictionary.json` contains all the words from words_alpha.txt as json format. If you are using Python, you can easily load this file and use it as a dictionary for faster performance. All the words are assigned with 1 in the dictionary.

## [Wiktionary](https://en.wiktionary.org/wiki/Wiktionary:Main_Page)

Massive dataset of words from multiple languages and their dictionary entries in english.

Dumps can be found here: [https://dumps.wikimedia.org/enwiktionary/].

Extarction and inspection tool: [https://github.com/tatuylonen/wiktextract].

Pre-expanded raw data (**recommended entry point**): [https://kaikki.org/dictionary/rawdata.html].

You can process the raw data using the `jsonl_to_parquet.py` script, this would subsample to only English word entries and convert them to parquet format.

The processed data is available in `wiktionary_en.parquet` by default, which can be later subsampled to only words with the `extract_words.py` script. Depending on filter options, the final dataset size varies. For word generation tasks, it is recommended to limit to only a-z and A-Z, keep only words with lowercase dominance, merge to lowercase, and remove plurals. This results in a dataset of around 680k words (920k before removing plurals), which seems not significantly bigger than the dataset from dwyl/english-words (around 330k words with plural forms removed, indicating the dataset is probably of higher quality).

## [OpenWordNet](https://en-word.net/)

*Massive dataset of words from multiple languages and associated synsets, definitions, example usage, etc.*

Open English WordNet : [https://github.com/globalwordnet/english-wordnet]

Other languages can be found under the same [github organization](https://github.com/globalwordnet).

Though said to be massive, the dataset is only of 160k words, since the dataset is more focused on synsets and relations, and less on the words themselves.

After splitting multi-word entries and with the same filter applied like wiktionary, we get around 86k words.
