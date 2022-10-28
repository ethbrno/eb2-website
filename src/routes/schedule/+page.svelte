<script>
	export let data;
	const today = new Date().getDay();
	let selectedDay = today === 5 || today === 6 || today === 0 ? today : 6;
	//let selectedDay = 6;
	$: filteredEvents = data.events.filter((c) => {
		let evtDate = new Date(c.datetime).getDay();
		return evtDate === selectedDay;
	});
	console.log(filteredEvents);
</script>

<section
	class="text-white body-font bg-black px-2 py-6 md:py-12 flex justify-center flex-row overflow-x-scroll flex-wrap text-sm md:text-base"
>
	<button
		on:click={() => (selectedDay = 5)}
		class="px-3 py-2 md:px-5 md:py-2 border m-2 {selectedDay === 5
			? 'text-black bg-white'
			: 'hover:outline-none hover:bg-gray-600'}">Friday</button
	>
	<button
		on:click={() => (selectedDay = 6)}
		class="px-3 py-2 md:px-5 md:py-2 border m-2 {selectedDay === 6
			? 'text-black bg-white'
			: 'hover:outline-none hover:bg-gray-600'}">Saturday</button
	>
	<button
		on:click={() => (selectedDay = 0)}
		class="px-3 py-2 md:px-5 md:py-2 border m-2 {selectedDay === 0
			? 'text-black bg-white'
			: 'hover:outline-none hover:bg-gray-600'}">Sunday</button
	>
</section>

<section class="text-white bg-black body-font overflow-hidden">
	<div class="container px-5 py-24 mx-auto">
		{#each filteredEvents as evt}
			<div class="py-8 divide-y-2 divide-gray-800">
				<div class=" flex flex-wrap md:flex-nowrap">
					{#if evt.eventtype === 'Key'}
						<div class="md:w-64 md:mb-0 flex-shrink-0 flex flex-col border-l-4 border-white pl-2">
							<span class="font-bold title-font px-2 ">3pm-4pm</span>
						</div>
					{:else}
						<div
							class="md:w-64 md:mb-0 flex-shrink-0 flex flex-col border-l-4 border-gray-900 pl-2"
						>
							<span class="font-semibold title-font text-white px-2">3pm-4pm</span>
							<a href="/venues" class="mt-1 text-white text-sm mb-1 hover:underline px-2"
								>🞋 {evt.stage}</a
							>
							<span class="mt-1 text-gray-500 text-sm uppercase px-2">{evt.eventtype}</span>
						</div>
					{/if}

					<div class="md:flex-grow">
						<h2 class="text-2xl font-medium text-white title-font mb-2">
							{evt.name}
						</h2>
						<p class="leading-relaxed">
							{evt.description}
						</p>
						<div class="col-start-2 row-start-1 row-end-3 mt-4 lg:mt-0 xl:mt-4">
							<dt class="sr-only">Speakers</dt>
							<dd class="flex justify-start -space-x-1.5">
								{#each evt.speakers || [] as speaker}
									<img
										src={`/photos/contributors/${speaker.id}.jpg`}
										alt={speaker.name}
										class="w-6 h-6 rounded-full bg-slate-100 ring-2 ring-white grayscale"
										loading="lazy"
									/>
								{/each}

								<p class="pl-4 flex space-x-2 divide-x ">
									{#each evt.speakers || [] as speaker}
										<p class="pl-2">{speaker.name}</p>
									{/each}
								</p>
							</dd>
						</div>
					</div>
				</div>
			</div>
		{/each}
	</div>
</section>
