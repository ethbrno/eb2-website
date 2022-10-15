<script>
	import logo from '$lib/assets/logo_black.svg';
    import cityscape from '$lib/assets/cityscape2.png';
</script>

<footer class="bg-black mx-auto">
	<div class="pt-12">
		<img src={cityscape} alt="cityscape" class="object-cover w-full" />
	</div>
	<div class="bg-white flex flex-col justify-end">
		<div
			class="container mx-auto px-4 flex flex-wrap flex-col sm:flex-row justify-center items-center h-60"
		>
			<a
				href="https://twitter.com/ethbrno"
				rel="noopener noreferrer"
				class="text-black ml-1"
				target="_blank"><img src={logo} class=" h-6" alt="logo" /></a
			>

			<span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
				<a
					class="mr-10 text-black"
					href="https://docs.ethbrno.cz"
					rel="noopener noreferrer"
					>Documentation
				</a>
				<a
					class="text-black ml-3 mr-10"
					href="https://twitter.com/ethbrno"
					rel="noopener noreferrer"
					>Twitter
				</a>
				<div class="inline-block ml-3">
					Matrix (chat): 
					<a
						class="text-black"
						href="https://matrix.ethbrno.cz"
						rel="noopener noreferrer"
						>#ethbrno:gwei.cz
					</a>
				</div>
			</span>
		</div>
	</div>
</footer>
