<script>
	import '../app.css';
	import Navigation from '$lib/Navigation.svelte';
	import Footer from '$lib/Footer.svelte';
</script>

<Navigation open={false} />
<slot />
<Footer  />