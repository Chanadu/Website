<script lang="ts">
	export let tooltip: String;
</script>

<div
	class="group flex min-h-[9rem] min-w-[16rem] select-none flex-col items-center justify-center rounded-2xl border-2 border-secondary bg-container transition-transform ease-in hover:-translate-y-2 hover:scale-105 hover:transform hover:cursor-pointer hover:border-primary hover:shadow-lg active:scale-95 sm:min-h-[calc(9*.7rem)] sm:min-w-[calc(16*.7rem)] md:min-h-[calc(9*.8rem)] md:min-w-[calc(16*.8rem)] lg:min-h-[9rem] lg:min-w-[16rem]"
>
	<div
		class="absolute -translate-y-10 opacity-0 transition delay-[100ms] group-hover:-translate-y-24 group-hover:opacity-100"
	>
		{tooltip}
	</div>
	<slot></slot>
</div>

<style lang="postcss">
</style>
