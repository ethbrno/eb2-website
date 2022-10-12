/** @type {import('./$types').PageLoad} */
export async function load({ parent }) {
    const { data: { contributors } } = await parent();
    console.log(contributors);

    return contributors;
}