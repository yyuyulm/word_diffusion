<script lang="ts">
    // Svelte 5: Remove onMount, use $effect instead
    // Svelte 5: Use $props() for component props
    let {
        letter = "",
        conditionedLetter = null,
        position = 0,
        isEditable = true,
        onConditionChange = () => {},
        isOpen = $bindable(false),
    }: {
        letter: string;
        conditionedLetter: string | null;
        position: number;
        isEditable: boolean;
        onConditionChange: (pos: number, letter: string | null) => void;
        isOpen?: boolean;
    } = $props();

    // Svelte 5: Use $state() for reactive state
    let inputElement = $state<HTMLInputElement>();
    let isEditing = $state(false);

    // Track animation state to prevent initial "close" animation on mount
    let hasOpened = $state(false);

    $effect(() => {
        if (isOpen) hasOpened = true;
    });

    const isClosing = $derived(!isOpen && hasOpened);

    // Svelte Action for sustained lift animation
    function sustainedLift(node: HTMLElement) {
        let isHovering = false;
        let isLifting = false;

        function handleMouseEnter() {
            if (!isEditable) return;
            isHovering = true;
            if (!node.classList.contains("lifted")) {
                node.classList.add("lifted");
                isLifting = true;
            }
        }

        function handleMouseLeave() {
            isHovering = false;
            // Only remove if we're not currently lifting (animating up)
            if (!isLifting) {
                node.classList.remove("lifted");
            }
        }

        function handleTransitionEnd(e: TransitionEvent) {
            // Guard: only react to transitions on the node itself, not bubbled child events
            if (e.target !== node) return;
            // Accept both "transform" and "translate" (browser inconsistency)
            if (
                e.propertyName !== "transform" &&
                e.propertyName !== "translate"
            )
                return;

            // If we were lifting, we are done now
            if (isLifting) {
                isLifting = false;
                // If user left while we were lifting, now we can drop
                if (!isHovering) {
                    node.classList.remove("lifted");
                }
            }
        }

        node.addEventListener("mouseenter", handleMouseEnter);
        node.addEventListener("mouseleave", handleMouseLeave);
        node.addEventListener("transitionend", handleTransitionEnd);

        return {
            destroy() {
                node.removeEventListener("mouseenter", handleMouseEnter);
                node.removeEventListener("mouseleave", handleMouseLeave);
                node.removeEventListener("transitionend", handleTransitionEnd);
            },
        };
    }

    // Svelte 5: Use $derived() for computed values
    const displayValue = $derived(
        conditionedLetter !== null ? conditionedLetter : letter,
    );
    const isConditioned = $derived(conditionedLetter !== null);

    // Calculate stagger delay based on position
    const staggerDelay = $derived(position * 100); // 100ms, 200ms...

    function handleClick() {
        if (!isEditable) return;
        isEditing = true;
        setTimeout(() => inputElement?.focus(), 10);
    }

    function handleInput(e: Event) {
        const target = e.target as HTMLInputElement;
        
        // Strip non-letters and force lowercase immediately
        let cleanValue = target.value.replace(/[^a-zA-Z]/g, '').toLowerCase();

        // Only keep the most recent character if they mashed keys
        if (cleanValue.length > 1) {
            cleanValue = cleanValue.charAt(cleanValue.length - 1);
        }

        // Force physical DOM to immediately reflect sanitized state
        target.value = cleanValue;

        if (cleanValue && /^[a-z]$/.test(cleanValue)) {
            onConditionChange(position, cleanValue);
        } else {
            onConditionChange(position, null);
        }
    }

    function handleBlur() {
        isEditing = false;
    }

    function handleKeydown(e: KeyboardEvent) {
        if (e.key === "Escape") {
            onConditionChange(position, null);
            isEditing = false;
        } else if (e.key === "Enter") {
            isEditing = false;
        }
    }
</script>

<div
    class="letter-box"
    class:conditioned={isConditioned}
    class:editable={isEditable}
>
    <div class="letter-wrapper">
        {#if isEditing && isEditable}
            <input
                bind:this={inputElement}
                type="text"
                class="letter-input"
                value={conditionedLetter || ""}
                oninput={handleInput}
                onblur={handleBlur}
                onkeydown={handleKeydown}
                maxlength="1"
            />
        {:else}
            <button
                class="letter-display"
                class:empty={!displayValue}
                use:sustainedLift
                onclick={handleClick}
                disabled={!isEditable}
            >
                {displayValue || "_"}
            </button>
        {/if}

        <!-- Persistent Paper flap - always rendered in wrapper -->
        <div
            class="paper-flap"
            class:open={isOpen}
            class:closing={isClosing}
            style="animation-delay: {staggerDelay}ms"
        ></div>
    </div>
</div>

<style>
    .letter-box {
        display: inline-block;
        position: relative;
        transform-origin: center bottom;
        transform-style: preserve-3d;
    }

    .letter-wrapper {
        position: relative;
        display: inline-block;
        transform-style: preserve-3d;
    }

    .letter-box.conditioned .letter-display {
        color: var(--color-text);
        border-bottom: 3px solid var(--color-text);
    }

    .letter-display {
        font-size: clamp(1.5rem, 10vw, 8rem);
        font-weight: 300;
        letter-spacing: -0.02em;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        background: none;
        border: none;
        border-bottom: 3px solid transparent;
        color: var(--color-text-secondary);
        padding: 0;
        cursor: pointer;
        transition:
            transform 0.35s cubic-bezier(0.2, 0, 0.8, 1),
            color 0.2s; /* Snappier, less floaty */
        font-family: var(--font-sans);
        width: 1.5ch; /* Restore Desktop Width */
        position: relative;
        z-index: 1;
        /* Firefox preserve-3d fix: keep a permanent compositor layer so
           Firefox doesn't drop the element after the transition ends */
        transform: translateZ(0);
    }

    /* ... skipping intermediate rules ... */

    .letter-input {
        font-size: clamp(1.5rem, 10vw, 8rem);
        font-weight: 300;
        letter-spacing: -0.02em;
        background: none;
        border: none;
        border-bottom: 3px solid var(--color-text);
        color: var(--color-text);
        padding: 0;
        font-family: var(--font-sans);
        width: 1.5ch; /* Restore Desktop Width */
        text-align: center;
        outline: none;
        text-transform: lowercase;
    }

    @media (max-width: 768px) {
        .letter-display,
        .letter-input {
            width: 9vw; /* Force spanning 90% of screen width (10 * 9vw) */
        }
    }

    .paper-flap {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: grey;
        transform-origin: center top;
        z-index: 2;
        pointer-events: none;
        pointer-events: none;
        background: var(--color-bg);
        /* Default to closed position (covering letter) */
        transform: rotateX(0deg);
        will-change: transform;
        /* Firefox fix: hide the flap once it rotates past 90deg so it
           doesn't block the letter in the 3D stacking context */
        backface-visibility: hidden;
        -webkit-backface-visibility: hidden;
    }

    /* Only animate close if we were previously open */
    .paper-flap.closing {
        transform: rotateX(
            180deg
        ); /* Stay open during delay, then animate to closed */
        animation:
            flipCloseMotion 1.2s cubic-bezier(0.4, 0, 0.6, 1) forwards,
            flipCloseShadow 1.2s cubic-bezier(0.5, 0, 0.5, 1) forwards;
    }

    .paper-flap.open {
        /* Open animation */
        animation:
            flipOpenMotion 1.2s cubic-bezier(0.4, 0, 0.6, 1) forwards,
            flipOpenShadow 1.2s cubic-bezier(0.5, 0, 0.5, 1) forwards;
    }

    /* Motion: Continuous 0-100% to avoid easing reset at 50% */
    @keyframes flipOpenMotion {
        0% {
            transform: rotateX(0deg);
        }
        100% {
            transform: rotateX(180deg);
        }
    }

    @keyframes flipCloseMotion {
        0% {
            transform: rotateX(180deg);
        }
        100% {
            transform: rotateX(0deg);
        }
    }

    /* Shadow: Handles color changes including midpoint */
    @keyframes flipOpenShadow {
        0% {
            filter: brightness(1);
        }
        50% {
            filter: brightness(0.6);
        }
        100% {
            filter: brightness(1);
        }
    }

    @keyframes flipCloseShadow {
        0% {
            filter: brightness(1);
        }
        50% {
            filter: brightness(0.6);
        }
        100% {
            filter: brightness(1);
        }
    }

    .letter-display.empty {
        color: var(--color-text-muted);
    }

    /* Use .lifted class for sustained lift logic */
    :global(.letter-display.lifted) {
        transform: translateY(-5px) translateZ(0);
    }

    .letter-box.editable .letter-display:hover {
        border-bottom-color: var(--color-border);
    }

    .letter-display:disabled {
        cursor: default;
    }
</style>
