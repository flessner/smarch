<script>
	import 'trauben-ui/src/trauben.css';
	import { Header, HeaderNav, HeaderNavLink, Row, Sidebar, Content } from 'trauben-ui';
	import { onMount } from 'svelte';

	onMount(() => {
		console.log(window);
	});
</script>

<Header company="SMARCH">
	<HeaderNav>
		<HeaderNavLink>Hello</HeaderNavLink>
	</HeaderNav>
</Header>
<Row>
	<Sidebar />
	<Content>
		<slot />
	</Content>
</Row>

<style>
	@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap');
	@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=IBM+Plex+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap');

	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>
