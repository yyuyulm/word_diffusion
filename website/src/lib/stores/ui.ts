import { writable } from 'svelte/store';

export const backgroundSeeds = writable<[number, number, number]>([12526, 12427, 12618]);
export const debugShowPaths = writable<boolean>(false); // Skeleton
export const debugShowRibbons = writable<boolean>(true); // Curves
export const debugShowAssets = writable<boolean>(true); // Leaves/Flowers
