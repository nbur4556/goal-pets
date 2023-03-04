<script lang="ts">
	import { goto } from '$app/navigation';

	import { PageContent } from '@src/lib/components/ui/index.svelte';
	import type { CreatureClient } from '@src/lib/types/Creature';

	import EnterCreatureData from './EnterCreatureData.svelte';
	import SelectCreatureType from './SelectCreatureType.svelte';

	let step = 0;
	let type: string;

	const onSelectType = (selectType: string) => {
		type = selectType;
		step = 1;
	};

	const onSubmit = (values: Omit<CreatureClient, 'type'>) => {
		goto('/creature-data');
	};
</script>

{#if step === 0}
	<PageContent>
		<SelectCreatureType selectType={onSelectType} />
	</PageContent>
{:else if step === 1}
	<PageContent>
		<EnterCreatureData {type} onSubmitData={onSubmit} />
	</PageContent>
{/if}
