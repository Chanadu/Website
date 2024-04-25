<script lang="ts">
	import SmallPageTemplate from './SmallPageTemplate.svelte';
	export let name: String;
</script>

<SmallPageTemplate
	classNames="flex flex-col items-center justify-center bg-slate-600"
	name="{name}"
>
	<div class="flex flex-row items-center justify-center">
		<div class="mx-2 h-1 w-12 rounded-2xl bg-slate-400"></div>
		<div class="h-2 w-12 rounded-2xl bg-slate-400"></div>
		<div class="mx-2 h-1 w-12 rounded-2xl bg-slate-400"></div>
	</div>
	<div class="h-2"></div>
	<div class="flex min-w-12 flex-row justify-around">
		<div class="h-2 w-2 bg-slate-400"></div>
		<div class="h-2 w-2 bg-slate-400"></div>
		<div class="h-2 w-2 bg-slate-400"></div>
	</div>
</SmallPageTemplate>

<style lang="postcss">
</style>
