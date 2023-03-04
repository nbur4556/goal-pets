<script lang="ts">
	import TempCreature from '@src/lib/components/creatures/TempCreature.svelte';
	import { PageContent } from '@src/lib/components/ui/index.svelte';

	import type { PageData } from './$types';

  export let data: PageData;
</script>

<PageContent cols="2">
	<div class="col-span-2 flex justify-center">
		<div class="w-32">
			<TempCreature />
		</div>
	</div>

	<h1 class="text-center" data-testid="display-name">
		Name: {data.creature.name}
	</h1>
	<p class="text-center" data-testid="display-type">Type: {data.creature.type}</p>
	<p class="col-span-2 text-center" data-testid="display-description">
		{data.creature.description}
	</p>
</PageContent>
