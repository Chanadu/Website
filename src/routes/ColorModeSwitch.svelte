<script lang="ts">
	import { darkState } from './stores';
</script>

<div class="absolute right-24 top-16">
	<label class="inline-flex cursor-pointer items-center">
		<input
			type="checkbox"
			value=""
			class="peer sr-only"
			bind:checked="{$darkState}"
		/>
		<img
			src="{$darkState ? 'images/light-mode-dark.svg' : 'images/light-mode-light.svg'}"
			alt="Light Mode"
			class="m-4 h-8 w-8"
		/>
		<!-- <span class=" me-3 text-sm font-medium">Light Mode</span> -->
		<div
			class="peer relative h-6 w-11 rounded-full bg-primary after:absolute after:start-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-accent after:bg-text after:transition-all after:content-[''] peer-checked:bg-secondary peer-checked:after:translate-x-full peer-checked:after:border-text peer-focus:outline-none peer-focus:ring-4 rtl:peer-checked:after:-translate-x-full"
		></div>
		<img
			src="{$darkState ? 'images/dark-mode-dark.svg' : 'images/dark-mode-light.svg'}"
			alt="Dark Mode"
			class="m-4 h-10 w-10"
		/>
	</label>
</div>

<style lang="postcss">
</style>
