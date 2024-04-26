<script lang="ts">
	import { goto } from '$app/navigation';

	export let extraClassNames: String;
	export let name: String;

	let hovered = false;
</script>

<button
	class="group min-h-[9rem] min-w-[16rem] select-none transition-all delay-[50ms] hover:-translate-y-2 hover:transform hover:cursor-pointer hover:bg-slate-700 hover:shadow-lg {extraClassNames}"
	on:click="{(_) => {
		goto('/');
	}}"
>
	<div
		class="relative -translate-y-10 opacity-0 transition-all delay-[100ms] group-hover:-translate-y-20 group-hover:opacity-100"
	>
		{name}
	</div>
	<slot />
</button>

<style lang="postcss">
</style>
