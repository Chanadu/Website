<script lang="ts">
	export let classNames: String;
	export let name: String;

	let hovered = false;
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
	class="group min-h-[9rem] min-w-[16rem] select-none {classNames} transition-all delay-[50ms] hover:-translate-y-2 hover:transform hover:bg-slate-700 hover:shadow-lg"
	on:mouseenter="{() => {
		hovered = true;
	}}"
	on:mouseleave="{() => {
		hovered = false;
	}}"
>
	<div class="relative top-[-5rem] opacity-0 transition-all delay-[100ms] group-hover:opacity-100">
		{name}
	</div>
	<slot />
</div>

<style lang="postcss">
</style>
