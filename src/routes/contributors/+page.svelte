<script>
	/** @type {import('./$types').PageData} */
	export let data;

	const categories = [
		{
			role: 'speaker',
			title: 'Speakers'
		},
		{
			role: 'mentor',
			title: 'Mentors',
		},
		{
			role: 'judge',
			title: 'Judges',
		},
		{
			role: 'team',
			title: 'Core team'
		}
	]

</script>

<svelte:head>
	<title>Contributors: ETHBrno²</title>
</svelte:head>

<section class="text-gray-400 body-font bg-black py-12">
	{#each categories as cat}
		<div class=" px-5 py-12 mx-auto">
			<div class="flex flex-col text-center w-full mb-12">
				<h1 class="sm:text-4xl text-3xl font-medium title-font mb-2 text-white">{cat.title}</h1>
			
			</div>
			<div class="flex flex-wrap justify-center">
				{#each Object.values(data.contributors).filter(x => x.roles.includes(cat.role)) as item}
					{#if item.name !== undefined}
						<div class="bg-black bg-opacity-40 p-6 h-full w-full md:w-1/3 lg:w-1/4">
							<img
								class="h-40 md:h-60 w-full object-cover object-center mb-6 grayscale hover:grayscale-0"
								loading="lazy"
								src={`/photos/${item.id}.jpg`}
								alt={item.desc}
							/>
							<h3
								class="tracking-widest text-gray-400 text-xs font-medium title-font flex flex-row divide-x"
							>
								{#each item.roles as role}
									<span class="underline">{role}</span>
								{/each}
							</h3>
							<div class="flex flex-row mb-2">
								<a
									class="text-lg text-white font-medium title-font"
									href={`https://twitter.com/${item.twitter}`}
								>
									{item.name}
									{#if item.nickname}
										({item.nickname})
									{/if}
								</a>
								{#if item.remote}
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke-width="1.5"
										stroke="currentColor"
										class="w-4 h-4 ml-1 text-white"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
										/>
									</svg>
								{/if}
							</div>

							<p class="leading-relaxed text-sm">{item.bio}</p>
						</div>
					{/if}
				{/each}
			</div>
		</div>
	{/each}
</section>
