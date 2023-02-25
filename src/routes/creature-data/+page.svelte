<script lang="ts">
	import { creature } from '@src/stores';
</script>

<main>
	<h1>{$creature.name}</h1>
	<p>Type: {$creature.type}</p>
	<p>{$creature.description}</p>
</main>
