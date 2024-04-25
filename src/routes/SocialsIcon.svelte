<script lang="ts">
	import { onMount } from 'svelte';
	import { linear } from 'svelte/easing';
	import { slide } from 'svelte/transition';

	let pageLoadReady = false;
	onMount(() => (pageLoadReady = true));
</script>

{#if pageLoadReady}
	<div
		class="border w-12 h-12 flex justify-center items-center"
		transition:slide="{{
			delay: 2000,
			duration: 400,
			easing: linear,
			axis: 'y',
		}}"
	></div>
{/if}

<style lang="postcss">
</style>
