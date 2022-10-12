/** @type {import('./$types').PageLoad} */

export const prerender = true;

export async function load({fetch}) {
    const { spec } = await fetch('https://spec.utxo.cz/22/bundle.json').then((r) => r.json());
    //const { spec } = await fetch('/api/datafetch').then((r) => r.json());

    console.log(spec);
    return {
        data: spec
    };
}