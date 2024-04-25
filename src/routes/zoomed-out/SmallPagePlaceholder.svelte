<script lang="ts">
	import SmallPageTemplate from './SmallPageTemplate.svelte';

	export let empty = true;
	export let name: String;
</script>

<SmallPageTemplate
	classNames="flex flex-col items-center justify-center bg-slate-600"
	name="{name}"
>
	{#if empty}
		<span>Placeholder</span>
	{/if}
</SmallPageTemplate>

<style lang="postcss">
</style>
