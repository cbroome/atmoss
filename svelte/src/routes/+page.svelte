<script lang="ts">
	let data: {
		countries: { name: string }[];
	} = $props();
</script>

<div>RSS on AT Protocol</div>

<ul>
	{#each data.countries as country (country.name)}
		<li>{country.name}</li>
	{/each}
</ul>
