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
			<div>
				<img src={logo} class=" h-6" alt="logo" />
			</div>

			<div class="md:inline-flex gap-10 sm:ml-auto sm:mt-0 mt-10 justify-center sm:justify-start">
				<div>
					<a
						class="text-black external"
						href="https://docs.ethbrno.cz"
						rel="noopener noreferrer"
						>Documentation
					</a>
				</div>
				<div>
					<a
						class="text-black external"
						href="https://twitter.com/ethbrno"
						rel="noopener noreferrer"
						>Twitter
					</a>
				</div>
				<div>
					/join 
					<a
						class="text-black external"
						href="https://matrix.ethbrno.cz"
						rel="noopener noreferrer"
						>#ethbrno:gwei.cz
					</a>
				</div>
			</div>
		</div>
	</div>
</footer>
