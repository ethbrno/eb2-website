<script>
	//import { contributors, contributorTypes } from '$lib/data.json';
	import { base } from '$app/paths';
	import { onMount } from 'svelte';
	export let data;
	function wrapContributor(c) {
		if (c.twitter) {
			c.link = 'https://twitter.com/' + c.twitter;
		}
		return c;
	}

	onMount(async () => {
		//console.log(data.contributors);
		const response = await fetch(`${base}/data.json`);
		const result = await response.json();
		data.contributors = result.contributors;
		//console.log(data.contributors);
	});

	$: filteredContributors = data.contributors
		.filter((c) => data.type === 'all' || c.roles.includes(data.typeConfig.role))
		.sort((a, b) => 0.5 - Math.random())
		.map(wrapContributor);
</script>

<svelte:head>
	<title>Contributors{data.type !== 'all' ? `: ${data.typeConfig.title}` : ''} | ETHBrno²</title>
</svelte:head>

<section
	class="text-white body-font bg-black px-2 py-6 md:py-12 flex justify-center flex-row overflow-x-scroll flex-wrap text-sm md:text-base"
>
	{#each Object.entries(data.contributorTypes) as [ctKey, ct]}
		<a
			href="/contributors/{ctKey === 'all' ? '' : ctKey}"
			class="px-3 py-2 md:px-5 md:py-2 border m-2 {ctKey === data.type
				? 'text-black bg-white'
				: 'hover:outline-none hover:bg-gray-600'}">{ct.title}</a
		>
	{/each}
</section>
<section class="text-gray-400 body-font bg-black py-6 md:py-12">
	<div class=" px-5 mx-auto">
		<div class="flex flex-wrap justify-center" data-testid="list">
			{#if filteredContributors.length > 0}
				{#each filteredContributors as item}
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
				{/each}
			{:else}
				<div class="p-6">Nobody's here yet.</div>
			{/if}
		</div>
	</div>
</section>
