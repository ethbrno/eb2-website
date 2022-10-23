export const graphdata = async (tag) => {
    const docrequest = await fetch('https://arweave.net/graphql', {
        method: 'POST',
        headers: {
            'Accept-Encoding': 'gzip, deflate, br',
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Connection': 'keep-alive',
            'DNT': '1',
            'Origin': 'https://arweave.net'
        },
        body: JSON.stringify({
            'query': 'query getData($tag: String!) {\n  transactions(\n    tags: [\n      { name: "AppName", values: "ETHBrno" }\n      { name: "DataTag", values: [$tag] }\n    ]\n    first: 1\n  ) {\n    edges {\n      node {\n        id  \n      }\n    }\n  }\n}\n',
            'variables': {
                'tag': tag
            }
        })
    }).then(r => r.json());
    const {
        data: {
            transactions: { edges }
        }
    } = docrequest;
    if (edges.length < 0) return null;
    const response = await fetch(`https://arweave.net/${edges[0].node.id}`);
    return (tag === "json" ? await response.json() : await response.text());

};