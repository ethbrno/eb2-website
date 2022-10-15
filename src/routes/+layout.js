/** @type {import('./$types').PageLoad} */
export const prerender = true;

import data from '$lib/data.json';

export async function load() {
    return {
        ...data,
        title: 'ETHBrno² 2022'
    }
}