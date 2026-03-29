/**
 * ONNX Runtime inference for MD4 word diffusion model.
 * Handles model loading, backend selection (WebGL/WASM), and sampling.
 */

import * as ort from 'onnxruntime-web';
import { CharacterTokenizer } from './tokenizer';

/**
 * Helper function to compute sampling grid values for s and t.
 */
function getSamplingGrid(i: number, numSteps: number, gridType: string): { s: number; t: number } {
    let t = (numSteps - i) / numSteps;
    let s = t - 1 / numSteps;

    if (gridType === 'cosine') {
        t = Math.cos(Math.PI / 2.0 * (1.0 - t));
        s = Math.cos(Math.PI / 2.0 * (1.0 - s));
    }
    // else: uniform grid, use linear t and s

    return { s, t };
}

export interface ModelConfig {
    vocabSize: number;
    maxSeqLen: number;
    timesteps: number;
    modelType: string; // 'md4' or 'genmd4'
    samplingGrid: string;
}

/**
 * All valid conditioning tokens — 26 lowercase letters, PAD, and EOW.
 * null in a conditioning array means "free" (the mask token, vocab_size, is
 * injected internally — it is NOT part of the tokenizer vocabulary).
 */
export enum ConditionToken {
    A = 'a', B = 'b', C = 'c', D = 'd', E = 'e',
    F = 'f', G = 'g', H = 'h', I = 'i', J = 'j',
    K = 'k', L = 'l', M = 'm', N = 'n', O = 'o',
    P = 'p', Q = 'q', R = 'r', S = 's', T = 't',
    U = 'u', V = 'v', W = 'w', X = 'x', Y = 'y',
    Z = 'z',
    Pad = 'PAD',
    Eow = 'EOW',
}

export interface SamplingOptions {
    numSteps?: number;
    batchSize?: number;
    onProgress?: (step: number, total: number) => void;
    /**
     * Full-length conditioning array built by buildConditioning().
     * null = free position (maps to mask token internally).
     */
    conditioning?: (ConditionToken | null)[];
}

export class MD4Inference {
    private session: ort.InferenceSession | null = null;
    private tokenizer: CharacterTokenizer | null = null;
    private config: ModelConfig | null = null;
    private backend: string = 'unknown';

    /**
     * Initialize the inference engine.
     */
    async initialize(
        modelPath: string,
        tokenizerPath: string,
        configPath: string,
        preferredBackend: 'webgl' | 'wasm' = 'webgl'
    ): Promise<{ success: boolean; backend: string; error?: string }> {
        try {
            // Load config
            const configResponse = await fetch(configPath);
            const rawConfig = await configResponse.json();

            // Convert snake_case keys from JSON to camelCase for TypeScript
            this.config = {
                vocabSize: rawConfig.vocab_size,
                maxSeqLen: rawConfig.max_seq_len,
                timesteps: rawConfig.timesteps,
                modelType: rawConfig.model_type,
                samplingGrid: rawConfig.sampling_grid
            };

            // Load tokenizer
            this.tokenizer = await CharacterTokenizer.fromJSON(tokenizerPath);

            // Set execution providers based on preference
            const executionProviders: ort.InferenceSession.ExecutionProviderConfig[] = [];

            if (preferredBackend === 'webgl') {
                // Try WebGL first, fallback to WASM
                executionProviders.push('webgl');
                executionProviders.push('wasm');
            } else {
                // WASM only
                executionProviders.push('wasm');
            }

            // Load model
            this.session = await ort.InferenceSession.create(modelPath, {
                executionProviders: executionProviders as any
            });

            // Determine which backend was actually used
            this.backend = this.session.inputNames.length > 0 ?
                (executionProviders[0] as string) : 'cpu';

            console.log('Model loaded successfully');
            console.log('Backend:', this.backend);
            console.log('Config:', this.config);

            return { success: true, backend: this.backend };
        } catch (error) {
            console.error('Failed to initialize model:', error);
            return {
                success: false,
                backend: 'none',
                error: error instanceof Error ? error.message : String(error)
            };
        }
    }

    /**
     * Predict logits at time t and alpha values at times t and s.
     */
    private async predictLogitsAndAlpha(
        zT: Int32Array,
        t: number,
        s: number,
        seqLen: number
    ): Promise<{ logits: Float32Array; alphaT: Float32Array; alphaS: Float32Array }> {
        if (!this.session || !this.config) {
            throw new Error('Model not initialized');
        }

        const batchSize = Math.floor(zT.length / seqLen);

        // Validate batchSize
        if (!Number.isFinite(batchSize) || batchSize <= 0) {
            throw new Error(`Invalid batchSize calculated: ${batchSize} (zT.length=${zT.length}, seqLen=${seqLen})`);
        }

        // Create input tensors
        const zTTensor = new ort.Tensor('int64', BigInt64Array.from(zT, x => BigInt(x)), [batchSize, seqLen]);
        const tArray = new Float32Array(batchSize).fill(t);
        const tTensor = new ort.Tensor('float32', tArray, [batchSize]);
        const sArray = new Float32Array(batchSize).fill(s);
        const sTensor = new ort.Tensor('float32', sArray, [batchSize]);

        // Run inference
        const results = await this.session.run({
            z_t: zTTensor,
            t: tTensor,
            s: sTensor
        });

        // Get all outputs from ONNX
        const logits = results.logits.data as Float32Array;
        const alphaT = results.alpha_t.data as Float32Array;
        const alphaS = results.alpha_s.data as Float32Array;

        return { logits, alphaT, alphaS };
    }

    /**
     * Softmax function.
     */
    private softmax(logits: Float32Array, offset: number, size: number): Float32Array {
        const probs = new Float32Array(size);
        let maxLogit = -Infinity;

        // Find max for numerical stability
        for (let i = 0; i < size; i++) {
            maxLogit = Math.max(maxLogit, logits[offset + i]);
        }

        // Compute exp and sum
        let sum = 0;
        for (let i = 0; i < size; i++) {
            const prob = Math.exp(logits[offset + i] - maxLogit);
            probs[i] = prob;
            sum += prob;
        }

        // Normalize
        for (let i = 0; i < size; i++) {
            probs[i] /= sum;
        }

        return probs;
    }

    /**
     * Sample from categorical distribution.
     */
    private sampleCategorical(probs: Float32Array): number {
        const r = Math.random();
        let cumSum = 0;

        for (let i = 0; i < probs.length; i++) {
            cumSum += probs[i];
            if (r < cumSum) {
                return i;
            }
        }

        return probs.length - 1;
    }

    /**
     * Get the actual number of inference steps that will be executed given the current mask ratio.
     */
    getActualSteps(conditioning: (ConditionToken | null)[] | null, numSteps: number): number {
        if (!this.config || !conditioning) return numSteps;

        const seqLen = this.config.maxSeqLen;
        let maskCount = 0;
        for (let i = 0; i < seqLen; i++) {
            if (conditioning[i] === null) {
                maskCount++;
            }
        }

        const maskRatio = maskCount / seqLen;
        let startStep = 0;
        let minDiff = Infinity;
        
        for (let i = 0; i < numSteps; i++) {
            const { t } = getSamplingGrid(i, numSteps, this.config.samplingGrid);
            const diff = Math.abs(t - maskRatio);
            if (diff < minDiff) {
                minDiff = diff;
                startStep = i;
            }
        }
        
        return numSteps - startStep;
    }

    /**
     * Generate samples using ancestral sampling.
     * Matches PyTorch/JAX implementation.
     */
    async sample(options: SamplingOptions = {}): Promise<string[]> {
        if (!this.session || !this.config || !this.tokenizer) {
            throw new Error('Model not initialized');
        }

        const numSteps = options.numSteps || 50;
        const batchSize = options.batchSize || 10;
        const seqLen = this.config.maxSeqLen;
        const vocabSize = this.config.vocabSize;
        const maskToken = this.tokenizer.maskTokenId;

        // Start from all mask tokens (or conditioning if provided)
        const zT = new Int32Array(batchSize * seqLen);

        // Process conditioning if provided
        let conditioningIds: number[] | null = null;
        if (options.conditioning) {
            conditioningIds = new Array(seqLen).fill(maskToken);
            for (let i = 0; i < Math.min(seqLen, options.conditioning.length); i++) {
                const token = options.conditioning[i];
                if (token === null) {
                    conditioningIds[i] = maskToken;           // free position
                } else if (token === ConditionToken.Pad) {
                    conditioningIds[i] = this.tokenizer.padTokenId;
                } else if (token === ConditionToken.Eow) {
                    conditioningIds[i] = this.tokenizer.eowTokenId;
                } else {
                    // Letter: enum value IS the character string (e.g. ConditionToken.A === 'a')
                    const tokenId = this.tokenizer.getTokenId(token);
                    if (tokenId !== undefined) {
                        conditioningIds[i] = tokenId;
                    } else {
                        console.warn(`Conditioning character '${token}' not found in vocabulary`);
                    }
                }
            }
        }

        let actualSteps = numSteps;
        let startStep = 0;

        // Initialize with conditioning or mask tokens
        if (options.conditioning && conditioningIds) {
            // Duplicate conditioning array for each batch item
            for (let b = 0; b < batchSize; b++) {
                zT.set(conditioningIds, b * seqLen);
            }

            actualSteps = this.getActualSteps(options.conditioning, numSteps);
            startStep = numSteps - actualSteps;
            console.log(`Mask ratio calculated. Starting at step: ${startStep}/${numSteps} (Actual steps: ${actualSteps})`);
            
        } else {
            // No conditioning, start from all mask tokens
            zT.fill(maskToken);
        }

        // Iteratively denoise, starting from the calculated timestep matching the conditional mask ratio
        for (let i = startStep; i < numSteps; i++) {
            if (options.onProgress) {
                // Adjust progress reporting so it maps to the actual steps taken 
                // e.g. step 1/25 instead of 26/50
                options.onProgress(i - startStep + 1, actualSteps);
            }

            const { s, t } = getSamplingGrid(i, numSteps, this.config.samplingGrid);

            // Get logits and both alpha values in a single ONNX call
            const { logits, alphaT, alphaS } = await this.predictLogitsAndAlpha(zT, t, s, seqLen);

            // Compute probabilities from logits
            // Shape: (batch * seqLen * vocabSize)
            const probs = new Float32Array(batchSize * seqLen * vocabSize);
            for (let b = 0; b < batchSize; b++) {
                for (let pos = 0; pos < seqLen; pos++) {
                    const logitOffset = (b * seqLen + pos) * vocabSize;
                    const probsPosition = this.softmax(logits, logitOffset, vocabSize);
                    probs.set(probsPosition, logitOffset);
                }
            }

            // Compute unmask probabilities
            // Alpha shape: [batch] for MD4 or [batch, vocab_size] for GenMD4
            let unmaskProbPerToken: Float32Array;
            let unmaskProbMean: number;

            // Check if GenMD4 (vector alpha) or MD4 (scalar alpha)
            const isGenMD4 = alphaT.length > batchSize;

            if (isGenMD4) {
                // GenMD4: vector alpha [batch, vocab_size]
                // Use first batch item's alpha values (they're all the same for constant t)
                unmaskProbPerToken = new Float32Array(vocabSize);
                for (let v = 0; v < vocabSize; v++) {
                    const alphaT_v = alphaT[v];  // First batch
                    const alphaS_v = alphaS[v];
                    const unmask = (alphaS_v - alphaT_v) / (1.0 - alphaT_v + 1e-10);
                    unmaskProbPerToken[v] = Math.max(0, Math.min(1, unmask));
                }
                // Mean unmask probability for mask token
                let sum = 0;
                for (let v = 0; v < vocabSize; v++) {
                    sum += unmaskProbPerToken[v];
                }
                unmaskProbMean = sum / vocabSize;
            } else {
                // MD4: scalar alpha [batch]
                // Use first batch item (they're all the same for constant t)
                const unmask = (alphaS[0] - alphaT[0]) / (1.0 - alphaT[0] + 1e-10);
                unmaskProbMean = Math.max(0, Math.min(1, unmask));
                // All tokens have the same unmask probability
                unmaskProbPerToken = new Float32Array(vocabSize).fill(unmaskProbMean);
            }

            // Scale predicted probabilities by unmask probabilities
            // probs_vocab[v] = unmask_prob[v] * probs[v]
            const probsVocab = new Float32Array(batchSize * seqLen * vocabSize);
            for (let b = 0; b < batchSize; b++) {
                for (let pos = 0; pos < seqLen; pos++) {
                    const offset = (b * seqLen + pos) * vocabSize;
                    for (let v = 0; v < vocabSize; v++) {
                        probsVocab[offset + v] = unmaskProbPerToken[v] * probs[offset + v];
                    }
                }
            }

            // Probability to stay masked
            const probMask = 1.0 - unmaskProbMean;

            // Sample for each position in each batch item
            for (let b = 0; b < batchSize; b++) {
                for (let pos = 0; pos < seqLen; pos++) {
                    const idx = b * seqLen + pos;

                    // Skip conditioned positions
                    if (conditioningIds && conditioningIds[pos] !== maskToken) {
                        continue;
                    }

                    // Only update masked positions
                    if (zT[idx] !== maskToken) {
                        continue;
                    }

                    // Combine: [vocab probs | mask prob]
                    const probsCombined = new Float32Array(vocabSize + 1);
                    const offset = (b * seqLen + pos) * vocabSize;
                    for (let v = 0; v < vocabSize; v++) {
                        probsCombined[v] = probsVocab[offset + v];
                    }
                    probsCombined[vocabSize] = probMask;

                    // Normalize to ensure valid probability distribution
                    let sum = 0;
                    for (let v = 0; v <= vocabSize; v++) {
                        sum += probsCombined[v];
                    }
                    for (let v = 0; v <= vocabSize; v++) {
                        probsCombined[v] /= (sum + 1e-10);
                    }

                    // Sample new token
                    const sampled = this.sampleCategorical(probsCombined);
                    zT[idx] = sampled;
                }
            }

            // Re-apply conditioning to keep conditioned tokens fixed
            if (conditioningIds) {
                for (let b = 0; b < batchSize; b++) {
                    for (let pos = 0; pos < seqLen; pos++) {
                        if (conditioningIds[pos] !== maskToken) {
                            const idx = b * seqLen + pos;
                            zT[idx] = conditioningIds[pos];
                        }
                    }
                }
            }

            // Yield to event loop to prevent freezing
            if (i % 10 === 0) {
                await new Promise(resolve => setTimeout(resolve, 0));
            }
        }

        // Final cleanup: decode any remaining mask tokens
        const { logits: finalLogits } = await this.predictLogitsAndAlpha(zT, 0.0, 0.0, seqLen);
        for (let b = 0; b < batchSize; b++) {
            for (let pos = 0; pos < seqLen; pos++) {
                const idx = b * seqLen + pos;

                // Skip conditioned positions
                if (conditioningIds && conditioningIds[pos] !== maskToken) {
                    continue;
                }

                if (zT[idx] === maskToken) {
                    const logitOffset = (b * seqLen + pos) * vocabSize;
                    const probs = this.softmax(finalLogits, logitOffset, vocabSize);

                    // Take argmax
                    let maxIdx = 0;
                    let maxProb = probs[0];
                    for (let v = 1; v < vocabSize; v++) {
                        if (probs[v] > maxProb) {
                            maxProb = probs[v];
                            maxIdx = v;
                        }
                    }
                    zT[idx] = maxIdx;
                }
            }
        }

        // Final conditioning re-application
        if (conditioningIds) {
            for (let b = 0; b < batchSize; b++) {
                for (let pos = 0; pos < seqLen; pos++) {
                    if (conditioningIds[pos] !== maskToken) {
                        const idx = b * seqLen + pos;
                        zT[idx] = conditioningIds[pos];
                    }
                }
            }
        }

        // Log raw tokens for debugging
        console.log('=== Raw Token Output ===');
        console.log('Special tokens:', {
            PAD: this.tokenizer.padTokenId,
            EOW: this.tokenizer.eowTokenId,
            MASK: this.tokenizer.maskTokenId
        });
        if (conditioningIds) {
            console.log('Conditioning ids:', conditioningIds);
        }

        // Decode samples
        const words: string[] = [];
        for (let b = 0; b < batchSize; b++) {
            const tokens = Array.from(zT.slice(b * seqLen, (b + 1) * seqLen));
            console.log(`Sample ${b} tokens:`, tokens);
            const word = this.tokenizer.decode(tokens);
            console.log(`Sample ${b} decoded:`, word);
            words.push(word);
        }

        return words;
    }

    /**
     * Get current backend being used.
     */
    getBackend(): string {
        return this.backend;
    }

    /**
     * Build a full conditioning array from a UI pattern.
     * Positions 0..maxVisibleLen-1: from userPattern
     *   null  → null (free; mask token is injected during sampling)
     *   char  → ConditionToken letter enum value
     * Positions maxVisibleLen..seqLen-1: ConditionToken.Pad
     */
    buildConditioning(userPattern: (string | null)[], maxVisibleLen: number): (ConditionToken | null)[] {
        if (!this.config) throw new Error('Model not initialized');
        const seqLen = this.config.maxSeqLen;
        const conditioning: (ConditionToken | null)[] = new Array(seqLen).fill(null);

        for (let i = 0; i < Math.min(maxVisibleLen, userPattern.length, seqLen); i++) {
            const char = userPattern[i];
            // Safe cast: UI only produces validated lowercase letters
            conditioning[i] = char !== null ? char as unknown as ConditionToken : null;
        }

        for (let i = maxVisibleLen; i < seqLen; i++) {
            conditioning[i] = ConditionToken.Pad;
        }

        return conditioning;
    }

    /**
     * Check if model is initialized.
     */
    isInitialized(): boolean {
        return this.session !== null;
    }
}
