/** @type {import('./$types').PageLoad} */
import { base } from '$app/paths';
import { marked } from 'marked';

marked.setOptions({ gfm: true });
export async function load({ fetch }) {
    const response = await fetch(`${base}/hacker-manual.md?${Date.now()}`).then((r) => r.text());

    const compiledResponse = await marked.parse(response);
    return { content: compiledResponse };
}
