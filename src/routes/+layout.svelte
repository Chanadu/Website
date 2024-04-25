<script lang="ts">
	import '../app.css';
</script>

<div class="m-0 min-h-screen bg-slate-800 text-white">
	<div id="main-container" class=" mx-auto max-w-6xl my-auto">
		<slot />
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
	:global(.sono-400) {
		font-family: 'Sono', monospace;
		font-optical-sizing: auto;
		font-weight: 400;
		font-style: normal;
		font-variation-settings: 'MONO' 1;
	}
	:global(.sono-600) {
		font-family: 'Sono', monospace;
		font-optical-sizing: auto;
		font-weight: 600;
		font-style: normal;
		font-variation-settings: 'MONO' 1;
	}
	:global(.sono-800) {
		font-family: 'Sono', monospace;
		font-optical-sizing: auto;
		font-weight: 800;
		font-style: normal;
		font-variation-settings: 'MONO' 1;
	}
</style>
