<script lang="ts">
	import { onMount } from 'svelte';
	import { expoOut } from 'svelte/easing';
	import { scale } from 'svelte/transition';

	let isReady = false;
	onMount(() => (isReady = true));
</script>

{#if isReady}
	<div
		class="flex min-h-screen items-center justify-center"
		transition:scale="{{
			duration: 600,
			delay: 0,
			opacity: 1,
			start: 7,
			easing: expoOut,
		}}"
	>
		<slot />
	</div>
{/if}

<style lang="postcss">
</style>
