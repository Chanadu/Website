<script lang="ts">
	import { onMount } from 'svelte';
	import { expoIn } from 'svelte/easing';
	import { fly } from 'svelte/transition';

	export let isLeft: Boolean;
	export let extraDelay = 0;
	let delay = 600 + extraDelay + 100;

	let pageLoadReady = false;
	onMount(() => (pageLoadReady = true));
</script>

{#if pageLoadReady}
	<div
		class="mx-12 h-2 w-80 rounded-xl bg-text"
		transition:fly="{{
			delay: delay,
			duration: 600,
			easing: expoIn,
			x: 75 * (isLeft ? -1 : 1) + 'vh',
			opacity: 1,
		}}"
	></div>
{/if}

<style lang="postcss">
</style>
