# ETHBrno² Website

Website is created using [SvelteKit](https://kit.svelte.dev/) and deployed as a static application to these addresses:
* [ethbrno.cz](https://ethbrno.cz) (self-hosted @ [gwei.cz](https://gwei.cz))
* [mirror.ethbrno.cz](https://mirror.ethbrno.cz/) (mirror @ [Netlify](https://www.netlify.com/))
* IPFS network - the url is changing (example: [bafybeiddx4e2yyur3kjyppcvcg2nb7yxrxs2b2y7lfe4pgekgwpjwtsh7y.ipfs.gwei.cz](https://bafybeiddx4e2yyur3kjyppcvcg2nb7yxrxs2b2y7lfe4pgekgwpjwtsh7y.ipfs.gwei.cz))

The [IPFS](https://ipfs.io/) addresses of the major versions are stored directly in the `ethbrno.eth` [ENS](https://ens.domains/) record. You can access the site using these gateways:
* [ethbrno.eth.link](https://ethbrno.eth.link)
* [ethbrno.eth.limo](https://ethbrno.eth.limo)

Site is configured to prerender all content and refresh the data from Arweave. Publishing script is named upload-data and require your own Arweave wallet (whole JSON string) as an AR parameter in the environment, like `AR={"kty":"RSA","n":....`. IPFS publishing is not prepared out of the box, but it basically takes output of `/build` and send it to the ipfs pinning service like Pinata. We are using self hosted server for this.

## Authors
* [vorcigernix](https://github.com/vorcigernix) & [tree](https://github.com/burningtree)
