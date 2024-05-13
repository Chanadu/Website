<script lang="ts">
	import { goto, preloadData } from '$app/navigation';
	import { transitionState } from '../stores';
	import SmallPageTemplate from './SmallPageTemplate.svelte';
	export let name: String;
</script>

<button
	on:click="{(_) => {
		preloadData('/home');
		$transitionState = -1;
		setTimeout(() => {
			console.log('Timeout Finished');
			goto('/home');
		}, 200);
	}}"
>
	<SmallPageTemplate tooltip="{name}">
		<div class="h-2"></div>
		<div class="flex flex-row items-center justify-center">
			<div class="mx-2 h-1 w-12 rounded-2xl bg-accent"></div>
			<div class="bg-slate-400 h-2 w-12 rounded-2xl bg-accent"></div>
			<div class="bg-slate-400 mx-2 h-1 w-12 rounded-2xl bg-accent"></div>
		</div>
		<div class="h-2"></div>
		<div class="flex min-w-12 flex-row justify-around bg-accent">
			<div class="h-2 w-2 bg-accent"></div>
			<div class="h-2 w-2 bg-accent"></div>
			<div class="h-2 w-2 bg-accent"></div>
		</div>
	</SmallPageTemplate>
</button>

<style lang="postcss">
</style>
