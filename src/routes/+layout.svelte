<script lang="ts">
	import { onMount } from 'svelte';
	import '../app.css';
	import { darkState } from './stores';
	let isMounted = false;

	onMount(() => {
		isMounted = true;

		$darkState ? document.documentElement.classList.add('dark') : document.documentElement.classList.remove('dark');
	});

	$: {
		if (isMounted) {
			$darkState ?
				document.documentElement.classList.add('dark')
			:	document.documentElement.classList.remove('dark');
		}
	}
</script>

<div class="m-0 min-h-screen bg-background text-text">
	<div class="absolute right-24 top-16">
		<label class="inline-flex cursor-pointer items-center">
			<input
				type="checkbox"
				value=""
				class="peer sr-only"
				bind:checked="{$darkState}"
			/>
			<span class=" me-3 text-sm font-medium">Light Mode</span>
			<div
				class="peer relative h-6 w-11 rounded-full bg-primary after:absolute after:start-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-accent after:bg-text after:transition-all after:content-[''] peer-checked:bg-secondary peer-checked:after:translate-x-full peer-checked:after:border-text peer-focus:outline-none peer-focus:ring-4 rtl:peer-checked:after:-translate-x-full"
			></div>
			<span class=" ms-3 text-sm font-medium">Dark Mode</span>
		</label>
	</div>
	<div class=" mx-auto my-auto max-w-6xl">
		<slot></slot>
	</div>
</div>

<style lang="postcss">
	:global(html, body) {
		overflow-y: scroll;
		scrollbar-width: none;
	}

	:global(body::-webkit-scrollbar) {
		width: 0;
		height: 0;
	}
</style>
