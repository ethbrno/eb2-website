<script>
	import '../app.css';
	import Navigation from '$lib/Navigation.svelte';
	import Footer from '$lib/Footer.svelte';

	export let data;
</script>

<Navigation open={false} />
<slot />
<Footer data={data} />