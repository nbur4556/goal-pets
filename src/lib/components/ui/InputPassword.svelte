<script lang="ts">
	export let name: string;
	export let value: string | undefined = undefined;
	export let testId = 'password-input';
</script>

<label for={name}><slot /></label>
<input type="password" class="border-b-2 p-1" {name} bind:value data-testid={testId} />
