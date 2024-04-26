<script lang="ts">
	import { navigating } from '$app/stores';

	let hasRunAnimation = false;

	$: {
		if ($navigating?.from!.url.pathname == '/zoomed-out') {
			hasRunAnimation = true;
		}
	}
</script>

<div>
	<slot hasRunAnimation="{hasRunAnimation}"></slot>
</div>

<style lang="postcss">
</style>
