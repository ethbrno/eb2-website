<script>
	import { base } from '$app/paths';
	import { onMount } from 'svelte';
	//import snarkdown from 'snarkdown';
	import parse from '$lib/vsnarkdown';
	export let data;
	onMount(async () => {
		const response = await fetch(`${base}/hacker-manual.md`);
		const result = await response.text();
		data.content = await parse(result);
		//console.log(data.contributors);
	});
</script>

<section class="text-white bg-black body-font">
	<div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center md:items-start">
		<div
			class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10 flex flex-col justify-center text-center"
		>
			<div class="flex flex-col mb-10 items-center">
				<div
					class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-100 text-gray-500 mb-5"
				>
					<svg
						fill="none"
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						class="w-6 h-6"
						viewBox="0 0 24 24"
						><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6" /><line
							x1="8"
							y1="2"
							x2="8"
							y2="18"
						/><line x1="16" y1="6" x2="16" y2="22" /></svg
					>
				</div>
				<div class="flex-grow">
					<h2 class="text-white text-lg title-font font-medium mb-3">Before the Hackathon</h2>
					<p class="leading-relaxed text-base">
						Useful information before you arrive, like venue locations, accomodation and public
						transport.
					</p>
					<a class="mt-3 text-gray-500 inline-flex items-center" href="#before-the-hackathon"
						>Learn more<svg
							fill="none"
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							class="w-4 h-4 ml-2"
							viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" /></svg
						></a
					>
				</div>
			</div>
			<div class="flex flex-col mb-10 items-center">
				<div
					class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-100 text-gray-500 mb-5"
				>
					<svg
						fill="none"
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						class="w-6 h-6"
						viewBox="0 0 24 24"
						><circle cx="18" cy="18" r="3" /><circle cx="6" cy="6" r="3" /><path
							d="M13 6h3a2 2 0 0 1 2 2v7"
						/><line x1="6" y1="9" x2="6" y2="21" /></svg
					>
				</div>
				<div class="flex-grow">
					<h2 class="text-white text-lg title-font font-medium mb-3">While Hacking</h2>
					<p class="leading-relaxed text-base">
						Rules, Prizes and Bounties, Mentors and other information relevant during hackathon.
					</p>
					<a class="mt-3 text-gray-500 inline-flex items-center" href="#hacking"
						>Coming soon...<svg
							fill="none"
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							class="w-4 h-4 ml-2"
							viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" /></svg
						></a
					>
				</div>
			</div>
			<div class="flex flex-col mb-10 items-center">
				<div
					class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-100 text-gray-500 mb-5"
				>
					<svg
						fill="none"
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						class="w-6 h-6"
						viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" /></svg
					>
				</div>
				<div class="flex-grow">
					<h2 class="text-white text-lg title-font font-medium mb-3">After!</h2>
					<p class="leading-relaxed text-base">
						Yes, we mean party. Find the details here and join us on Moon Party.
					</p>
					<a class="mt-3 text-gray-500 inline-flex items-center" href="#after"
						>Coming soon...<svg
							fill="none"
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							class="w-4 h-4 ml-2"
							viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" /></svg
						></a
					>
				</div>
			</div>
		</div>
		<article
			class="lg:flex-grow md:w-1/2 lg:pl-32 md:pl-16 lg:pr-32 md:pr-16 flex flex-col md:items-start md:text-left items-center text-center"
		>
			<div
				class="[&_h1]:header [&_h2]:head2 [&_li]:list [&_h3]:head3 [&_h4]:head4 [&_img[src*='#left']]:float-left [&_img[src*='#left']]:mt-5 [&_img[src*='#left']]:mr-5"
			>
				{@html data.content}
			</div>
		</article>
	</div>
</section>
