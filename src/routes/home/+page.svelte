<script lang="ts">
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import { transitionState } from '../stores';
	import HorizontalBar from './HorizontalBar.svelte';
	import NameCard from './NameCard.svelte';
	import SocialsIcon from './SocialsIcon.svelte';

	let name = 'Chandu Peddada';
	let transitionDelay = 100;
	let transitionDuration = 600;

	onMount(() => {
		window.addEventListener('scroll', scrollEvent);
	});

	function scrollEvent(event: Event) {
		if (window.scrollY > 0) {
			window.scrollTo(0, 0);
		}
		$transitionState = -1;
		goto('/zoomed-out');
	}
</script>

<svelte:head>
	<title>Website</title>
	<meta
		name="description"
		content="Chandu Peddada's Website"
	/>
</svelte:head>

<main class="flex min-h-[100.1vh] flex-col items-center justify-center pb-16">
	<section class="flex flex-row items-center justify-center">
		<HorizontalBar isLeft="{true}"></HorizontalBar>
		<NameCard name="{name}"></NameCard>
		<HorizontalBar
			isLeft="{false}"
			extraDelay="{500}"
		></HorizontalBar>
	</section>
	<div class="relative top-8 flex w-[26vw] flex-row items-center justify-around">
		<SocialsIcon></SocialsIcon>
		<SocialsIcon></SocialsIcon>
		<SocialsIcon></SocialsIcon>
		<SocialsIcon></SocialsIcon>
		<SocialsIcon></SocialsIcon>
	</div>
</main>

<style lang="postcss">
</style>
