<script lang="ts">
	import { onMount } from "svelte";
	import { base } from "$app/paths";
	import { MD4Inference } from "$lib/model/inference";
	import LetterBox from "$lib/components/LetterBox.svelte";
	import WordList from "$lib/components/WordList.svelte";
	import GenerateButton from "$lib/components/GenerateButton.svelte";
	import DebugOverlay from "$lib/components/DebugOverlay.svelte";

	// Fixed parameters (hidden from user)
	const numWords = 10;
	const numSteps = 48;

	// State
	let modelStatus: "loading" | "ready" | "error" = $state("loading");
	let modelError = $state("");
	let backend = $state("unknown");

	let isGenerating = $state(false);
	// Default intro words
	const BASE_WORDS = [
		"eunomia",
		"",
		"unexisted",
		"pieces",
		"of",
		"language",
	];

	// Initialize with default list
	let generatedWords: string[] = $state([...BASE_WORDS]);
	let progress = $state(0);
	let totalSteps = $state(numSteps);
	let isAppending = $state(false);
	let hasGenerated = $state(false);

	// Animation debug control
	let animationProgress = $state(0);

	function handleAnimationProgressChange(newProgress: number) {
		animationProgress = newProgress;
	}

	// Hero word state - dual purpose: display and conditioning
	// We use the first word 'eunomia' as the base for the hero display
	const TOOL_NAME = BASE_WORDS[0];
	const MAX_WORD_LENGTH = 10; // Maximum word length supported by model
	const MAX_GENERATED_WORDS = 200; // Cap on infinite scroll list

	// Display state: the actual letters being shown (from generation or initial)
	// Initialize with "nomia" padded to MAX_WORD_LENGTH
	let displayWord: string[] = $state(
		[
			...TOOL_NAME.split(""),
			...new Array(Math.max(0, MAX_WORD_LENGTH - TOOL_NAME.length)).fill(
				"",
			),
		].slice(0, MAX_WORD_LENGTH),
	);

	// Static indices for stable looping
	const wordIndices = Array.from({ length: MAX_WORD_LENGTH }, (_, i) => i);

	// Conditioning state: which positions have user-specified letters
	// null means unconditioned, string means conditioned to that letter
	let conditioningPattern: (string | null)[] = $state(
		new Array(MAX_WORD_LENGTH).fill(null),
	);

	// Flap state: controls whether each letter's paper flap is open (revealed) or closed (hidden)
	let letterBoxStates = $state(new Array(MAX_WORD_LENGTH).fill(false));

	// Inference engine
	const inference = new MD4Inference();

	// Dynamically calculate the remaining steps based on current mask ratio
	let actualInferenceSteps = $derived(
		(modelStatus as string) === "ready"
			? inference.getActualSteps(
					inference.buildConditioning(conditioningPattern, MAX_WORD_LENGTH),
					numSteps,
			  )
			: numSteps,
	);

	onMount(async () => {
		// Initialize model
		const result = await inference.initialize(
			`${base}/model/model.ort`,
			`${base}/model/tokenizer.json`,
			`${base}/model/config.json`,
			"webgl", // Try WebGL first, fallbacks to WASM automatically
		);

		if (result.success) {
			modelStatus = "ready";
			backend = result.backend;
		} else {
			modelStatus = "error";
			modelError = result.error || "Unknown error";
		}

		// Slight delay to allow render, then reveal flaps
		setTimeout(() => {
			letterBoxStates = new Array(MAX_WORD_LENGTH).fill(true);
		}, 100);
	});

	function handleConditionChange(position: number, letter: string | null) {
		conditioningPattern[position] = letter;
		// Trigger reactivity
		conditioningPattern = [...conditioningPattern];
		
		// Mark generation as dirty so that the next generation command completely 
		// replaces the list rather than appending mismatches to the old conditioning output.
		hasGenerated = false;
	}

	function infiniteScroll(node: HTMLElement) {
		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting) {
					if (modelStatus === "ready" && !isGenerating && generatedWords.length < MAX_GENERATED_WORDS) {
						generateWords(hasGenerated);
					}
				}
			},
			{ rootMargin: "200px" },
		);
		observer.observe(node);
		return {
			destroy() {
				observer.disconnect();
			},
		};
	}

	async function generateWords(append = false) {
		if (!inference.isInitialized() || isGenerating) return;
		if (append && generatedWords.length >= MAX_GENERATED_WORDS) return;

		isGenerating = true;
		isAppending = append;
		progress = 0;
		// Use dynamically calculated steps
		totalSteps = actualInferenceSteps;
		// Don't clear here - let words animate out
		// generatedWords = [];

		try {
			// Always build a full conditioning array:
			// positions 0..MAX_WORD_LENGTH-1: user pattern (null = free)
			// positions MAX_WORD_LENGTH..seqLen-1: PAD (keeps words ≤ 10 chars)
			const conditioning = inference.buildConditioning(
				conditioningPattern,
				MAX_WORD_LENGTH,
			);

			if (!append) {
				// Close unconditioned flaps before generation starts
				// Keep user-conditioned letters open (visible)
				// Defer to next frame to avoid flash from batched updates
				await new Promise((resolve) => requestAnimationFrame(resolve));
				letterBoxStates = letterBoxStates.map(
					(_, i) => conditioningPattern[i] !== null,
				);

				// Wait for close animation to complete (max stagger 900ms + animation 1200ms + buffer)
				// This ensures smooth animation without competing with inference
				await new Promise((resolve) => setTimeout(resolve, 2200));
			}

			// Now run inference after animation is complete
			const words = await inference.sample({
				batchSize: numWords,
				numSteps: numSteps,
				conditioning: conditioning,
				onProgress: (step, total) => {
					progress = step;
					totalSteps = total;
				},
			});

			if (append) {
				generatedWords = [...generatedWords, ...words].slice(0, MAX_GENERATED_WORDS);
			} else {
				// Update the display word with the first generated word
				if (words.length > 0) {
					const newWord = words[0];
					displayWord = [
						...newWord.split(""),
						...new Array(
							Math.max(0, MAX_WORD_LENGTH - newWord.length),
						).fill(""),
					].slice(0, MAX_WORD_LENGTH);

					// Update list here, after displayWord is set
					generatedWords = words;

					// Reveal all flaps to show the result
					// Slight delay to allow DOM update if needed, but immediate is usually fine
					setTimeout(() => {
						letterBoxStates = new Array(MAX_WORD_LENGTH).fill(true);
					}, 50);
				}
			}

			hasGenerated = true;
		} catch (error) {
			console.error("Generation failed:", error);
			modelError = error instanceof Error ? error.message : String(error);
			modelStatus = "error";
		} finally {
			isGenerating = false;
			isAppending = false;
			progress = 0;
		}
	}
	function handleClickGenerate() {
		if (modelStatus === "ready" && !isGenerating) {
			generateWords(false);
		}
	}
</script>

<svelte:head>
	<title>ׅ⋆༊. ݁eunomia⊹⋆₊</title>
	<meta name="description" content="maybe words, maybe" />

	<!-- Open Graph -->
	<meta property="og:title" content="eunomia" />
	<meta property="og:description" content="maybe words, maybe" />
	<meta property="og:type" content="website" />
	<meta
		property="og:url"
		content="https://yyuyulm.github.io/word_diffusion/"
	/>
	<meta
		property="og:image"
		content="https://yyuyulm.github.io/word_diffusion/assets/preview.png"
	/>
	<meta property="og:image:type" content="image/png" />
	<meta property="og:image:width" content="1000" />
	<meta property="og:image:height" content="630" />

	<!-- Twitter / X Card -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="eunomia" />
	<meta name="twitter:description" content="maybe words, maybe" />
	<meta
		name="twitter:image"
		content="https://yyuyulm.github.io/word_diffusion/assets/preview.png"
	/>
</svelte:head>

<!-- Debug overlay -->
<DebugOverlay
	{modelStatus}
	{modelError}
	{isGenerating}
	{progress}
	{totalSteps}
	inferenceSteps={actualInferenceSteps}
	{backend}
/>

<main class="container">
	<!-- Hero word with interactive letter boxes - always visible -->
	<div class="hero-word">
		<div class="letter-container">
			{#each wordIndices as i (i)}
				<LetterBox
					letter={displayWord[i]}
					conditionedLetter={conditioningPattern[i]}
					position={i}
					isEditable={!isGenerating}
					onConditionChange={handleConditionChange}
					bind:isOpen={letterBoxStates[i]}
				/>
			{/each}
		</div>
	</div>

	<!-- Remaining words list -->
	<!-- Remaining words list -->
	<WordList words={generatedWords} {isGenerating} {numWords} {isAppending} />

	<!-- Infinite Scroll Trigger -->
	{#if generatedWords.length > 0 && generatedWords.length < MAX_GENERATED_WORDS}
		<div use:infiniteScroll style="height: 20px; width: 100%;"></div>
	{/if}

	<!-- Fixed generate button -->
	<GenerateButton
		{isGenerating}
		{modelStatus}
		{progress}
		{totalSteps}
		onclick={handleClickGenerate}
	/>
</main>

<style>
	:global(html) {
		overflow-y: scroll;
	}

	/* Main container */
	.container {
		width: 100%;
		max-width: 1200px;
		margin: 0 auto;
		padding: var(--spacing-xl);
	}

	/* Hero word display */
	.hero-word {
		text-align: center;
		/* Shift content down by creating uneven padding (top > bottom) */
		padding-top: var(--spacing-3xl);
		padding-bottom: var(--spacing-5xl);

		/* Pull the next element (WordList) up */
		margin-bottom: calc(var(--spacing-2xl) * -1);

		min-height: 50vh;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.letter-container {
		display: inline-flex;
		gap: var(--spacing-sm);
		perspective: 1000px;
		perspective-origin: center center;
	}

	/* Responsive design */
	@media (max-width: 768px) {
		.container {
			padding: var(--spacing-md);
			margin: 0 auto;
		}

		/* Tighter gap to prevent wrapping on small screens */
		.letter-container {
			gap: 0.2rem;
		}

		.hero-word {
			/* Match desktop asymmetry (Top < Bottom) to prevent jump */
			padding-top: var(--spacing-3xl);
			padding-bottom: var(--spacing-5xl);
			min-height: 50vh;
		}
	}
</style>
