<script lang="ts">
	import { creature } from '@src/stores';
	import TempCreature from '@src/components/creatures/TempCreature.svelte';
	import { PageContent } from '@src/components/ui/index.svelte';
</script>

<PageContent cols="2">
	<div class="col-span-2 flex justify-center">
		<div class="w-32">
			<TempCreature />
		</div>
	</div>

	<h1 class="text-center">Name: {$creature.name}</h1>
	<p class="text-center" data-testid="display-type">Type: {$creature.type}</p>
	<p class="col-span-2 text-center">{$creature.description}</p>
</PageContent>
