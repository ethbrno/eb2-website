/** @type {import('./$types').PageLoad} */
export const prerender = true;

export async function load({ fetch }) {
    //const { spec } = await fetch('https://spec.utxo.cz/22/bundle.json').then((r) => r.json());
    const { contributors, sponsors } = await fetch(`data.json`).then((r) => r.json());

    //console.log(contributors);
    return {
        data: {contributors, sponsors}
    };
}