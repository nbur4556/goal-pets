<script lang="ts">
	import { goto } from '$app/navigation';

	import PageContent from '@src/components/ui/PageContent.svelte';
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

<PageContent>
	{#if step === 0}
		<SelectCreatureType selectType={onSelectType} />
	{:else if step === 1}
		<form on:submit|preventDefault={onSubmit}>
			<label for="name">Name</label>
			<input type="text" name="name" bind:value={formValues.name} />

			<label for="description">Description</label>
			<input type="text" name="description" bind:value={formValues.description} />

      <!-- //TODO: Reuse button styles -->
      <input type="submit" class="border-2 hover:bg-gray-200 py-2 px-8 rounded-lg" />
		</form>
	{/if}
</PageContent>
