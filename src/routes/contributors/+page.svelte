<svelte:head>
	<title>Contributors: ETHBrno²</title>
</svelte:head>
<script>
	/** @type {import('./$types').PageData} */
	export let data;
	//console.log(data);
</script>

<section class="text-gray-400 body-font bg-black">
	<div class=" px-5 py-24 mx-auto">
		<div class="flex flex-col text-center w-full mb-20">
			<h1 class="sm:text-4xl text-3xl font-medium title-font mb-2 text-white">Speakers</h1>
			<p class="lg:w-2/3 mx-auto leading-relaxed text-base">
				We are here to inspire and help your project succeed.
			</p>
			<div class="flex mx-auto border-2 border-black overflow-hidden mt-6 bg-black">
				<a class="py-1 px-4  text-white focus:outline-none" href="/contributors">Speakers</a>
				<a class="py-1 px-4 bg-black hover:bg-black text-gray-300 focus:outline-none" href="/team"
					>Team</a
				>
			</div>
		</div>
		<div class="flex flex-wrap -m-4">
			{#each Object.values(data) as item}
				{#if item.name !== undefined}<li>{item.name}</li>{/if}
			{/each}
		</div>
	</div>
</section>
