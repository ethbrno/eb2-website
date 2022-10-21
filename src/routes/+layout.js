/** @type {import('./$types').PageLoad} */
export const prerender = true;

export async function load() {
    return {
        title: 'ETHBrno² 2022'
    }
}