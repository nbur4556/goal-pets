<script lang="ts">
	import { InputSubmit, InputText } from '@src/lib/components/ui/index.svelte';
	import type { Creature } from '@src/lib/types/Creature';

	type TFormValues = Omit<Creature, 'type'>;

	export let onSubmitData: (values: TFormValues) => void;

	let formValues: TFormValues = {
		name: '',
		description: '',
	};
</script>

<form on:submit|preventDefault={() => onSubmitData(formValues)} class="flex flex-col gap-4">
	<InputText name="name" bind:value={formValues.name} testId="name-input">Name:</InputText>
	<InputText name="description" bind:value={formValues.description} testId="description-input">
		Description:
	</InputText>
	<InputSubmit />
</form>
