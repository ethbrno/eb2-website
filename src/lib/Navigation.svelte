<script>
	/**
	 * @type {boolean}
	 */
	export let open;
	import logo from '$lib/assets/logo_black.svg';
	import { page, session } from '$app/stores';
</script>

<nav class="flex flex-wrap items-center justify-center py-6  bg-white mx-auto sticky top-0 z-50">
	<div class="container flex flex-wrap items-center justify-between xl:max-w-screen-xl px-3">
		<div class="w-full relative flex justify-between xl:w-auto xl:static xl:block xl:justify-start">
			<a class="text-sm leading-relaxed flex items-center justify-center" href="/">
				<img src={logo} alt="logo" class="w-[145px] h-[54px] md:mr-14" />
				<a
					href="webcal://dev.ethbrno.cz/icalendar.ics"
					rel="noopener noreferrer"
					target="_blank"
					class="hidden md:block pt-2 underline">November 11.-13.</a
				>
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
			class={open ? 'xl:flex flex-grow items-center flex' : 'xl:flex flex-grow items-center hidden'}
			id="navbar"
		>
			<ul
				class="flex flex-col xl:flex-row xl:flex-grow-0 xl:mt-0 list-none xl:ml-auto text-base flex-grow my-8 xl:my-0"
			>
				<li>
					<a
						href="/"
						class="px-5 py-2 flex items-center leading-snug text-black hover:opacity-75"
						class:active={$page.url.pathname === '/'}>Home</a
					>
				</li>
				<li>
					<a
						href="/venues"
						class="px-5 py-2 flex items-center leading-snug text-black hover:opacity-75"
						class:active={$page.url.pathname === '/venues'}>Venues</a
					>
				</li>
				<li>
					<a
						href="/contributors"
						class="px-5 py-2 flex items-center leading-snug text-black hover:opacity-75"
						class:active={$page.url.pathname === '/contributors' || $page.url.pathname === '/team'}
						>Contributors</a
					>
				</li>
				<li>
					<a
						href="https://matrix.to/#/#ethbrno:gwei.cz"
						rel="noopener noreferrer"
						class="px-5 py-2 flex items-center leading-snug text-black hover:opacity-75">Chat</a
					>
				</li>
				<li>
					<a
						href="https://join.ethbrno.cz"
						rel="noopener noreferrer"
						target="_blank"
						class="px-5 py-2 flex items-center bg-black text-white leading-snug hover:opacity-75"
						>Join</a
					>
				</li>
			</ul>
		</div>
	</div>
</nav>
