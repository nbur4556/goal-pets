<script lang="ts">
	import { PageContent } from '@src/lib/components/ui/index.svelte';

	import EnterCreatureData from './EnterCreatureData.svelte';
	import SelectCreatureType from './SelectCreatureType.svelte';

	let step = 0;
	let type: string;

	const onSelectType = (selectType: string) => {
		type = selectType;
		step = 1;
	};

	const onSubmit = (data: FormData) => {
		data.append('type', type);
	};
</script>

{#if step === 0}
	<PageContent>
		<SelectCreatureType selectType={onSelectType} />
	</PageContent>
{:else if step === 1}
	<PageContent>
		<EnterCreatureData appendFormData={onSubmit} />
	</PageContent>
{/if}
