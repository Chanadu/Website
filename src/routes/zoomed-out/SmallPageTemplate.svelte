<script lang="ts">
	export let extraClassNames: String;
	export let name: String;

	let hovered = false;
</script>

<div
	class="group min-h-[9rem] min-w-[16rem] select-none transition-all delay-[50ms] hover:-translate-y-2 hover:transform hover:bg-slate-700 hover:shadow-lg {extraClassNames}"
>
	<div
		class="relative -translate-y-10 opacity-0 transition-all delay-[150ms] group-hover:-translate-y-20 group-hover:opacity-100"
	>
		{name}
	</div>
	<slot />
</div>

<style lang="postcss">
</style>
