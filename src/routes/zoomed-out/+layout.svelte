<script lang="ts">
	import { onMount } from 'svelte';

	let isReady = false;
	onMount(() => (isReady = true));
</script>

{#if isReady}
	<div class="flex h-screen max-h-screen items-center justify-center">
		<slot />
	</div>
{/if}

<style lang="postcss">
</style>
