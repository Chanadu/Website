<script lang="ts">
	import { onMount } from 'svelte';
	import { circIn } from 'svelte/easing';
	import { fly } from 'svelte/transition';

	export let isLeft: Boolean;
	export let extraDelay = 0;
	let delay = 600 + extraDelay + 100;

	let pageLoadReady = false;
	onMount(() => (pageLoadReady = true));
</script>

{#if pageLoadReady}
	<div
		class="w-80 h-3 bg-slate-100 mx-4 rounded-xl"
		transition:fly="{{
			delay: delay,
			duration: 600,
			easing: circIn,
			x: 75 * (isLeft ? -1 : 1) + 'vh',
			opacity: 1,
		}}"
	></div>
{/if}

<style lang="postcss">
</style>
