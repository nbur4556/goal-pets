<script lang="ts">
	import { creature } from '@src/stores';
	import TempCreature from '@src/components/creatures/TempCreature.svelte';
</script>

<main class="flex justify-center">
	<section class="grid grid-cols-2 gap-2 m-10 w-8/12">
	  <div class="flex col-span-2 justify-center">
	    <div class="w-32">
        <TempCreature />
      </div>
	  </div>
  
  	<h1 class="text-center">Name: {$creature.name}</h1>
    <p class="text-center">Type: {$creature.type}</p>
  	<p class="text-center col-span-2">{$creature.description}</p>
	</section>
</main>
