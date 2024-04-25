<script lang="ts">
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import HorizontalBar from './HorizontalBar.svelte';
	import NameCard from './NameCard.svelte';
	import SocialsIcon from './SocialsIcon.svelte';

	let name = 'Chandu Peddada';
	onMount(() => {
		window.addEventListener('scroll', scrollEvent);
	});

	function scrollEvent(event: Event) {
		goto('/zoomed-out');
		if (window.scrollY > 0) {
			window.scrollTo(0, 0);
		}
	}
</script>

<svelte:head>
	<title>Website</title>
	<meta
		name="description"
		content="Chandu Peddada's Website"
	/>
</svelte:head>

<main class="flex min-h-[100.1vh] items-center justify-center">
	<section class="flex flex-row items-center justify-center">
		<HorizontalBar isLeft="{true}"></HorizontalBar>
		<NameCard name="{name}"></NameCard>
		<HorizontalBar
			isLeft="{false}"
			extraDelay="{500}"
		></HorizontalBar>
	</section>
</main>
<div class="absolute left-[37vw] top-[55vh] flex w-[26vw] flex-row items-center justify-around">
	<SocialsIcon></SocialsIcon>
	<SocialsIcon></SocialsIcon>
	<SocialsIcon></SocialsIcon>
	<SocialsIcon></SocialsIcon>
	<SocialsIcon></SocialsIcon>
</div>

<style lang="postcss">
</style>
