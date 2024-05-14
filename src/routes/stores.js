import {
	writable
} from "svelte/store";

export const darkState = writable(false);
export const transitionState = writable(-1);