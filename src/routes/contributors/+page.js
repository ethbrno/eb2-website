/** @type {import('./$types').PageLoad} */
export async function load({ parent }) {
    const { data: { speakers } } = await parent();
    //console.log(speakers);

    return speakers;
}