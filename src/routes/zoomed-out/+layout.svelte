<script lang="ts">
	import { onMount } from 'svelte';
	import { expoOut } from 'svelte/easing';
	import { scale } from 'svelte/transition';
	import { transitionState } from '../stores';

	onMount(() => {
		$transitionState = 1;
	});
	$: {
		console.log($transitionState);
	}
	function setTransitionState(i: number) {
		setTimeout(() => {
			$transitionState = i;
		}, 600);
	}
</script>

{#if $transitionState == 1}
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
{:else if $transitionState == 2}
	<!-- {($transitionState = -1)} -->
	<div
		class="flex min-h-screen items-center justify-center"
		out:scale="{{
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
