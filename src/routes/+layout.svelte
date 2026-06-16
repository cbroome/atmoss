<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<h1>Atmoss - At Pro Simple Syndication</h1>

<header>
	<nav>
		<ul>
			<li><a href="/login">Login</a></li>
			<li><a href="/register">Register</a></li>
		</ul>
	</nav>
</header>

{@render children()}

<style lang="scss">
	header {
		background-color: #f8f8f8;
		padding: 1rem;
		border-bottom: 1px solid #e0e0e0;

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
