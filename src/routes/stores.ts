import {
	writable
} from "svelte/store";

export const darkState = writable(true);
export const transitionState = writable(-1);