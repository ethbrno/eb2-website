/** @type {import('./$types').PageLoad} */

import events from '$lib/events.json';
export const prerender = true;

export async function load() {
    return { events };
}
