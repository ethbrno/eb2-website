/** @type {import('./$types').PageLoad} */

//import snarkdown from 'snarkdown';
import parse from "$lib/vsnarkdown"
import { base } from '$app/paths';

export async function load({ fetch }) {
    const response = await fetch(`${base}/hacker-manual.md`).then((r) => r.text());

    const compiledResponse = await parse(response);
    return { content: compiledResponse };
}
