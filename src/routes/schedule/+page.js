/** @type {import('./$types').PageLoad} */

import events from '$lib/events.json';
import { contributorTypes, contributors } from '$lib/data.json';
export const prerender = true;

export async function load() {
    return { events, contributors };
}
