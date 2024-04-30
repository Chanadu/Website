<script lang="ts">
	import { onMount } from 'svelte';
	import { expoInOut } from 'svelte/easing';
	import { fly } from 'svelte/transition';

	export let name: String;

	let pageLoadReady = false;
	onMount(() => (pageLoadReady = true));
</script>

{#if pageLoadReady}
	<div
		transition:fly="{{
			delay: 100,
			duration: 600,
			easing: expoInOut,
			y: '-55vh',
			opacity: 1,
		}}"
	>
		<h1 class="sono-400 text-nowrap text-5xl">
			{name}
		</h1>
	</div>
{/if}

<style lang="postcss">
</style>
