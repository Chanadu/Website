<script lang="ts">
	import '../app.css';
</script>

<div class="sono-400 m-0 min-h-screen bg-slate-800 text-slate-100">
	<div
		id="main-container"
		class=" mx-auto my-auto max-w-6xl"
	>
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
