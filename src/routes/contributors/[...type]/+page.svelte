<script>
	export let data;
	//console.log(data);
	const categories = [
		{
			role: null,
			title: 'All',
			url: '/contributors'
		},
		{
			role: 'speaker',
			title: 'Speakers',
			url: '/contributors/speakers/'
		},
		{
			role: 'mentor',
			title: 'Mentors',
			url: '/contributors/mentors/'
		},
		{
			role: 'judge',
			title: 'Judges',
			url: '/contributors/judges/'
		},
		{
			role: 'advisor',
			title: 'Advisors',
			url: '/contributors/advisors/'
		},
		{
			role: 'team',
			title: 'Core Team',
			url: '/contributors/team/'
		}
	];
	$: selectedCategory = data.type
		? categories.filter((cat) => cat.role === data.type)
		: categories.filter((cat) => cat.role === null)
	//console.log(selectedCategory);
</script>

<svelte:head>
	<title>Contributors: {selectedCategory[0].title}</title>
</svelte:head>

<section
	class="text-white body-font bg-black py-12 flex md:justify-center flex-row overflow-x-scroll "
>
	{#each categories as cat}
		{#if cat.role === selectedCategory.role}
			<a href={cat.url} class="px-5 py-2 border m-2 bg-white text-black">{cat.title}</a>
		{:else}
			<a href={cat.url} class="px-5 py-2 border m-2">{cat.title}</a>
		{/if}
	{/each}
</section>
<section class="text-gray-400 body-font bg-black py-12">
	<div class=" px-5 py-12 mx-auto">
		<div class="flex flex-col text-center w-full mb-12">
			<h1 class="sm:text-4xl text-3xl font-medium title-font mb-2 text-white" data-testid="filter">
				{selectedCategory[0].title}
			</h1>
		</div>
		<div class="flex flex-wrap justify-center">
			{#each data.filtered_contributors as item}
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
