<script lang="ts">
	import { enhance } from '$app/forms';

	import { InputSubmit, InputText } from '@src/lib/components/ui/index.svelte';
	
  export let type: string;
</script>

<form
	method="POST"
	action="?/createCreature"
	class="flex flex-col gap-4"
	use:enhance={({ data }) => {
		data.append('type', type);
	}}
>
	<InputText name="name" testId="name-input">Name:</InputText>
	<InputText name="description" testId="description-input">
		Description:
	</InputText>
	<InputSubmit />
</form>
