<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import { resolve } from '$app/paths';

	import './app.css';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<header>
	<h1><a href={resolve('/')}>Atmoss - At Pro Simple Syndication</a></h1>

	<nav>
		<ul>
			<li><a href={resolve('/login')}>Login</a></li>
			<li><a href={resolve('/register')}>Register</a></li>
		</ul>
	</nav>
</header>

{@render children()}

<style lang="scss">
	header {
		background-color: #f8f8f8;
		padding: 1rem;
		border-bottom: 1px solid #e0e0e0;

		display: flex;
		justify-content: space-between;

		nav ul {
			list-style: none;
			display: flex;
			gap: 1rem;
			padding: 0;
			margin: 0;

			li {
				a {
					text-decoration: none;
					color: #333;

					&:hover {
						text-decoration: underline;
					}
				}
			}
		}
	}

	main {
		padding: 2rem;
	}
</style>
