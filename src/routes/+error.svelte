<script lang="ts">
	import { page } from '$app/stores';
</script>

<div class="flex justify-center items-center flex-col">
	<h1 class="text-nowrap text-5xl">{$page.status}: {$page.error?.message}</h1>
	<div class="h-16"></div>
	<a
		class="text-slate-300 appearance-none bg-teal-800 border-2 border-solid border-slate-900 rounded-2xl box-border cursor-pointer inline-block sono-600 text-xl leading-normal m-0 min-h-16 min-w-0 outline-none px-4 py-6 text-center no-underline transition-all duration-300 ease-in-out select-none touch-manipulation w-full will-change-transform disabled:pointer-events-none hover:text-slate-100 hover:bg-teal-600 hover:shadow-lg hover:-translate-y-1 active:shadow-none active:translate-y-0"
		href="/"
	>
		Back Home
	</a>
</div>

<style lang="postcss">
</style>
