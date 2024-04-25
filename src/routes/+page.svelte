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
	<meta name="description" content="Chandu Peddada's Website" />
</svelte:head>

<main class="flex justify-center items-center min-h-[100.1vh]">
	<section class="flex flex-row justify-center items-center">
		<HorizontalBar isLeft="{true}"></HorizontalBar>
		<NameCard {name}></NameCard>
		<HorizontalBar isLeft="{false}" extraDelay="{500}"></HorizontalBar>
	</section>
</main>
<div
	class="absolute top-[55vh] left-[37vw] flex flex-row w-[26vw] justify-around items-center"
>
	<SocialsIcon></SocialsIcon>
	<SocialsIcon></SocialsIcon>
	<SocialsIcon></SocialsIcon>
	<SocialsIcon></SocialsIcon>
	<SocialsIcon></SocialsIcon>
</div>

<style lang="postcss">
</style>
