<script lang="ts">
	export let name: string;
	export let value: string;
	export let testId = 'input';
</script>

<label for={name}><slot /></label>
<input type="text" class="border-b-2 p-1" {name} bind:value data-testid={testId} />
