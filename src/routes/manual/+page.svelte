<script>
	export let data;
</script>

<section class="text-white bg-black body-font">
	<div class="container mx-auto py-12 md:py-24 xl:max-w-screen-xl md:px-0 px-4">
		<div class="[&_h1]:header [&_h2]:subhead [&_li]:list [&_h3]:font-bold">
			{@html data.content}
		</div>
	</div>
</section>
