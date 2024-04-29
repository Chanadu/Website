<script lang="ts">
	import '../app.css';
</script>

<div class="bg-background text-text m-0 min-h-screen">
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
