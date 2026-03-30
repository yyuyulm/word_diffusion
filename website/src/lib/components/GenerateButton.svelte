<script lang="ts">
    import { onDestroy } from "svelte";
    import { base } from "$app/paths";

    let {
        isGenerating = false,
        modelStatus = "loading",
        onclick,
        disabled = false,
        progress = 0,
        totalSteps = 1,
    }: {
        isGenerating: boolean;
        modelStatus: "loading" | "ready" | "error";
        onclick: () => void;
        disabled?: boolean;
        progress: number;
        totalSteps: number;
    } = $props();

    // Wiggle State
    let isWiggling = $state(false);

    $effect(() => {
        if (isGenerating) {
            isWiggling = false;
        }
    });

    function handleMouseEnter() {
        if (!disabled && !isGenerating && !isWiggling) {
            isWiggling = true;
        }
    }

    function handleAnimationEnd() {
        isWiggling = false;
    }

    // Spin Logic (JS-driven to finish turns)
    let rotation = $state(0);
    let frameId: number | null = null;
    let lastTime = 0;

    // We track if we are visually spinning to apply opacity
    let isSpinningVisually = $state(false);

    function animate(time: number) {
        if (!lastTime) lastTime = time;
        const deltaTime = time - lastTime;
        lastTime = time;

        // Speed: 360deg in 2000ms = 0.18 deg/ms
        const speed = 0.18;

        if (isGenerating) {
            rotation += speed * deltaTime;
            frameId = requestAnimationFrame(animate);
            isSpinningVisually = true;
        } else {
            // Check if we finished the turn
            // We want rotation % 360 to be effectively 0
            const mod = rotation % 360;

            // If mod is very small (< 5) or very large (> 355), we are done
            // Using a threshold of speed * deltaTime * 2 roughly
            const threshold = 10;

            // If result is NaN (initial state), treat as 0
            if (isNaN(mod)) {
                isSpinningVisually = false;
                return;
            }

            if (mod > threshold) {
                rotation += speed * deltaTime;
                frameId = requestAnimationFrame(animate);
                isSpinningVisually = true;
            } else {
                // Snap to exact multiple
                rotation = Math.ceil(rotation / 360) * 360;
                cancelAnimationFrame(frameId!);
                frameId = null;
                lastTime = 0;
                isSpinningVisually = false;
            }
        }
    }

    // Dynamic Scale Logic
    let dynamicScale = $derived.by(() => {
        if (!isGenerating) return undefined;
        // Start at 0.4, grow to 1.0
        // Avoid division by zero
        const steps = Math.max(totalSteps, 1);
        const p = Math.min(Math.max(progress, 0), steps);
        return 0.4 + 0.6 * (p / steps);
    });

    $effect(() => {
        if (isGenerating && frameId === null) {
            lastTime = 0;
            frameId = requestAnimationFrame(animate);
        }
    });

    onDestroy(() => {
        if (frameId !== null) cancelAnimationFrame(frameId);
    });
</script>

<button
    class="generate-btn"
    class:is-generating={isGenerating}
    {onclick}
    disabled={disabled || modelStatus !== "ready" || isGenerating}
    aria-label="Generate words"
    title={modelStatus === "error" ? "Error Loading Model" : "Generate"}
    onmouseenter={handleMouseEnter}
    style:transform={dynamicScale ? `scale(${dynamicScale})` : undefined}
>
    <!-- Outer wrapper handles Rotation (Spin) -->
    <div class="spin-wrapper" style:transform="rotate({rotation}deg)">
        <!-- Inner wrapper handles Wiggle -->
        <div
            class="wiggle-wrapper"
            class:wiggling={isWiggling && !isSpinningVisually}
            onanimationend={handleAnimationEnd}
        >
            <img
                src="{base}/assets/2329481.svg"
                alt="Generate"
                class="wheel-icon"
                draggable="false"
            />
        </div>
    </div>
</button>

<style>
    .generate-btn {
        position: fixed;
        bottom: var(--spacing-2xl);
        right: var(--spacing-3xl);
        /* Remove pill styling */
        background: transparent;
        padding: 0;
        border: none;
        border-radius: 50%;
        box-shadow: none;

        display: flex;
        align-items: center;
        justify-content: center;

        /* Ensure it's above other elements */
        z-index: 100;
        cursor: pointer;

        /* Transition scale via transform */
        transition: transform 0.7s cubic-bezier(0.34, 1.56, 0.64, 1); /* Bouncy/smooth ease */
        transform: scale(1); /* Explicit default */

        /* Intro animation: pops in after letter flips complete (~1.8s) */
        animation: btnIntro 3s cubic-bezier(0.34, 1.46, 0.64, 1) 1.8s backwards;
    }

    /* Icon Styling */
    .wheel-icon {
        /* Interpolate between 140px (mobile-ish) and 180px (desktop) */
        width: clamp(120px, 20vw, 160px);
        height: clamp(120px, 20vw, 160px);
    }

    /* Active (pressed) scale down - disabled state handled by JS dynamic scale */
    .generate-btn:active:not(:disabled) {
        transform: scale(0.4);
    }

    /* Animation wrappers */
    .spin-wrapper {
        display: flex;
        /* Force hardware acceleration for smoother spin */
        will-change: transform;
        /* Removed scale transition from here as it's on the button */
    }

    .wiggle-wrapper {
        display: flex;
        transform-origin: center;
    }

    /* Wiggle class controlled by JS */
    .wiggling {
        animation: wiggle 0.7s ease-in-out;
    }

    /* Disabled state - just cursor, scale handled above */
    .generate-btn:disabled {
        cursor: not-allowed;
    }

    @keyframes wiggle {
        0% {
            transform: rotate(0deg);
        }
        35% {
            transform: rotate(15deg);
        }
        80% {
            transform: rotate(-7deg);
        }
        100% {
            transform: rotate(0deg);
        }
    }

    @keyframes btnIntro {
        from {
            transform: scale(0) translateY(30px) rotate(-180deg);
        }
        to {
            transform: scale(1) translateY(0px) rotate(0deg);
        }
    }

    @media (max-width: 768px) {
        .generate-btn {
            bottom: var(--spacing-md);
            right: var(--spacing-md);
        }

        /* 
         Removed explicit .wheel-icon override to let clamp() handle the sizing logic.
         The clamp(140px, 15vw, 180px) ensures it stays between 140 and 180.
        */
    }
</style>
