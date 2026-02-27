<script lang="ts">
    import {
        backgroundSeeds,
        debugShowPaths,
        debugShowRibbons,
        debugShowAssets,
    } from "$lib/stores/ui";

    // Svelte 5: Use $props() for component props
    let {
        modelStatus = "loading",
        modelError = null,
        isGenerating = false,
        progress = 0,
        totalSteps = 0,
        inferenceSteps = 50,
        backend = "ONNX Runtime WebGPU",
    }: {
        modelStatus: "loading" | "ready" | "error";
        modelError: string | null;
        isGenerating: boolean;
        progress: number;
        totalSteps: number;
        inferenceSteps: number;
        backend: string;
    } = $props();

    let isOpen = $state(false);

    function toggleDebug() {
        isOpen = !isOpen;
    }
</script>

<div class="debug-overlay">
    <button class="debug-toggle" onclick={toggleDebug}>
        {isOpen ? "ⓧ" : "?"}
    </button>

    {#if isOpen}
        <div class="debug-panel">
            <h3>Debug Information</h3>

            <div class="debug-section">
                <div class="debug-label">Model Status:</div>
                <div class="debug-value">{modelStatus}</div>
            </div>

            {#if modelError}
                <div class="debug-section error">
                    <div class="debug-label">Error:</div>
                    <div class="debug-value">{modelError}</div>
                </div>
            {/if}

            {#if isGenerating}
                <div class="debug-section">
                    <div class="debug-label">Generation Progress:</div>
                    <div class="debug-value">
                        {progress}/{totalSteps} ({Math.round(
                            (progress / totalSteps) * 100,
                        )}%)
                    </div>
                </div>
            {/if}

            <div class="debug-section">
                <div class="debug-label">Backend:</div>
                <div class="debug-value">{backend}</div>
            </div>

            <div class="debug-section">
                <div class="debug-label">Inference Steps:</div>
                <div class="debug-value">{inferenceSteps}</div>
            </div>

            <!-- Background Config -->
            <div class="debug-section">
                <div class="debug-label">Seeds (BL, BR, Top):</div>
                <div class="debug-seeds">
                    <input
                        type="number"
                        bind:value={$backgroundSeeds[0]}
                        class="debug-input-small"
                    />
                    <input
                        type="number"
                        bind:value={$backgroundSeeds[1]}
                        class="debug-input-small"
                    />
                    <input
                        type="number"
                        bind:value={$backgroundSeeds[2]}
                        class="debug-input-small"
                    />
                </div>

                <label class="debug-checkbox">
                    <input type="checkbox" bind:checked={$debugShowPaths} />
                    <span>Show Skeleton (Debug)</span>
                </label>
                <label class="debug-checkbox">
                    <input type="checkbox" bind:checked={$debugShowRibbons} />
                    <span>Show Ribbons</span>
                </label>
                <label class="debug-checkbox">
                    <input type="checkbox" bind:checked={$debugShowAssets} />
                    <span>Show Assets</span>
                </label>
            </div>
        </div>
    {/if}
</div>

<style>
    .debug-overlay {
        position: fixed;
        top: var(--spacing-md);
        right: var(--spacing-md);
        z-index: 1000;
    }

    .debug-toggle {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: transparent;
        border: 0.5px solid var(--color-text);
        color: var(--color-text);
        font-size: 1.5rem;
        cursor: pointer;
        text-align: center;
        align-content: center;
        padding: 0;
        transition: all var(--transition-base);
        box-shadow: none;
        position: relative;
    }

    .debug-toggle::after {
        content: "";
        position: absolute;
        inset: 10px;
        border: 1.5px solid var(--color-text);
        border-radius: 50%;
    }

    .debug-toggle:hover {
        background: var(--color-text);
        color: var(--color-bg);
    }

    .debug-toggle:hover::after {
        border-color: var(--color-bg);
    }

    .debug-panel {
        position: absolute;
        top: 60px;
        right: 0px;
        min-width: 320px;
        max-width: 400px;
        background: var(--color-bg);
        border: 2px solid var(--color-text); /* Inner weight */
        border-radius: var(--border-radius);
        padding: var(--spacing-md);
        /* 2px gap (bg color) + 4px outer line (text color) */
        box-shadow:
            0 0 0 2px var(--color-bg),
            0 0 0 6px var(--color-text);
        max-height: 80vh;
        overflow-y: auto;
    }

    .debug-input {
        width: 100%;
        padding: 4px;
        border: 1px solid var(--color-border);
        border-radius: 4px;
        margin-top: 4px;
        font-family: monospace;
    }

    .debug-seeds {
        display: flex;
        gap: 4px;
        margin-top: 4px;
    }

    .debug-input-small {
        flex: 1;
        width: 0; /* Let flex handle width */
        padding: 4px;
        border: 1px solid var(--color-border);
        border-radius: 4px;
        font-family: monospace;
        font-size: 0.8rem;
    }

    .debug-checkbox {
        display: flex;
        align-items: center;
        gap: 8px;
        margin-top: 8px;
        font-size: 0.85rem;
        cursor: pointer;
        color: var(--color-text);
        user-select: none;
    }

    h3 {
        margin: 0 0 var(--spacing-md) 0;
        font-size: 1.2rem;
        font-weight: 500;
        color: var(--color-text);
    }

    h4 {
        margin: var(--spacing-sm) 0;
        font-size: 1rem;
        font-weight: 500;
        color: var(--color-text);
    }

    .debug-section {
        margin-bottom: var(--spacing-sm);
        padding-bottom: var(--spacing-sm);
        border-bottom: 1px solid var(--color-border);
    }

    .debug-section:last-child {
        border-bottom: none;
    }

    .debug-label {
        font-size: 0.85rem;
        color: var(--color-text-secondary);
        margin-bottom: 4px;
    }

    .debug-value {
        font-size: 0.95rem;
        color: var(--color-text);
        font-family: monospace;
    }

    .debug-section.error .debug-value {
        color: #ef4444;
    }

    @media (max-width: 768px) {
        .debug-overlay {
            top: var(--spacing-sm);
            right: var(--spacing-sm);
        }

        .debug-panel {
            max-width: calc(100vw - 80px);
        }
    }
</style>
