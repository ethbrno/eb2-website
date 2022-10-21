<script>
	import { base } from '$app/paths';
	import { onMount } from 'svelte';
	import snarkdown from 'snarkdown';
	export let data;
	onMount(async () => {
		const response = await fetch(`${base}/hacker-manual.md`);
		const result = await response.text();
		data.content = await snarkdown(result);
		//console.log(data.contributors);
	});
</script>

<section class="text-white bg-black body-font">
	<div class="container mx-auto py-12 md:py-24 xl:max-w-screen-xl md:px-0 px-4">
		<div class="[&_h1]:header [&_h2]:subhead [&_li]:list [&_h3]:font-bold">
			{@html data.content}
		</div>
	</div>
</section>
