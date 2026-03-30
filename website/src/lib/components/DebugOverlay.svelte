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
    let activePage = $state<"about" | "debug">("about");

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
            <div class="panel-header">
                <button class="nav-btn" onclick={() => activePage = 'about'} style="visibility: {activePage === 'about' ? 'hidden' : 'visible'}">&laquo;</button>
                <h3>{activePage === 'about' ? 'What-Is & How-To' : 'Debug Information'}</h3>
                <button class="nav-btn" onclick={() => activePage = 'debug'} style="visibility: {activePage === 'debug' ? 'hidden' : 'visible'}">&raquo;</button>
            </div>

            {#if activePage === 'about'}
                <div class="debug-section instructions">
                <p>Welcome to <strong>eunomia</strong>, an experimental word generator model running locally in your browser.</p>
                <ul>
                    <li><strong>Generate:</strong> Click the red logo on the bottom right to generate a new set of words.</li>
                    <li><strong>See more words:</strong> Scroll down the word list for more words.</li>
                    <li><strong>Fixing letters:</strong> Type letters directly into the hero word at the top to force the model to generate words with those specific letters at those positions.</li>
                </ul>
            </div>
            {:else}
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
            {/if}
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
        font-size: 0.95rem;
    }

    .debug-checkbox {
        display: flex;
        align-items: center;
        gap: 8px;
        margin-top: 8px;
        font-size: 1rem;
        cursor: pointer;
        color: var(--color-text);
        user-select: none;
    }

    .panel-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: var(--spacing-md);
    }

    .nav-btn {
        background: transparent;
        border: none;
        color: var(--color-text);
        font-size: 2rem;
        cursor: pointer;
        padding: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0.7;
        line-height: 1;
        transform: translateY(-3px);
    }

    .nav-btn:hover {
        opacity: 1;
    }

    h3 {
        margin: 0;
        font-size: 1.25rem;
        font-weight: 500;
        color: var(--color-text);
        text-align: center;
        flex: 1;
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

    .instructions {
        font-size: 1.1rem;
        color: var(--color-text);
        line-height: 1.4;
    }

    .instructions p {
        margin: 0 0 8px 0;
    }

    .instructions ul {
        margin: 0;
        padding-left: 20px;
    }

    .instructions li {
        margin-bottom: 4px;
    }

    .debug-label {
        font-size: 1.05rem;
        color: var(--color-text-secondary);
        margin-bottom: 4px;
    }

    .debug-value {
        font-size: 1.15rem;
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
