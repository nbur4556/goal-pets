<script lang="ts">
	import { enhance } from '$app/forms';

	import { InputSubmit, InputText } from '@src/lib/components/ui/index.svelte';

	export let appendFormData: (data: FormData) => void;
</script>

<form
	method="POST"
	action="?/createCreature"
	class="flex flex-col gap-4"
	use:enhance={({ data }) => appendFormData(data)}
>
	<InputText name="name" testId="name-input">Name:</InputText>
	<InputText name="description" testId="description-input">Description:</InputText>
	<InputSubmit />
</form>
