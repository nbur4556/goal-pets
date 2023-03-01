<script lang="ts">
	import { goto } from '$app/navigation';

  import { PageContent } from "@src/components/ui/index.svelte";
	import { creature } from '@src/stores';
	import type { CreatureType } from '@src/types/CreatureType';

  import EnterCreatureData from "./EnterCreatureData.svelte";
	import SelectCreatureType from './SelectCreatureType.svelte';

	let step = 0;
	let type: string;

	const onSelectType = (selectType: string) => {
		type = selectType;
		step = 1;
	};

	const onSubmit = (values: Omit<CreatureType, 'type'>) => {
		creature.update(() => ({ ...values, type }));
		goto('/creature-data');
	};
</script>

{#if step === 0}
  <PageContent>
    <SelectCreatureType selectType={onSelectType} />
  </PageContent>
{:else if step === 1}
  <PageContent>
    <EnterCreatureData onSubmitData={onSubmit} />
  </PageContent>
{/if}
