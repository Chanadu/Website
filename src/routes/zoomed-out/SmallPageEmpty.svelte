<script lang="ts">
	import SmallPageTemplate from './SmallPageTemplate.svelte';

	export let name: String;
</script>

<SmallPageTemplate tooltip="{name}">...</SmallPageTemplate>

<style lang="postcss">
</style>
