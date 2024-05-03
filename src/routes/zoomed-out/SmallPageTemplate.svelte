<script lang="ts">
	export let extraClassNames: String;
	export let name: String;

	let hovered = false;
</script>

<div
	class="group min-h-[9rem] min-w-[16rem] select-none rounded-2xl border-2 border-secondary bg-container transition-all delay-[50ms] ease-in hover:-translate-y-2 hover:transform hover:cursor-pointer hover:border-primary hover:shadow-lg {extraClassNames}"
>
	<div
		class="relative -translate-y-10 opacity-0 transition-all delay-[100ms] group-hover:-translate-y-20 group-hover:opacity-100"
	>
		{name}
	</div>
	<slot />
</div>

<style lang="postcss">
</style>
