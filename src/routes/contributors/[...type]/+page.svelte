<script>
	import { onMount } from 'svelte';
	import { browser, dev, prerendering } from '$app/environment';
	import { graphdata } from '$lib/graphdata';
	import { prng } from '$lib/dateprng.js';
	export let data;
	function wrapContributor(c) {
		if (c.twitter) {
			c.link = 'https://twitter.com/' + c.twitter;
		}
		return c;
	}

	//disabling data reload because of random
	// onMount(async () => {
	// 	if (dev) return;
	// 	const result = await graphdata('json');
	// 	if (result) data.contributors = result.contributors;
	// });
	let innercount = 0;
	$: filteredContributors = data.contributors
		.filter((c) => data.type === 'all' || c.roles.includes(data.typeConfig.role))
		.sort((a, b) => {
			return 0.5 - Math.random();
		})
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
					<div class="bg-black bg-opacity-40 p-6 h-full w-full md:w-1/3 lg:w-1/4 fadein">
						<a href={item.link} target="_blank">
							<img
								class="h-40 md:h-60 w-full object-cover object-center mb-6 grayscale hover:grayscale-0"
								loading="lazy"
								src={`/photos/contributors/${item.id}.jpg`}
								alt={item.desc}
							/>
						</a>
						<h3
							class="tracking-widest text-gray-400 text-xs font-medium title-font flex flex-row gap-2"
						>
							{#each item.roles as role}
								<span class="underline">{role}</span>
							{/each}
						</h3>
						<div class="flex flex-row mb-2">
							<a
								class="text-lg flex justify-center text-white font-medium title-font"
								href={item.link}
								target="_blank"
							>
								{item.name}
								{#if item.nickname}
									({item.nickname})
								{/if}
								{#if item.remote}
									<span class="ordinal text-xs ml-2">remote</span>
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
