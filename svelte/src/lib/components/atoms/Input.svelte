<script lang="ts">
	let { placeholder = $bindable(''), value = $bindable(''), callback = () => {} } = $props();

	function handleInput(event: Event) {
		const target = event.target as HTMLInputElement;
		value = target.value;

		if (callback) {
			callback(value);
		}
	}
</script>

<input type="text" class="input" {placeholder} bind:value on:input={handleInput} />
