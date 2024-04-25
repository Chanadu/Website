<script lang="ts">
	import { quintOut } from 'svelte/easing';
	import { scale } from 'svelte/transition';
	import SmallHomePage from './SmallHomePage.svelte';
	import SmallPagePlaceholder from './SmallPagePlaceholder.svelte';

	let isMouseDown = false;
	let startX = 0;
	let startY = 0;
	let currentX = 0;
	let currentY = 0;

	$: deltaX = startX - currentX;
	$: deltaY = startY - currentY;
	$: {
		deltaX = clamp(deltaX, -50, 50);
		deltaY = clamp(deltaY, -50, 50);
		console.log(deltaX, deltaY);
	}

	function clamp(num: number, min: number, max: number) {
		return num <= min ? min : num >= max ? max : num;
	}
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
	on:mousedown="{(e) => {
		startX = e.clientX;
		startY = e.clientY;
		isMouseDown = true;
	}}"
	on:mouseup="{(e) => {
		startX = e.clientX;
		startY = e.clientY;
		currentX = e.clientX;
		currentY = e.clientY;
		isMouseDown = false;
	}}"
	on:mouseleave="{(e) => {
		isMouseDown = false;
	}}"
	on:mouseenter="{(e) => {
		isMouseDown = false;
	}}"
	on:mousemove="{(e) => {
		// console.log(isMouseDown);
		if (isMouseDown) {
			currentX = e.clientX;
			currentY = e.clientY;
		}
	}}"
	class="absolute min-h-[100vh] min-w-[100vw] border z-10"
></div>
<div
	transition:scale="{{
		duration: 500,
		delay: 0,
		opacity: 1,
		start: 9,
		easing: quintOut,
	}}"
	class="relative"
	style="left: {-deltaX / 5}%; top: {-deltaY / 5}%;"
>
	<div class="grid grid-cols-3 lg:gap-24 md:gap-24 sm:gap-16">
		{#each { length: 9 } as _, i}
			{#if i == 4}
				<SmallHomePage></SmallHomePage>
			{:else}
				<SmallPagePlaceholder>{i}</SmallPagePlaceholder>
			{/if}
		{/each}
	</div>
</div>

<style lang="postcss">
</style>
