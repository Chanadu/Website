<script lang="ts">
	import SmallHomePage from './SmallHomePage.svelte';
	import SmallPageEmpty from './SmallPageEmpty.svelte';
</script>

<div>
	<div class="grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-12 md:gap-16 lg:gap-24">
		{#each { length: 9 } as _, i}
			{#if i == 4}
				<SmallHomePage name="Home Page"></SmallHomePage>
			{:else}
				<SmallPageEmpty name="Coming Soon!"></SmallPageEmpty>
			{/if}
		{/each}
	</div>
</div>

<style lang="postcss">
</style>
