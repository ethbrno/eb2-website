<script>
	import { onMount } from 'svelte';
	export let data = {
        content: ''
    };
</script>

<svelte:head>
	<title>Code of Conduct | ETHBrno²</title>
</svelte:head>

<section class="text-white bg-black body-font">
	<div class="container mx-auto flex flex-col xl:max-w-screen-xl px-8 md:px-3 ">
		<h1 class="pt-12 pb-6 xl:pt-20 xl:pb-10 text-4xl">Code of Conduct</h1>
		<article class="mb-12">
			<div
				class="[&_hr]:md-separator [&_p]:paragraph  [&_a]:href [&_h1]:header [&_h2]:head2 [&_ul]:list [&_li]:sublist [&_h3]:head3 [&_h4]:head4 [&_h5]:head5 [&_img[src*='#left']]:hidden md:[&_img[src*='#left']]:flex md:[&_img[src*='#left']]:float-left [&_img[src*='#left']]:mt-12 [&_img[src*='#left']]:mr-5"
			>
				{@html data.content}
			</div>
		</article>
	</div>
</section>
