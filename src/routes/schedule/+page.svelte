<script>
	export let data;
	//const selected = new Date().getDay();
	let selectedDay = 6;
	let filteredEvents = data.events.filter((c) => {
		let evtDate = new Date(c.datetime).getDay();
		return evtDate === selectedDay;
	});
	console.log(filteredEvents);
</script>

<section
	class="text-white body-font bg-black px-2 py-6 md:py-12 flex justify-center flex-row overflow-x-scroll flex-wrap text-sm md:text-base"
>
	<button
		class="px-3 py-2 md:px-5 md:py-2 border m-2 {true
			? 'text-black bg-white'
			: 'hover:outline-none hover:bg-gray-600'}">Friday</button
	>
	<button
		class="px-3 py-2 md:px-5 md:py-2 border m-2 {false
			? 'text-black bg-white'
			: 'hover:outline-none hover:bg-gray-600'}">Saturday</button
	>
	<button
		class="px-3 py-2 md:px-5 md:py-2 border m-2 {false
			? 'text-black bg-white'
			: 'hover:outline-none hover:bg-gray-600'}">Sunday</button
	>
</section>

<section class="text-white bg-black body-font overflow-hidden">
	<div class="container px-5 py-24 mx-auto">
		{#each filteredEvents as evt}
			<div class="-my-8 divide-y-2 divide-gray-800">
				<div class="py-8 flex flex-wrap md:flex-nowrap">
					<div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
						<span class="font-semibold title-font text-white">3pm-4pm</span>
						<a href="/venues" class="mt-1 text-white text-sm mb-1 hover:underline">🞋 {evt.stage}</a>
						<span class="mt-1 text-gray-500 text-sm uppercase">{evt.eventtype}</span>
					</div>
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
								{#each evt.speakers as speaker}
									<img
										src={`/photos/contributors/${speaker.id}.jpg`}
										alt={speaker.name}
										class="w-6 h-6 rounded-full bg-slate-100 ring-2 ring-white grayscale"
										loading="lazy"
									/>
								{/each}

								<p class="pl-4 flex space-x-2 divide-x ">
									{#each evt.speakers as speaker}
										<a class="pl-2" href={speaker.id}>{speaker.name}</a>
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
