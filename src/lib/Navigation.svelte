<script>
	/**
	 * @type {boolean}
	 */
	export let open;
	import logo from '$lib/assets/logo_black.svg';
	import { page } from '$app/stores';
</script>

<nav class="flex flex-wrap items-center justify-center py-6  bg-white mx-auto sticky top-0 z-50">
	<div class="container flex flex-wrap items-center justify-between xl:max-w-screen-xl px-3">
		<div class="w-full relative flex justify-between xl:w-auto xl:static xl:block xl:justify-start">
			<a class="text-sm leading-relaxed flex items-center justify-center" href="/" on:click={() => (open = false)}>
				<img src={logo} alt="logo" class="w-[145px] h-[54px] md:mr-14 ml-4 md:ml-0" />
			</a>
			<button
				class="text-black cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block xl:hidden outline-none focus:outline-none"
				type="button"
				on:click={() => (open = !open)}
			>
				☰
			</button>
		</div>

		<div
			class={open ? 'block w-full' : 'xl:flex flex-grow items-center hidden'}
			id="navbar"
		>

			<div class="text-sm pt-10 xl:pt-0 pl-4 xl:pl-0">
					<strong>November 11 - 13, 2022</strong><br />
					Brno, Czech Republic
			</div>
			<div class="flex flex-grow items-center">
				<ul
					class="flex flex-col xl:flex-row xl:flex-grow-0 xl:mt-0 list-none xl:ml-auto text-base flex-grow my-8 xl:my-0"
				>
					<li>
						<a
							href="/"
							class="px-5 py-2 flex items-center leading-snug text-black hover:opacity-75" on:click={() => (open = false)}
							class:active={$page.url.pathname === '/'}>Home</a
						>
					</li>
					<li>
						<a
							href="/venues"
							class="px-5 py-2 flex items-center leading-snug text-black hover:opacity-75" on:click={() => (open = false)}
							class:active={$page.url.pathname === '/venues/'}>Venues</a
						>
					</li>
					<li>
						<a
							href="/contributors"
							class="px-5 py-2 flex items-center leading-snug text-black hover:opacity-75" on:click={() => (open = false)}
							class:active={$page.url.pathname.match(/^\/contributors\//)}
							>Contributors</a
						>
					</li>
					<li>
						<a
							href="https://matrix.ethbrno.cz"
							rel="noopener noreferrer"
							target="_blank"
							on:click={() => (open = false)}
							class="px-5 py-2 flex items-center leading-snug text-black hover:opacity-75 external">Chat</a
						>
					</li>
					<li class="pl-0 xl:pl-5">
						<a
							href="https://join.ethbrno.cz"
							rel="noopener noreferrer"
							target="_blank"
							on:click={() => (open = false)}
							class="px-5 py-2 flex items-center bg-black text-white leading-snug hover:opacity-75 external"
							>Join</a
						>
					</li>
				</ul>
			</div>
		</div>
	</div>
</nav>
