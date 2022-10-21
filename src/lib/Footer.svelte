<script>
	import logo from '$lib/assets/logo_black.svg';
	import cityscape from '$lib/assets/cityscape2.png';
	import { time } from '$lib/data.json';

	const options = {
		weekday: 'long',
		year: 'numeric',
		month: 'long',
		day: 'numeric',
		hour: 'numeric',
		minute: 'numeric',
		second: 'numeric',
		timeZone: 'Europe/Prague'
	};
</script>

<footer class="bg-black mx-auto">
	<div class="pt-12">
		<img src={cityscape} alt="cityscape" class="object-cover w-full" />
	</div>
	<div class="bg-white flex flex-col justify-end">
		<div
			class="container mx-auto px-4 flex flex-wrap flex-col sm:flex-row justify-center items-center mt-20"
		>
			<div>
				<img src={logo} class=" h-6" alt="logo" />
			</div>

			<div class="md:inline-flex gap-10 sm:ml-auto sm:mt-0 mt-10 justify-center sm:justify-start">
				<div class="flex justify-center">
					<a class="text-black external" href="https://docs.ethbrno.cz/events/2022" rel="noopener noreferrer"
						>Documentation
					</a>
				</div>
				<div class="flex justify-center">
					<a
						class="text-black external"
						href="https://twitter.com/ethbrno"
						rel="noopener noreferrer"
						>Twitter
					</a>
				</div>
				<div class="flex justify-center">
					/join
					<a class="text-black external" href="https://matrix.ethbrno.cz" rel="noopener noreferrer"
						>#ethbrno:gwei.cz
					</a>
				</div>
			</div>
		</div>
		<div class="text-black text-center my-16 text-sm opacity-50 leading-7">
			<a href="https://git.gwei.cz/ethbrno/eb2-website" target="_blank" class="external"
				>Source code</a
			>
			- Generated @ {new Date(time).toLocaleString('en-GB', options)} (UTC+2)
		</div>
	</div>
</footer>
