<script lang="ts">
  import { InputSubmit, InputText } from "@src/components/ui/index.svelte";
	import type { CreatureType } from '@src/types/CreatureType';

  type TFormValues = Omit<CreatureType, 'type'>

  export let onSubmitData: (values: TFormValues) => void;

	let formValues: TFormValues = {
    name: '',
    description: '',
  }
</script>

<form on:submit|preventDefault={() => onSubmitData(formValues)} class="flex flex-col gap-4">
  <InputText name="name" bind:value={formValues.name}>Name:</InputText>
  <InputText name="description" bind:value={formValues.description}>Description:</InputText>
  <InputSubmit />
</form>