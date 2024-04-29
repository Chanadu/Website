<script lang="ts">
	import { onMount } from 'svelte';

	let isReady = false;
	onMount(() => (isReady = true));
</script>

{#if isReady}
	<div class="flex min-h-screen items-center justify-center pb-[8vh]">
		<slot />
	</div>
{/if}

<style lang="postcss">
</style>
