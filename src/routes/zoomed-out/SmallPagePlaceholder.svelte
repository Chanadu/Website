<script lang="ts">
	import SmallPageTemplate from './SmallPageTemplate.svelte';

	export let empty = true;
	export let name: String;
</script>

<SmallPageTemplate tooltip="{name}">
	<div>
		{empty ? 'Placeholder' : ''}
	</div>
	<slot></slot>
</SmallPageTemplate>

<style lang="postcss">
</style>
