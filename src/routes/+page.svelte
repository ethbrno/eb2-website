<svelte:head>
	<title>ETHBrno²</title>
</svelte:head>
<section class="text-gray-400 bg-black">
	<div class="w-full mx-auto flex md:flex-row md:h-5/6 flex-col items-center">
		<div
			class="lg:max-w-lg lg:w-full md:w-1/2 md:mb-0 mb-10 md:flex hidden justify-center h-[700px]"
		>
			<svg class="block w-full">
				<filter id="pixelate" x="0" y="0">
					<feFlood x="4" y="4" height="2" width="2" />

					<feComposite width="2" height="2" />

					<feTile result="a" />

					<feComposite in="SourceGraphic" in2="a" operator="in" />

					<feMorphology operator="erode" id="morph" radius="5" />
				</filter>
				<animate
					xlink:href="#morph"
					id="anim-dialiate"
					attributeName="radius"
					values="0;10;0"
					dur="5s"
					fill="freeze"
					repeatCount="indefinite"
				/>

				<image
					filter="url(#pixelate)"
					xlink:href="cam2.png"
					width="100%"
					height="100%"
					preserveAspectRatio="xMidYMid slice"
				/>
			</svg>
		</div>
		<div
			class="lg:flex-grow md:w-1/2 lg:pl-32 md:pl-16 pt-4 flex flex-col md:items-start md:text-left items-center text-center text-white transition-transform"
		>
			<img src="logo.svg" class="md:-ml-4 p-2 md:p-0  w-[343px] h-[127px]" alt="logo" />
			<p class="text-3xl my-2">privacy {`&`} security edition</p>
			<p class="text-xl">NOVEMBER 11-13, 2022</p>
			<p class="text-xl">Brno, Czech republic</p>
			<div class="h-[1px] bg-white w-full my-2 opacity-20" />
			<p class="mb-8 py-4 leading-relaxed opacity-50 text-lg font-light">
				#freedom #anonymity #non-kyc #encryption #selfsovereignty #p2p #opensource #web3
				#smartcontracts #audits #vulnerabilities #analytics #wallets #scams #darkforest #mev
				#zeroknowledgeproofs
			</p>
		</div>
	</div>
</section>
<section class="text-gray-600 bg-white body-font">
	<div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
		<div
			class="lg:flex-grow md:w-1/2 lg:pl-32 md:pl-16 lg:pr-32 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"
		>
			<h1 class="md:text-5xl text-3xl font-bold mb-4 text-black">About</h1>

			<p class="mb-8 leading-relaxed">
				ETHBrno² is an annual independent {`&`} open community hackathon (former conference) for supporters
				of decentralised finance, smart contracts and Web3 happening in Brno, Czech Republic. ETHBrno²
				is the second, and we believe the best yet, edition.
			</p>

			<p class="mb-8 leading-relaxed">
				ETHBrno² events are organized by Gwei.cz community with the help of the UTXO Foundation.
			</p>

			<p class="mb-8 leading-relaxed">This year we are focusing on privacy and security topics.</p>

			<div class="flex justify-center">
				<a
					href="https://join.ethbrno.cz/"
					class="inline-flex text-white bg-black border-0 py-2 px-6 focus:outline-none hover:bg-black  text-lg"
					>Apply To Hack</a
				>
				<a
					href="https://ethbrno.cz/sponsor-deck.pdf"
					target="_blank"
					rel="noopener noreferrer"
					class="ml-4 inline-flex text-black bg-white border-0 py-2 px-6 focus:outline-none hover:bg-gray-200  text-lg underline"
					>Sponsor</a
				>
			</div>
		</div>
		<div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
			<img class="object-cover object-center" alt="hero" src="key.png" />
		</div>
	</div>
</section>
<section class="text-gray-400 bg-black body-font">
	<div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
		<div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10 flex justify-center">
			<img class="object-cover object-center" alt="hero" src="lock.png" />
		</div>
		<div
			class="lg:flex-grow md:w-1/2 lg:pl-32 md:pl-16 lg:pr-32 md:pr-16 flex flex-col md:items-start md:text-left items-center text-center"
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
		</div>
	</div>
</section>
