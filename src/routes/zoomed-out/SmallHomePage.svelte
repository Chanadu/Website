<script lang="ts">
	import SmallPageTemplate from './SmallPageTemplate.svelte';
</script>

<SmallPageTemplate
	classNames="flex flex-col items-center justify-center bg-slate-600"
>
	<div class="h-2"></div>
	<div class="flex flex-row justify-center items-center">
		<div class="w-12 h-1 bg-slate-400 mx-2 rounded-2xl"></div>
		<div class="h-2 w-12 bg-slate-400 rounded-2xl"></div>
		<div class="w-12 h-1 bg-slate-400 mx-2 rounded-2xl"></div>
	</div>
	<div class="h-2"></div>
	<div class="flex flex-row justify-around min-w-12">
		<div class="w-2 h-2 bg-slate-400"></div>
		<div class="w-2 h-2 bg-slate-400"></div>
		<div class="w-2 h-2 bg-slate-400"></div>
	</div>
</SmallPageTemplate>

<style lang="postcss">
</style>
