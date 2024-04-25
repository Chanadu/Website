<script lang="ts">
	import { onMount } from 'svelte';
	import { circIn } from 'svelte/easing';
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
			easing: circIn,
			y: '-55vh',
			opacity: 1,
		}}"
	>
		<h1 class="text-nowrap text-5xl sono-400">
			{name}
		</h1>
	</div>
{/if}

<style lang="postcss">
</style>
