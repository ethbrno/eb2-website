<script>
	import { time_ranges_to_array } from "svelte/internal";
	import { marked } from 'marked';

	export let data;
	let checked = false;

	const today = new Date().getDay();
	let selectedDay = today === 5 || today === 6 || today === 0 ? today : 5;
	//let selectedDay = 6;
	$: filteredEvents = data.events?.filter((c) => {
		let evtDate = new Date(c.datetime).getDay();
		return evtDate === selectedDay;
	});

	function addMinutes(numOfMinutes, dateOrig = new Date()) {
		const dateInstance = new Date(dateOrig);
		dateInstance.setMinutes(dateOrig.getMinutes() + numOfMinutes);
		return dateInstance;
	}
	function getTiming(date, duration) {
		const dateObj = new Date(date);
		const endObj = addMinutes(duration, dateObj);
		//console.log(dateObj, endObj);
		const minutes = [
			String(dateObj.getMinutes()).padStart(2, '0'),
			String(endObj.getMinutes()).padStart(2, '0')
		];
		return `${dateObj.getHours()}:${minutes[0]} - ${endObj.getHours()}:${minutes[1]}`;
	}

	function contributorsData (arr) {
		return arr.map(contributor => {
			const item = data.contributors.find(c => c.pretalxId === contributor.id)
			return {
				id: item ? item.id : null,
				name: item ? item.name : contributor.name 
			}
		})
	}

	function isPast(date) {
		return new Date() > new Date(date);
	}
	//console.log(filteredEvents);
</script>

<svelte:head>
	<title>Schedule | ETHBrno²</title>
</svelte:head>

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
<section
	class="text-white body-font bg-black px-2 py-6 md:py-12 flex justify-center flex-row overflow-x-scroll flex-wrap text-sm md:text-base"
>
	<label for="Toggle1" class="inline-flex items-center space-x-4 cursor-pointer text-gray-100">
		<span>Hide</span>
		<span class="relative">
			<input id="Toggle1" type="checkbox" class="hidden peer" bind:checked={checked} />
			<div class="w-10 h-6 rounded-full shadow-inner bg-gray-400 peer-checked:bg-gray-100" />
			<div
				class="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto bg-gray-800"
			/>
		</span>
		<span>Show past events</span>
	</label>
</section>

<section class="text-white bg-black body-font overflow-hidden">
	<div class="container px-5 py-24 mx-auto">
		{#each filteredEvents as evt}
			<div class="py-8 divide-y-2 divide-gray-800 {isPast(evt.datetime) && !checked && 'hidden'}">
				<div class=" flex flex-wrap md:flex-nowrap">
					{#if evt.eventType === 'Catering'}
						<div class="md:w-64 md:mb-0 mb-2 flex-shrink-0 flex flex-col border-l-4 border-white md:pl-2">
							<span class="font-bold title-font px-2 ">{getTiming(evt.datetime, evt.duration)}</span
							>
						</div>
					{:else}
						<div
							class="md:w-64 md:mb-0 mb-2 flex-shrink-0 flex flex-col border-l-4 border-gray-900 md:pl-2"
						>
							<span class="font-semibold title-font text-white px-2"
								>{getTiming(evt.datetime, evt.duration)}</span
							>
							<a href="/venues" class="mt-1 text-white text-sm mb-1 hover:underline px-2"
								>🞋 {evt.stage}</a
							>
							<span class="mt-1 text-gray-500 text-sm uppercase px-2">{evt.eventType}</span>
						</div>
					{/if}

					<div class="md:flex-grow">
						<h2 class="text-2xl font-medium text-white title-font mb-2">
							{evt.name}
						</h2>
						{#if evt.description && !['TBD', 'TBA', 'TODO'].includes(evt.description)}
							<p class="leading-relaxed markdown">
								{@html marked(evt.description)}
							</p>
						{/if}
						{#if evt.speakers && evt.speakers.length > 0}
							<div class="col-start-2 row-start-1 row-end-3 mt-4 lg:mt-0 xl:mt-4">
								<dt class="sr-only">Speakers</dt>
								<dd class="flex justify-start -space-x-1.5 gap-6">
									{#each contributorsData(evt.speakers || []) as speaker}
										<div class="flex gap-4">
											{#if speaker.id}					
												<img
													src={`/photos/contributors/${speaker.id}.jpg`}
													alt={speaker.name}
													class="w-6 h-6 rounded-full bg-slate-100 ring-2 ring-white grayscale"
													loading="lazy"
												/>
											{/if}
											<p>{speaker.name}</p>
										</div>
									{/each}
								</dd>
							</div>
						{/if}
					</div>
				</div>
			</div>
		{/each}
	</div>
</section>
