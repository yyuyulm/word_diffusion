<script lang="ts">
    import { onMount } from "svelte";
    import { base } from "$app/paths";
    import {
        backgroundSeeds,
        debugShowPaths,
        debugShowRibbons,
        debugShowAssets,
    } from "$lib/stores/ui";

    // Asset Configuration
    const ASSETS = {
        roots: [`${base}/assets/1767527.svg`],
        branches: [
            `${base}/assets/309100.svg`,
            `${base}/assets/436598.svg`,
            `${base}/assets/1874436.svg`,
            `${base}/assets/1437380.svg`,
        ],
        tips: [`${base}/assets/47095.svg`], // Also nested circles
    };

    let width = $state(0);
    let height = $state(0);

    // Store elements as separate layers: [Bouquet1, Bouquet2, Bouquet3, Noise]
    let bouquetElements: any[][] = $state([[], [], [], []]);
    let previousSeeds = [-1, -1, -1];

    // L-System Rule Sets
    const RULE_SETS = [
        // Classic
        {
            X: "F+[[X]-X]-F[-FX]+X",
            F: "FF",
        },
        // Bushier
        {
            X: "F[+X]F[-X]+X",
            F: "FF",
        },
        // Twisty
        {
            X: "F-[[X]+X]+F[+FX]-X",
            F: "FF",
        },
        // Sparse
        {
            X: "F+[[X]-X]-F[-FX]+X",
            F: "FFF", // Longer stems
        },
    ];

    const angle = 25; // Default fallback
    const initialLength = 15; // Default fallback

    interface GeneratedElement {
        type: "path" | "circle" | "image" | "group" | "ribbon";
        d?: string; // for paths
        cx?: number; // for circles
        cy?: number;
        r?: number;
        href?: string; // for images
        transform?: string;
        opacity?: number;
        stroke?: string;
        fill?: string;
        strokeWidth?: number;
        delay?: number; // Animation delay
        originX?: number; // Transform origin for animation
        originY?: number;
    }

    interface Point {
        x: number;
        y: number;
        depth: number;
    }

    function generateLSystem(
        axiom: string,
        rules: Record<string, string>,
        iter: number,
    ): string {
        let current = axiom;
        for (let i = 0; i < iter; i++) {
            let next = "";
            for (const char of current) {
                next += rules[char] || char;
            }
            current = next;
        }
        return current;
    }

    // Simple PRNG (Mulberry32)
    function createRandom(seed: number) {
        return function () {
            let t = (seed += 0x6d2b79f5);
            t = Math.imul(t ^ (t >>> 15), t | 1);
            t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
            return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
        };
    }

    onMount(() => {
        const updateSize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            // Force regeneration of all on size change
            previousSeeds = [-1, -1, -1];
        };

        updateSize();
        window.addEventListener("resize", updateSize);
        return () => window.removeEventListener("resize", updateSize);
    });

    // React to seed or dimension changes
    $effect(() => {
        if (width > 0 && height > 0) {
            updateBouquets($backgroundSeeds);
        }
    });

    function getCorners() {
        // Push roots outward on smaller screens to clear center
        const xOffset = Math.max(0, (1400 - width) * 0.1);

        return [
            {
                x: -xOffset,
                y: height,
                angleBase: -65,
                color: "#999",
                angleMin: 20,
                angleMax: 35,
                iterations: 4,
            },
            {
                x: width + xOffset,
                y: height,
                angleBase: -150,
                color: "#999",
                angleMin: 20,
                angleMax: 35,
                iterations: 4,
            },
            {
                x: width * 0.2,
                y: -60,
                angleBase: 20,
                color: "#999",
                angleMin: 15,
                angleMax: 25,
                iterations: 3,
            },
        ];
    }

    // Cubic B-Spline implementation
    // The points are treated as Control Points for a Uniform Cubic B-Spline.
    // The curve approximates the points (does not pass through them), ensuring C2 continuity (very smooth).
    function getCurvePath(points: Point[]) {
        if (points.length < 2) return "";

        // 1. Filter duplicates (User suspected double counting causing straight segments)
        // This is critical for B-Splines, as coincident control points clamp the curve.
        const pts = [points[0]];
        for (let i = 1; i < points.length; i++) {
            const dx = points[i].x - pts[pts.length - 1].x;
            const dy = points[i].y - pts[pts.length - 1].y;
            // Filter if closer than 1px squared
            if (dx * dx + dy * dy > 1.0) pts.push(points[i]);
        }

        if (pts.length < 2) return "";
        if (pts.length === 2)
            return `M ${pts[0].x} ${pts[0].y} L ${pts[1].x} ${pts[1].y}`;

        // Duplicate endpoints to clamp the B-spline to the start/end
        // P => [p0, p0, ... points ..., pn, pn]
        // Adding 2 duplicates at each end clamps the BSpline to the endpoints
        const P = [
            pts[0],
            pts[0],
            ...pts,
            pts[pts.length - 1],
            pts[pts.length - 1],
        ];

        let d = "";

        // Iterate through spans defined by 4 control points
        for (let i = 0; i < P.length - 3; i++) {
            const S0 = P[i];
            const S1 = P[i + 1];
            const S2 = P[i + 2];
            const S3 = P[i + 3];

            // Convert B-Spline basis to Bezier basis for SVG
            // Formula from: http://www.pixelplus.com.cn/upload/202102/2021020315250085.pdf etc

            // Start Point (B0)
            const x0 = (S0.x + 4 * S1.x + S2.x) / 6;
            const y0 = (S0.y + 4 * S1.y + S2.y) / 6;

            // Control Point 1 (B1)
            const x1 = (4 * S1.x + 2 * S2.x) / 6;
            const y1 = (4 * S1.y + 2 * S2.y) / 6;

            // Control Point 2 (B2)
            const x2 = (2 * S1.x + 4 * S2.x) / 6;
            const y2 = (2 * S1.y + 4 * S2.y) / 6;

            // End Point (B3)
            const x3 = (S1.x + 4 * S2.x + S3.x) / 6;
            const y3 = (S1.y + 4 * S2.y + S3.y) / 6;

            if (i === 0) {
                d += `M ${x0} ${y0}`;
            }

            d += ` C ${x1} ${y1} ${x2} ${y2} ${x3} ${y3}`;
        }

        return d;
    }

    // Pre-process points to exaggerate curvature away from the central axis
    function exaggerateCurve(points: Point[], scale: number): Point[] {
        if (points.length < 3) return points;

        const pStart = points[0];
        const pEnd = points[points.length - 1];

        const dx = pEnd.x - pStart.x;
        const dy = pEnd.y - pStart.y;
        const lenSq = dx * dx + dy * dy;
        const len = Math.sqrt(lenSq);

        if (len < 0.001) return points; // Too short to exaggerate

        // Normalized axis vector
        const ux = dx / len;
        const uy = dy / len;

        return points.map((p) => {
            // Vector from Start to Point
            const vx = p.x - pStart.x;
            const vy = p.y - pStart.y;

            // Project onto axis (dot product)
            const t = vx * ux + vy * uy;

            // Point on axis closest to p
            const axisX = pStart.x + t * ux;
            const axisY = pStart.y + t * uy;

            // Vector from axis to p (perpendicular component)
            const perpX = p.x - axisX;
            const perpY = p.y - axisY;

            // Scale the perpendicular component (Exaggerate curve)
            return {
                x: axisX + perpX * scale,
                y: axisY + perpY * scale,
                depth: p.depth,
            };
        });
    }

    // Simplify path by removing collinear points
    // This removes intermediate points on straight lines, leaving only the turning points.
    // This allows the B-Spline to form a single smooth curve between turns.
    function simplifyPath(points: Point[]): Point[] {
        if (points.length < 3) return points;
        const result = [points[0]];

        for (let i = 1; i < points.length - 1; i++) {
            const prev = result[result.length - 1];
            const curr = points[i];
            const next = points[i + 1];

            const dx1 = curr.x - prev.x;
            const dy1 = curr.y - prev.y;
            const dx2 = next.x - curr.x;
            const dy2 = next.y - curr.y;

            // Cross product: x1*y2 - y1*x2 determines if vectors are parallel
            const cross = dx1 * dy2 - dy1 * dx2;

            // If cross product is significant, direction changed. Keep the point.
            if (Math.abs(cross) > 0.1) {
                result.push(curr);
            }
        }
        result.push(points[points.length - 1]);
        return result;
    }

    // Generate a randomized Ribbon from a base path
    function generateRibbonFromPath(
        basePath: Point[],
        seed: number,
        color: string,
        visitedSegments: Set<string>,
        baseDelay: number,
    ): GeneratedElement[] {
        const random = createRandom(seed);
        const elements: GeneratedElement[] = [];

        // 1. Simplify: Remove straight-line intermediates
        const simplified = simplifyPath(basePath);
        const root = simplified[0]; // Start point

        // 2. Dual Curve Strategy for Variable Width
        // Inner Curve (0.7x exaggeration)
        const pointsA = exaggerateCurve(simplified, 1.45);
        const pathStrA = getCurvePath(pointsA);

        // Outer Curve (0.8x exaggeration), reversed direction
        const pointsB = exaggerateCurve(simplified, 1.4).reverse();
        let pathStrB = getCurvePath(pointsB);

        // Replace the starting 'M' of the second path with 'L' to draw a line to it
        if (pathStrB.startsWith("M")) {
            pathStrB = "L" + pathStrB.substring(1);
        }

        elements.push({
            type: "ribbon",
            d: `${pathStrA} ${pathStrB} Z`, // Closed shape
            stroke: "none", // No stroke
            fill: color, // Filled shape
            strokeWidth: 0,
            opacity: 0.5 + random() * 0.3, // Slightly higher alpha since it's a fill
            delay: baseDelay, // Structural delay only, no random jitter
            originX: root.x,
            originY: root.y,
        });

        // 3. Asset Placement based on Simplified Curve
        const placementPoints = exaggerateCurve(simplified, 1);

        // Asset Spawning Logic:
        // Assets are placed at the MIDPOINT of each segment in the simplified path.
        // The 'simplified' path consists of the "turning points" (joints).
        // scale is based on the length of the straight line connecting these joints.
        for (let i = 0; i < simplified.length - 1; i++) {
            const p1 = simplified[i];
            const p2 = simplified[i + 1];

            // Deduplication Key: Identify this geometric segment
            const key = `${Math.round(p1.x)}_${Math.round(p1.y)}_${Math.round(p2.x)}_${Math.round(p2.y)}`;

            // Only place asset if we haven't processed this segment yet (even if other ribbons duplicate it)
            if (!visitedSegments.has(key)) {
                visitedSegments.add(key);

                // Calculate Metrics on Simplified Segment (Length)
                const dx = p2.x - p1.x;
                const dy = p2.y - p1.y;
                const segLen = Math.sqrt(dx * dx + dy * dy);

                // Only scale if segment is significant
                if (segLen > 5) {
                    const pp1 = placementPoints[i];
                    const pp2 = placementPoints[i + 1];
                    const midX = (pp1.x + pp2.x) / 2;
                    const midY = (pp1.y + pp2.y) / 2;

                    // Align roughly with curve
                    const angle =
                        (Math.atan2(pp2.y - pp1.y, pp2.x - pp1.x) * 180) /
                        Math.PI;

                    // Scale based on segment length (requested logic)
                    // Longer segment = larger asset
                    const scale = Math.min(1.0, Math.max(0.3, segLen / 60));

                    // Select Asset
                    // Use branches/leaves assets
                    const asset =
                        ASSETS.branches[
                            Math.floor(random() * ASSETS.branches.length)
                        ];
                    const rot =
                        angle +
                        (random() > 0.5 ? 45 : -45) +
                        (random() - 0.5) * 20;

                    elements.push({
                        type: "image",
                        href: asset,
                        transform: `translate(${midX}, ${midY}) rotate(${rot}) scale(${scale}) translate(-150, -150)`,
                        opacity: 0.7,
                        delay: pp1.depth * 100, // Assets stay on slower 100ms/depth pacing
                    });
                }
            }
        }

        return elements;
    }

    // Helper to generate nested circles
    function createNestedCirclesInner(
        newElements: GeneratedElement[],
        x: number,
        y: number,
        random: () => number,
        delay: number,
        scaleVal = 1,
    ) {
        const num = 2 + Math.floor(random() * 2);
        for (let i = 0; i < num; i++) {
            newElements.push({
                type: "circle",
                cx: x,
                cy: y,
                r: (5 + i * 8 + random() * 10) * scaleVal,
                stroke: "#aaa",
                strokeWidth: random() > 0.5 ? 1.5 : 0.8,
                fill: "none",
                opacity: 0.6,
                delay: delay + i * 100,
            });
        }
    }

    const DENSITY = 0.1; // Performance: Only render a fraction of the potential elements

    function generateBouquet(index: number, seed: number): GeneratedElement[] {
        const elements: GeneratedElement[] = [];
        const random = createRandom(seed);
        const corner = getCorners()[index];

        // NEW: Horizontal scaling for bottom bouquets (0 and 1) to clear center space
        // Scale down to 0.6 at narrow width (e.g. 800px), 1.0 at 1400px+
        const hScale =
            index < 2 && width > 0
                ? Math.min(1.0, Math.max(0.2, width / 1400))
                : 1.0;

        // Helper to project logical (L-system) coordinates to screen space
        // Scales x-offset from root, preserving absolute y
        const toScreen = (lx: number, ly: number) => ({
            x: corner.x + (lx - corner.x) * hScale,
            y: ly,
        });

        // Randomize parameters
        const rules = RULE_SETS[Math.floor(random() * RULE_SETS.length)];
        const angle =
            corner.angleMin + random() * (corner.angleMax - corner.angleMin);
        const baseLength = 12 + random() * 8;
        const iterations = corner.iterations;

        const vineString = generateLSystem("X", rules, iterations);

        // Logical Coordinates (L-System Calculation Space)
        let x = corner.x;
        let y = corner.y;
        let dir = corner.angleBase;
        let currentDepth = 0;

        const stack: { x: number; y: number; dir: number; depth: number }[] =
            [];

        // Screen Coordinates (Rendering Space)
        const rootScreen = toScreen(x, y);
        let currentPath: Point[] = [
            { x: rootScreen.x, y: rootScreen.y, depth: 0 },
        ];
        const pathStack: Point[][] = [];
        const visitedSegments = new Set<string>(); // Track segments for unique asset placement

        const depthDelay = 100;

        // Root - Always keep
        elements.push({
            type: "image",
            href: ASSETS.roots[0],
            transform: `translate(${rootScreen.x}, ${rootScreen.y}) scale(1.0) translate(-150, -300)`,
            opacity: 0.3,
            delay: 0,
        } as any);

        for (let i = 0; i < vineString.length; i++) {
            const char = vineString[i];
            const currentDelay = currentDepth * depthDelay;

            if (char === "F") {
                const len = baseLength * (0.8 + random() * 0.4);
                const rad = (dir * Math.PI) / 180;

                // Calculate Logical Next
                const nx = x + Math.cos(rad) * len;
                const ny = y + Math.sin(rad) * len;

                // Calculate Screen Positions for Rendering
                const screenPrev = toScreen(x, y);
                const screenNext = toScreen(nx, ny);

                // 1. Add point to CURRENT path (Screen Space)
                currentPath.push({
                    x: screenNext.x,
                    y: screenNext.y,
                    depth: currentDepth,
                });

                // 2. Add Skeleton Path segment (Debug Only)
                elements.push({
                    type: "path",
                    d: `M ${screenPrev.x} ${screenPrev.y} L ${screenNext.x} ${screenNext.y}`,
                    stroke: corner.color,
                    strokeWidth: 0.5,
                    fill: "none",
                    opacity: 0.3,
                    delay: currentDelay,
                });

                x = nx;
                y = ny;
                currentDepth += 0.5;
            } else if (char === "+") {
                dir += angle;
            } else if (char === "-") {
                dir -= angle;
            } else if (char === "[") {
                // BRANCH START: Save state AND copy current path history
                stack.push({ x, y, dir, depth: currentDepth });
                pathStack.push([...currentPath]); // Clone path

                // Prune Nested Circles
                if (random() < 0.3 * DENSITY) {
                    const s = toScreen(x, y);
                    createNestedCirclesInner(
                        elements,
                        s.x,
                        s.y,
                        random,
                        currentDelay,
                        0.5,
                    );
                }
                currentDepth += 1;
            } else if (char === "]") {
                // BRANCH END: Treat this as a "Tip" -> Generate Ribbon
                // Prune Ribbon Strands to reduce DOM load
                if (currentPath.length > 3 && random() < DENSITY) {
                    elements.push(
                        ...generateRibbonFromPath(
                            currentPath,
                            random() * 10000,
                            "#777",
                            visitedSegments,
                            currentDepth * 50, // FASTER pacing for ribbons (was depthDelay=100)
                        ),
                    );
                }

                // Prune Tip Assets
                if (random() < 0.4 * DENSITY) {
                    const s = toScreen(x, y);
                    if (random() < 0.5) {
                        const tipAsset = ASSETS.tips[0];
                        const scale = 0.3 + random() * 0.2;
                        const rot = dir - 90;
                        elements.push({
                            type: "image",
                            href: tipAsset,
                            transform: `translate(${s.x}, ${s.y}) rotate(${rot}) scale(${scale}) translate(-150, -150)`,
                            opacity: 0.4,
                            delay: currentDelay,
                        } as any);
                    } else {
                        createNestedCirclesInner(
                            elements,
                            s.x,
                            s.y,
                            random,
                            currentDelay,
                            0.6,
                        );
                    }
                }

                // RESTORE STATE
                const state = stack.pop();
                const preservedPath = pathStack.pop();
                if (state && preservedPath) {
                    x = state.x;
                    y = state.y;
                    dir = state.dir;
                    currentDepth = state.depth;
                    // Restore path history to what it was before this branch
                    currentPath = preservedPath;
                }
            }
        }

        // Handle end of main trunk if it didn't end with ']'
        if (currentPath.length > 3 && random() < DENSITY) {
            elements.push(
                ...generateRibbonFromPath(
                    currentPath,
                    random() * 10000,
                    "#777",
                    visitedSegments,
                    currentDepth * 50, // FASTER pacing for ribbons (was depthDelay=100)
                ),
            );
        }

        return elements;
    }

    function generateNoise(seed: number): GeneratedElement[] {
        const elements: GeneratedElement[] = [];
        const random = createRandom(seed);
        for (let k = 0; k < 5; k++) {
            const cx = random() * width;
            const cy = random() * height;
            createNestedCirclesInner(
                elements,
                cx,
                cy,
                random,
                k * 200,
                1.5 + random(),
            );
        }
        return elements;
    }

    function updateBouquets(currentSeeds: [number, number, number]) {
        // 1. Check each bouquet seed
        for (let i = 0; i < 3; i++) {
            if (currentSeeds[i] !== previousSeeds[i]) {
                // Regenerate Only this bouquet
                bouquetElements[i] = generateBouquet(i, currentSeeds[i]);
                previousSeeds[i] = currentSeeds[i];
            }
        }

        // 2. Initial Noise Generation (once, or if reseeding all)
        if (bouquetElements[3].length === 0) {
            bouquetElements[3] = generateNoise(currentSeeds[0]);
        }
    }
</script>

<div class="vector-bg">
    <svg {width} {height}>
        {#each bouquetElements as group}
            {#each group as el}
                {#if el.type === "path"}
                    <!-- Skeleton: Debug Only -->
                    {#if $debugShowPaths}
                        <path
                            d={el.d}
                            stroke={el.stroke}
                            stroke-width={el.strokeWidth}
                            fill={el.fill}
                            transform={el.transform}
                            opacity={el.opacity}
                        />
                    {/if}
                {:else if el.type === "ribbon"}
                    <!-- Ribbon: Decorative Asset -->
                    {#if $debugShowRibbons}
                        <!-- Wrap in group for pop-in animation without overriding internal opacity -->
                        <g
                            class="ribbon-pop"
                            style="animation-delay: {el.delay}ms; transform-origin: {el.originX}px {el.originY}px; transform-box: view-box"
                        >
                            <path
                                d={el.d}
                                stroke={el.stroke}
                                stroke-width={el.strokeWidth}
                                fill={el.fill}
                                transform={el.transform}
                                opacity={el.opacity}
                            />
                        </g>
                    {/if}
                {:else if $debugShowAssets}
                    <!-- Leaves/Circles: Decorative Asset -->
                    {#if el.type === "circle"}
                        <circle
                            cx={el.cx}
                            cy={el.cy}
                            r={el.r}
                            stroke={el.stroke}
                            stroke-width={el.strokeWidth}
                            fill={el.fill}
                            opacity={el.opacity}
                            class="pop"
                            style="animation-delay: {el.delay}ms"
                        />
                    {:else if el.type === "image"}
                        <g transform={el.transform} opacity={el.opacity}>
                            <image
                                href={el.href}
                                width="300"
                                height="300"
                                class="pop"
                                style="animation-delay: {el.delay}ms"
                            />
                        </g>
                    {/if}
                {/if}
            {/each}
        {/each}
    </svg>
</div>

<style>
    .vector-bg {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        z-index: 50; /* Top layer */
        pointer-events: none; /* Click-through */
        overflow: hidden;
        mix-blend-mode: multiply; /* Darken underlying content */
    }

    svg {
        width: 100%;
        height: 100%;
    }

    /* Fix transform origin for scaling elements */
    svg * {
        transform-box: fill-box;
        transform-origin: center;
    }

    .pop {
        animation: pop 1.6s cubic-bezier(0.54, 1.36, 0.84, 1) forwards;
        transform: scale(0); /* Start invisible */
    }

    /* Ribbon Pop in: Smooth, no overshoot */
    .ribbon-pop {
        animation: ribbon-in 1s ease-out forwards;
        transform: scale(0.7); /* Start slightly smaller */
        opacity: 0;
    }

    @keyframes pop {
        0% {
            transform: scale(0);
        }
        100% {
            transform: scale(1);
        }
    }

    @keyframes ribbon-in {
        0% {
            transform: scale(0.8);
            opacity: 0;
        }
        100% {
            transform: scale(1);
            opacity: 1;
        }
    }
</style>
