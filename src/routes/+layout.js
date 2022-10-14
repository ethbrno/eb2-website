/** @type {import('./$types').PageLoad} */
//export const prerender = true;

export async function load({ fetch }) {
    //const { contributors, sponsors } = await fetch(`data.json`).then((r) => r.json());
    const { contributors, sponsors } = await fetch(`https://raw.githubusercontent.com/ethbrno/data/main/data.json`).then((r) => r.json());
    return {
        data: { contributors, sponsors }
    };
}