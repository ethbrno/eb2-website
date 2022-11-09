/** @type {import('./$types').PageLoad} */

import events from '$lib/events.json';
import { contributorTypes, contributors } from '$lib/data.json';
export const prerender = true;

export async function load() {
    events.sort(function (a, b) {
        return new Date(a.datetime) - new Date(b.datetime);
    });
    //console.log(sortedEvents)
    return { events, contributors };
}
