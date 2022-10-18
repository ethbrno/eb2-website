<script>
	import { onMount } from 'svelte';
	export let data;
	let selectedCategory = { role: null, title: 'All' };
	onMount(() => {
		//console.log('the component has mounted');
		handleCategory(selectedCategory);
	});

	let selectedCategoryData = [];
	function handleCategory(category) {
		selectedCategory = category;
		//console.log(category.role);
		if (!category.role) selectedCategoryData = Object.values(data.contributors);
		else
			selectedCategoryData = Object.values(data.contributors)
				.filter((x) => x.roles.includes(category.role))
				.map(wrapContributor);
		//console.log(selectedCategoryData);
	}

	const categories = [
		{
			role: null,
			title: 'All'
		},
		{
			role: 'speaker',
			title: 'Speakers'
		},
		{
			role: 'mentor',
			title: 'Mentors'
		},
		{
			role: 'judge',
			title: 'Judges'
		},
		{
			role: 'advisor',
			title: 'Advisors'
		},
		{
			role: 'team',
			title: 'Core team'
		}
	];

	function wrapContributor(c) {
		if (c.twitter) {
			c.link = 'https://twitter.com/' + c.twitter;
		}
		return c;
	}
</script>

<svelte:head>
	<title>Contributors: {selectedCategory.title}</title>
</svelte:head>

<section
	class="text-white body-font bg-black py-12 flex md:justify-center flex-row overflow-x-scroll "
>
	{#each categories as cat}
		{#if cat.role === selectedCategory.role}
			<button class="px-5 py-2 border m-2 bg-white text-black" on:click={() => handleCategory(cat)}
				>{cat.title}</button
			>
		{:else}
			<button class="px-5 py-2 border m-2" on:click={() => handleCategory(cat)}>{cat.title}</button>
		{/if}
	{/each}
</section>
<section class="text-gray-400 body-font bg-black py-12">
	<div class=" px-5 py-12 mx-auto">
		<div class="flex flex-col text-center w-full mb-12">
			<h1 class="sm:text-4xl text-3xl font-medium title-font mb-2 text-white">
				{selectedCategory.title}
			</h1>
		</div>
		<div class="flex flex-wrap justify-center">
			{#each selectedCategoryData as item}
				{#if item.name !== undefined}
					<div class="bg-black bg-opacity-40 p-6 h-full w-full md:w-1/3 lg:w-1/4">
						<a href={item.link} target="_blank">
							<img
								class="h-40 md:h-60 w-full object-cover object-center mb-6 grayscale hover:grayscale-0"
								loading="lazy"
								src={`/photos/contributors/${item.id}.jpg`}
								alt={item.desc}
							/>
						</a>
						<h3
							class="tracking-widest text-gray-400 text-xs font-medium title-font flex flex-row divide-x"
						>
							{#each item.roles as role}
								<span class="underline">{role}</span>
							{/each}
						</h3>
						<div class="flex flex-row mb-2 {item.remote ? 'contributor-remote' : ''}">
							<a class="text-lg text-white font-medium title-font" href={item.link} target="_blank">
								{item.name}
								{#if item.nickname}
									({item.nickname})
								{/if}
							</a>
						</div>

						<p class="leading-relaxed text-sm">{item.bio}</p>
					</div>
				{/if}
			{/each}
		</div>
	</div>
</section>
