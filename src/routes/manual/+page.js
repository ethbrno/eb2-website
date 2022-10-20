/** @type {import('./$types').PageLoad} */

import { error } from '@sveltejs/kit';
import snarkdown from 'snarkdown';


export async function load({ fetch }) {
    const response = await fetch("https://raw.githubusercontent.com/ethbrno/docs/master/events/2022/hackathon/hacker-manual-wip.md").then((r) => r.text());
    //console.log(response);
    const compiledResponse = await snarkdown(response);
    //console.log('compiledResponse is: ', compiledResponse);
    return { content: compiledResponse };
}
