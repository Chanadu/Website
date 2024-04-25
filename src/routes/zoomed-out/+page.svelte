<script lang="ts">
	import { quintOut } from 'svelte/easing';
	import { scale } from 'svelte/transition';
	import SmallHomePage from './SmallHomePage.svelte';
	import SmallPagePlaceholder from './SmallPagePlaceholder.svelte';
</script>

<div
	transition:scale="{{
		duration: 500,
		delay: 0,
		opacity: 1,
		start: 9,
		easing: quintOut,
	}}"
>
	<div class="grid grid-cols-3 sm:gap-16 md:gap-24 lg:gap-24">
		{#each { length: 9 } as _, i}
			{#if i == 4}
				<SmallHomePage name="Home Page"></SmallHomePage>
			{:else}
				<SmallPagePlaceholder name="{i + ''}">{i}</SmallPagePlaceholder>
			{/if}
		{/each}
	</div>
</div>

<style lang="postcss">
</style>
