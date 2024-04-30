<script lang="ts">
	let isReady = false;
	// onMount(() => {
	// 	isReady = true;
	// });
</script>

{#key isReady}
	<button
		on:click="{() => (isReady = true)}"
		class="min-h-8 min-w-8 bg-accent"
	>
		one
	</button>
	<div>
		<slot></slot>
	</div>
{/key}

<style lang="postcss">
</style>
