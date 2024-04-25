<script lang="ts">
	import SmallPageTemplate from './SmallPageTemplate.svelte';

	export let empty = true;
	export let name: String;
</script>

<SmallPageTemplate
	extraClassNames="flex flex-col items-center justify-center bg-slate-600"
	name="{name}"
>
	<div>
		{empty ? 'Placeholder' : ''}
	</div>
</SmallPageTemplate>

<style lang="postcss">
</style>
