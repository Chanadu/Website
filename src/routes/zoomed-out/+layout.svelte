<script lang="ts">
	import { onMount } from 'svelte';

	let isReady = false;
	onMount(() => (isReady = true));
</script>

{#if isReady}
	<div class="flex justify-center items-center h-screen max-h-screen">
		<slot />
	</div>
{/if}

<style lang="postcss">
</style>
