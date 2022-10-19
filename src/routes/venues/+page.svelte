<script>
	export let data;
</script>

<svelte:head>
	<title>Venues | {data.title}</title>
</svelte:head>
<section class="text-white bg-black body-font">
	<div class="container mx-auto flex py-12 md:py-24 md:flex-row flex-col items-center xl:max-w-screen-xl md:px-0 px-4">
		<div
			class="xl:flex-grow xl:pr-24 md:pr-16 flex flex-col lg:items-start lg:text-left mb-16 md:mb-0 items-center text-center"
		>
			<h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
				<a href="https://www.hubbrno.cz/en/" class="hover:underline"> Impact Hub Brno </a>
			</h1>
			<p class="leading-relaxed text-white">Opening hours:</p>
			<p class="leading-relaxed mb-5 text-white">Fri Nov 11 13:00 - Sun Nov 13 20:00 (nonstop!)</p>
			<div class="leading-relaxed relative mb-4">
				The main venue will be a modern coworking space called Impact Hub, just a few minutes walk
				from the city centre and the main train station. In less than 7 years of its existence, it
				has become an important part of Brno's freelancing community, inspiring and connecting many
				people. Great place for our hackathon, don't you think?
			</div>
			<div class="leading-relaxed relative mb-4">
				Impact Hub will serve as the main basecamp for the hackathon and will be available for
				hackers all day 24/7.
			</div>
			<div class="leading-relaxed relative mb-4">
				You'll have everything you might need - different work areas (single or team, sitting or
				standing), fast internet, power sockets everywhere, meeting rooms, refreshments and much
				more. We want you to feel as comfortable as possible and we will do everything we can to
				make that happen.
			</div>
			<div class="flex flex-wrap justify-center gap-4">
				<a
					href="https://www.openstreetmap.org/way/339769163"
					target="_blank"
					class="inline-flex text-black bg-white border-0 py-2 px-6 focus:outline-none hover:bg-gray-600 text-lg external"
				>
					OpenStreetMap
				</a>
				<a
					href="https://goo.gl/maps/8bKsGHhVSYrF8ZmE8"
					target="_blank"
					class="inline-flex text-black bg-white border-0 py-2 px-6 focus:outline-none hover:bg-gray-600 text-lg external"
				>
					Google Maps
				</a>
			</div>
		</div>
		<div class="xl:max-w-lg xl:w-full w-5/6 flex md:justify-end">
			<img
				class="object-cover object-center "
				decoding="async"
				loading="lazy"
				src="/venues/ihhero.png"
				alt="venue"
			/>
		</div>
	</div>
</section>
<section class="text-white bg-black body-font">
	<div class="container mx-auto flex py-12 md:py-24 md:flex-row flex-col-reverse items-center xl:max-w-screen-xl md:px-0 px-4">
		<div class="xl:max-w-lg xl:w-full md:w-1/2 w-5/6 md:mb-0 mt-10 md:mt-0">
			<img
				class="object-cover object-center grayscale hover:grayscale-0"
				decoding="async"
				loading="lazy"
				src="/venues/cc1.png"
				alt="venue"
			/>
		</div>
		<div
			class="xl:flex-grow md:w-1/2 xl:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center"
		>
			<h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Clubco Brno</h1>
			<p class="leading-relaxed text-white">Opening hours:</p>
			<p class="leading-relaxed mb-5 text-white">
				Fri Nov 11: 14:30 - 22:00, Sat Nov 10: 9:00 - 22:00, Sun Nov 13: 9:00 - 17:00
			</p>
			<p class="relative mb-4">
				Additional venue, only 5 minutes walk (400m) from the main venue (Impact Hub).
			</p>
			{' '}
			<p class="relative mb-4">
				It will be an additional space for hackers that offers another style, with private meeting
				rooms and open workspaces. It also includes an event space where additional workshops and
				lectures will be held.
			</p>
			<div class="relative mb-4">
				This location will NOT be open 24/7, you will need to move to the Impact Hub for the night.
			</div>
			<div class="flex flex-wrap justify-center gap-4">
				<a
					href="https://www.openstreetmap.org/node/8848071783"
					target="_blank"
					class="inline-flex text-black bg-white border-0 py-2 px-6 focus:outline-none hover:bg-gray-600 text-lg external"
				>
					OpenStreetMap
				</a>
				<a
					href="https://g.page/clubco-brno"
					target="_blank"
					class="inline-flex text-black bg-white border-0 py-2 px-6 focus:outline-none hover:bg-gray-600 text-lg external"
				>
					Google Maps
				</a>
			</div>
		</div>
	</div>
</section>
