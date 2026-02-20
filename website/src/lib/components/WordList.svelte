<script lang="ts">
    import { onMount } from "svelte";

    let {
        words = [],
        isGenerating = false,
        numWords = 10,
    }: {
        words: string[];
        isGenerating: boolean;
        numWords: number;
    } = $props();

    let hasLoaded = $state(false);

    onMount(() => {
        const timer = setTimeout(() => {
            hasLoaded = true;
        }, 3000); // Wait for initial animation
        return () => clearTimeout(timer);
    });

    // If user generates early, disable the initial delay for next time
    $effect(() => {
        if (isGenerating) {
            hasLoaded = true;
        }
    });
</script>

<div class="words-list">
    {#each Array(numWords - 1) as _, i}
        {@const word = words.length > 1 ? words[i + 1] : "\u00A0"}
        {#key word}
            <div
                class="word-line"
                class:exiting={isGenerating}
                style="animation-delay: {isGenerating
                    ? i * 0.05
                    : (hasLoaded ? 0 : 3.0) + i * 0.1}s"
            >
                {word}
            </div>
        {/key}
    {/each}
</div>

<style>
    .words-list {
        /* Fluid width: 
           - 45vw/650px on desktop -> Wide box, text left (Off-center)
           - 240px on mobile -> Narrow box, text left (Centered)
        */
        width: clamp(240px, 45vw, 650px);
        margin: 0 auto;
        padding: var(--spacing-xl);
    }

    .word-line {
        font-size: 1.5rem;
        font-weight: 300;
        color: var(--color-text-secondary);
        text-align: left;
        padding: var(--spacing-md) 0;
        opacity: 0;
    }

    .word-line:not(.exiting) {
        animation: fadeIn 0.5s ease-out forwards;
    }

    .word-line.exiting {
        opacity: 1;
        animation: fadeOut 0.5s ease-in forwards;
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateX(20px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }

    @keyframes fadeOut {
        from {
            opacity: 1;
            transform: translateX(0);
        }
        to {
            opacity: 0;
            transform: translateX(20px);
        }
    }

    /* We use inline styles for delays now to be dynamic, but could keep nth-child if preferred. 
       Inline is cleaner for a component with variable length. */
</style>
