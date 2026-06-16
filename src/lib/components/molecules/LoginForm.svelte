<script lang="ts">
	import { Input, Password } from '$lib/components/atoms';

	let username = '';
	let password = '';

	function handleSubmit(e: Event) {
		e.preventDefault();
		// Handle login logic here
		console.log('Logging in with', { username, password });
	}
</script>

<form onsubmit={handleSubmit}>
	<div>
		<Input placeholder="Username" bind:value={username} />
	</div>
	<div>
		<Password placeholder="Password" bind:value={password} />
	</div>
	<div>
		<button type="submit">Login</button>
	</div>
</form>
