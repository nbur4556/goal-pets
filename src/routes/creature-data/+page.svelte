<script lang="ts">
	import { creature } from '@src/stores';
	import TempCreature from '@src/components/creatures/TempCreature.svelte';
	import PageContent from '@src/components/ui/PageContent.svelte';
</script>

<PageContent>
	<div class="flex col-span-2 justify-center">
		<div class="w-32">
			<TempCreature />
		</div>
	</div>

	<h1 class="text-center">Name: {$creature.name}</h1>
	<p class="text-center">Type: {$creature.type}</p>
	<p class="text-center col-span-2">{$creature.description}</p>
</PageContent>
