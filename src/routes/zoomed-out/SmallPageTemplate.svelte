<script lang="ts">
	export let tooltip: String;
</script>

<div
	class="bg-slate-600 group flex min-h-[9rem] min-w-[16rem] select-none flex-col items-center justify-center rounded-2xl border-2 border-secondary bg-container transition-all ease-in hover:-translate-y-2 hover:transform hover:cursor-pointer hover:border-primary hover:shadow-lg"
>
	<div
		class="absolute -translate-y-10 opacity-0 transition-all delay-[100ms] group-hover:-translate-y-24 group-hover:opacity-100"
	>
		{tooltip}
	</div>
	<slot></slot>
</div>

<style lang="postcss">
</style>
