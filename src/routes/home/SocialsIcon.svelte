<script>
	import { onMount } from 'svelte';
	import { linear } from 'svelte/easing';
	import { slide } from 'svelte/transition';

	let pageLoadReady = false;
	onMount(() => (pageLoadReady = true));
</script>

{#if pageLoadReady}
	<a href="https://www.github.com/Chanadu">
		<img
			class="flex h-12 w-12 cursor-pointer items-center justify-center"
			transition:slide="{{
				delay: 2000,
				duration: 400,
				easing: linear,
				axis: 'y',
			}}"
			alt="Social Icon"
			src="github-mark-white.svg"
		/>
	</a>
{/if}

<style lang="postcss">
</style>
