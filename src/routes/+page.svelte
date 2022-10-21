<script>
	import { sponsors } from '$lib/data.json';

	const tiers = [
		{
			id: 'schnorr',
			name: 'Schnorr'
		},
		{
			id: 'ecdsa',
			name: 'ECDSA'
		},
		{
			id: 'aes',
			name: 'AES'
		},
		{
			id: '3des',
			name: '3DES'
		},
		{
			id: 'community',
			name: 'Community'
		}
	];
</script>

<svelte:head>
	<title>ETHBrno² 2022</title>
</svelte:head>
<section class="text-gray-400 bg-black border-b">
	<div class="w-full mx-auto flex md:flex-row md:h-5/6 flex-col items-center">
		<div class="md:w-5/12 md:mb-0 mb-4 md:flex justify-center md:h-[800px] bg-white">
			<img src="cam2.png" class="object-cover object-center invert -ml-20 md:ml-0 md:invert-0 -mt-20 md:mt-0" alt="cam" />
		</div>
		<div
			class="md:w-5/12 xl:pr-16 md:pr-4 pt-4 flex flex-col md:items-start md:text-left mx-auto items-center text-center text-white transition-transform  px-4 md:px-0"
		>
			<img src="logo.svg" class="md:-ml-4 p-2 md:p-0 w-[250px] md:w-[343px] " alt="logo" />
			<p class="text-xl md:text-3xl my-2">privacy {`&`} security edition</p>
			<p class="text-base md:text-xl">NOVEMBER 11-13, 2022</p>
			<p class="text-base md:text-xl">Brno, Czech republic</p>
			<div class="h-[1px] bg-white w-full my-2 opacity-20" />
			<p class="mb-8 py-4 leading-relaxed opacity-30 text-sm md:text-lg font-light" data-testid="tags">
				#freedom #anonymity #non-kyc #encryption #selfsovereignty #p2p #opensource #web3
				#smartcontracts #audits #vulnerabilities #analytics #wallets #scams #darkforest #mev
				#zeroknowledgeproofs #cypherpunk #lunarpunk #hackathon
			</p>
		</div>
	</div>
</section>
<section class="text-black bg-white body-font border-b">
	<div class="container mx-auto flex px-5 py-12 md:py-24 md:flex-row flex-col items-center">
		<div
			class="xl:flex-grow md:w-1/2 xl:pl-32 md:pl-16 xl:pr-32 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"
		>
			<h1 class="md:text-5xl text-3xl font-bold mb-4">About</h1>

			<p class="mb-8 leading-relaxed">
				<a href="https://docs.ethbrno.cz" target="_blank">ETHBrno²</a> is an annual independent {`&`}
				open community hackathon for supporters of decentralised finance, smart contracts and Web3 happening
				in
				<a href="https://en.wikipedia.org/wiki/Brno" target="_blank" class="external"
					>Brno, Czech Republic</a
				>. ETHBrno² is the second, and we believe the best yet, edition.
			</p>

			<!--p class="mb-8 leading-relaxed">
				ETHBrno² events are organized by <a href="https://gwei.cz" target="_blank" class="external">Gwei.cz community</a>
				with the help of the <a href="https://utxo.foundation" target="_blank" class="external">UTXO Foundation</a>.
			</p-->

			<p class="mb-8 leading-relaxed">
				This year we are focusing on <strong>privacy and security</strong> topics.
			</p>

			<p class="mb-8 leading-relaxed">
				You can read more in the article <a
					href="https://mirror.xyz/ethbrno.eth/6BH9cUVuD85hy5O0L5cOOOE7niSA9Yo5eWsXVzKOlO4"
					target="_blank"
					class="external">"Announcing ETHBrno²" on Mirror</a
				>.
			</p>

			<div class="flex justify-center flex-wrap">
				<a
					href="https://join.ethbrno.cz/"
					class="inline-flex text-white bg-black border-0 py-2 px-6 focus:outline-none hover:bg-gray-900 text-lg external"
					>Apply To Hack</a
				>
				<a
					href="https://ethbrno.cz/sponsor-deck.pdf"
					target="_blank"
					rel="noopener noreferrer"
					class="ml-4 inline-flex  border-0 py-2 px-6 focus:outline-none hover:bg-gray-100  text-lg underline external"
					>Sponsor</a
				>
			</div>
		</div>
		<div class="xl:max-w-lg xl:w-full md:w-1/2 w-[300px]">
			<img class="object-cover object-center" alt="hero" src="key.png" />
		</div>
	</div>
</section>
<section class="text-white bg-black body-font">
	<div class="container mx-auto flex px-5 py-12 md:py-24 md:flex-row flex-col-reverse items-center">
		<div class="xl:max-w-lg xl:w-full md:w-1/2 w-[150px] md:mb-0 mt-10 md:mb-10 flex justify-center">
			<img class="object-cover object-center" alt="hero" src="lock.png" />
		</div>
		<div
			class="xl:flex-grow md:w-1/2 xl:pl-32 md:pl-2 xl:pr-32 md:pr-8 flex flex-col md:items-start md:text-left items-center text-center"
		>
			<h1 class="md:text-5xl text-3xl mb-4 font-bold text-white">Manifesto</h1>
			<p class="mb-4 leading-relaxed">
				We believe that privacy is a fundamental human right. And good privacy needs good security
				foundations. Especially today, in a digital age full of people, organizations or governments
				that want to control you, your money or your data. Therefore, the second edition of ETHBrno
				(ETHBrno²) will be mainly dedicated to these important topics ― privacy & security.
			</p>
			<p class="mb-4 leading-relaxed">
				Our hackathon is for everyone who understands the urgency of these issues and wants to help.
				We want to present the current progress in this sector as well as the projects, technologies
				and people involved. We are Ethereum people, but we welcome creators and fans of all
				blockchains and directions.
			</p>
			<p class="mb-4 leading-relaxed">
				Let's learn together to defend against all threats, whether it's loss of privacy and state
				oppression, smart-contract exploits or simple phishing scams. Let's learn how to analyse
				them retrospectively. Let's learn how to use the right tools, and if we don't have them,
				let's create them together.
			</p>
			<p class="leading-relaxed">Don't Trust. Verify. - Run a node - Protect privacy</p>
			<p class="mt-8 leading-relaxed">
				<a
					href="https://docs.ethbrno.cz/events/2022/hackathon"
					class="inline-flex text-black bg-white border-0 py-2 px-6 focus:outline-none hover:bg-gray-600 text-lg external"
					>Read more about hackathon</a
				>
			</p>
		</div>
	</div>
</section>
<section class="text-white bg-black body-font">
	<div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
		<div
			class="flex-grow w-full px-4 md:px-0 xl:pl-32 md:pl-16 xl:pr-32 md:pr-16 flex flex-col md:items-start md:text-left items-center text-center"
		>
			<h1 class="md:text-5xl text-3xl mb-8 font-bold text-white">Sponsors</h1>
			{#each tiers as tier, tierNumber}
				<div class="mb-4 flex flex-row w-full items-center">
					<p class="leading-relaxed font-bold whitespace-nowrap">{tier.name}</p>
					<div class="border-b border-white border-dashed w-full ml-4 opacity-30" />
					<p class="whitespace-nowrap ml-4 opacity-30">Tier {tierNumber}</p>
				</div>
				<div
					class="flex flex-col md:flex-row items-center justify-center w-full md:m-6 border-l border-white/30"
				>
					{#each sponsors.filter((x) => x.tier.includes(tier.id)) as sponsor}
						<a href={sponsor.url} rel="noopener noreferrer" target="_blank" alt="link to">
							<img
								class="w-60 m-6"
								src="/photos/sponsors/{sponsor.id}.png"
								alt="{sponsor.name} Logo"
							/>
						</a>
					{/each}
				</div>
			{/each}
		</div>
	</div>
</section>
