<script lang="ts">
	import { creature } from '@src/stores';
  import TempCreature from '@src/components/creatures/TempCreature.svelte';
</script>

<main>
	<h1>{$creature.name}</h1>
	<p>Type: {$creature.type}</p>
	<p>{$creature.description}</p>

  <TempCreature />
</main>
