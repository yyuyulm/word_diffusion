/**
 * Character-level tokenizer for word diffusion model.
 * Matches the Python implementation.
 */

export interface TokenizerConfig {
    vocab: string[];
    maxLength: number;
}

export class CharacterTokenizer {
    private vocab: string[];
    private charToIdx: Map<string, number>;
    private idxToChar: Map<number, string>;
    public vocabSize: number;
    public maxLength: number;
    public padTokenId: number;
    public eowTokenId: number;
    public maskTokenId: number;

    constructor(vocab: string[], maxLength: number = 32) {
        this.vocab = vocab;
        this.vocabSize = vocab.length;
        this.maxLength = maxLength;

        // Build char <-> idx mappings
        this.charToIdx = new Map();
        this.idxToChar = new Map();

        vocab.forEach((char, idx) => {
            this.charToIdx.set(char, idx);
            this.idxToChar.set(idx, char);
        });

        // Special tokens (must match Python tokenizer)
        this.padTokenId = this.charToIdx.get('<PAD>')!;
        this.eowTokenId = this.charToIdx.get('<EOW>')!;
        this.maskTokenId = this.vocabSize; // Mask token is vocab_size (not in vocab)
    }

    /**
     * Get token ID for a single character.
     */
    getTokenId(char: string): number | undefined {
        return this.charToIdx.get(char.toLowerCase());
    }

    /**
     * Encode a word into token indices.
     */
    encode(word: string): number[] {
        const tokens: number[] = [];

        // Add characters
        for (const char of word.toLowerCase()) {
            const idx = this.charToIdx.get(char);
            if (idx !== undefined) {
                tokens.push(idx);
            }
            else {
                console.log(`Unknown character: ${char} at position ${tokens.length}`);
            }
        }

        // Add EOW token
        tokens.push(this.eowTokenId);

        // Pad to max length
        while (tokens.length < this.maxLength) {
            tokens.push(this.padTokenId);
        }

        return tokens.slice(0, this.maxLength);
    }

    /**
     * Decode token indices into a word.
     */
    decode(tokens: number[], removeSpecial: boolean = true): string {
        let word = '';

        for (const idx of tokens) {
            if (idx === this.eowTokenId) {
                if (!removeSpecial) {
                    word += '<EOW>';
                }
                break;
            } else if (idx === this.padTokenId) {
                if (!removeSpecial) {
                    word += '<PAD>';
                }
            } else if (idx === this.maskTokenId) {
                if (!removeSpecial) {
                    word += '<MASK>';
                }
            } else {
                const char = this.idxToChar.get(idx);
                if (char !== undefined) {
                    word += char;
                }
                else {
                    word += '<UNK>';
                }
            }
        }

        return word;
    }

    /**
     * Load tokenizer from config.
     */
    static fromConfig(config: TokenizerConfig): CharacterTokenizer {
        return new CharacterTokenizer(config.vocab, config.maxLength);
    }

    /**
     * Load tokenizer from JSON file.
     */
    static async fromJSON(url: string): Promise<CharacterTokenizer> {
        const response = await fetch(url);
        const vocab = await response.json() as string[];
        return new CharacterTokenizer(vocab);
    }
}
