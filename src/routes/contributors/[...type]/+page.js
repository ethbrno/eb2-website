/** @type {import('./$types').PageLoad} */

import { error } from '@sveltejs/kit';
import { contributorTypes, contributors } from '$lib/data.json';
export const prerender = true;

export async function load({ params }) {
    let type = params.type.replace(/\//, "");
    if (!type.trim()) {
        type = 'all'
    }

    const typeConfig = contributorTypes[type]
    if (!typeConfig) {
        throw error(404, 'Not found');
    }

    return { type, typeConfig, contributors, contributorTypes }
}
