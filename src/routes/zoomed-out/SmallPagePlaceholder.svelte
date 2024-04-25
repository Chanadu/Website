<script lang="ts">
	import SmallPageTemplate from './SmallPageTemplate.svelte';

	export let empty = true;
</script>

<SmallPageTemplate
	classNames="flex flex-col items-center justify-center bg-slate-600"
>
	{#if empty}
		<div class="text-black">Placeholder</div>
	{/if}
	<slot />
</SmallPageTemplate>

<style lang="postcss">
</style>
