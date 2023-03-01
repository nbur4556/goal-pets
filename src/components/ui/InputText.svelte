<script lang="ts">
	export let name: string;
	export let value: string;
</script>

<label for={name}><slot /></label>
<input type="text" class="border-b-2 p-1" {name} bind:value />
