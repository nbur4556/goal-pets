<script lang="ts">
	import { goto } from '$app/navigation';

  import { InputSubmit, InputText, PageContent } from "@src/components/ui/index.svelte";

	import { creature } from '@src/stores';
	import type { CreatureType } from '@src/types/CreatureType';

	import SelectCreatureType from './SelectCreatureType.svelte';

	let step = 0;
	let type: string;
	let formValues: Omit<CreatureType, 'type'> = {
		name: '',
		description: '',
	};

	const onSelectType = (selectType: string) => {
		type = selectType;
		step = 1;
	};

	const onSubmit = () => {
		creature.update(() => ({ ...formValues, type }));
		goto('/creature-data');
	};
</script>

{#if step === 0}
  <PageContent>
    <SelectCreatureType selectType={onSelectType} />
  </PageContent>
{:else if step === 1}
  <PageContent>
    <form on:submit|preventDefault={onSubmit} class="flex flex-col gap-4">
      <InputText name="name" bind:value={formValues.name}>Name:</InputText>
      <InputText name="description" bind:value={formValues.description}>Description:</InputText>
      <InputSubmit />
    </form>
  </PageContent>
{/if}
