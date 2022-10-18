/** @type {import('./$types').PageLoad} */

function wrapContributor(c) {
    if (c.twitter) {
        c.link = "https://twitter.com/" + c.twitter;
    }
    return c;
}

export async function load({ parent, params }) {
    let { type } = params;
    type = type.replace(/s?\//, "");
    //console.log(type);
    let data = await parent();
    if (type === "") {
        const filtered_contributors = Object.values(data.contributors).map(
            wrapContributor,
        );
        return { filtered_contributors, type };
    } else {
        const filtered_contributors = Object.values(data.contributors).filter((x) =>
            x.roles.includes(type)
        ).map(wrapContributor);
        return { filtered_contributors, type };
    }
}
