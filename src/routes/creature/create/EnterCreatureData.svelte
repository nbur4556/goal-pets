<script lang="ts">
	import { enhance } from '$app/forms';

	import { InputSubmit, InputText } from '@src/lib/components/ui/index.svelte';
	import type { CreatureClient } from '@src/lib/types/Creature';

	type TFormValues = Omit<CreatureClient, 'type'>;

	export let type: string;
	export let onSubmitData: (values: TFormValues) => void;

	let formValues: TFormValues = {
		name: '',
		description: '',
	};
</script>

<form
	method="POST"
	action="?/createCreature"
	class="flex flex-col gap-4"
	use:enhance={({ data }) => {
		data.append('type', type);
	}}
>
	<!-- //TODO: Remove values from input text -->
	<InputText name="name" bind:value={formValues.name} testId="name-input">Name:</InputText>
	<InputText name="description" bind:value={formValues.name} testId="description-input">
		Description:
	</InputText>
	<InputSubmit />
</form>
