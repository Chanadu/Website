<script lang="ts">
	import { onMount } from 'svelte';
	import { expoOut } from 'svelte/easing';
	import { scale } from 'svelte/transition';
	import { transitionState } from '../stores';

	onMount(() => {
		$transitionState = 1;
	});
</script>

{#if $transitionState == 1}
	<div
		class="flex min-h-screen items-center justify-center"
		transition:scale="{{
			duration: 400,
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
