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
