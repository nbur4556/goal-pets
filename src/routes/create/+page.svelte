<script lang="ts">
  import { goto } from '$app/navigation';

  import { pet } from '../../stores'
	import type { PetType } from '../../types/PetType';

  import SelectPetType from "./SelectPetType.svelte";

  let step: number = 0;
	let formValues: PetType = {
		name: '',
		description: '',
		type: ''
	};

  //TODO: on select type sets the pet value and navigates to step 1

	const onSubmit = () => {
    pet.update(() => formValues);
    goto('/pet-data');
	};
</script>

<main>
  {#if step === 0}
    <SelectPetType />
  {:else if step === 1}
    <form on:submit|preventDefault={onSubmit}>
      <label for="name">Name</label>
      <input type="text" name="name" bind:value={formValues.name} />

      <label for="description">Description</label>
      <input type="text" name="description" bind:value={formValues.description} />

      <!-- //TODO: Remove goal type from form and use value from select pet type steps -->
      <label for="type">Goal Type</label>
      <select name="type" bind:value={formValues.type}>
        <option value="" />
        <option value="intellectual">Intellectual</option>
        <option value="physical">Physical</option>
        <option value="social">Social</option>
        <option value="financial">Financial</option>
        <option value="occupational">Occupational</option>
        <option value="spiritual">Spiritual</option>
        <option value="environmental">Environmental</option>
        <option value="emotional">Emotional</option>
        <option value="other">Other</option>
      </select>

      <button type="submit">Submit</button>
    </form>
  {/if}
	
</main>
