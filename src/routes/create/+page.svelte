<script lang="ts">
  import { goto } from '$app/navigation';

  import { pet } from '../../stores'
	import type { PetType } from '../../types/PetType';

  import SelectPetType from "./SelectPetType.svelte";

  let step: number = 0;
  let type: string;
	let formValues: Omit<PetType, "type"> = {
		name: '',
		description: '',
	};

  //TODO: on select type sets the pet value and navigates to step 1
  const onSelectType = (selectType: string) => {
    type = selectType;
    step = 1;
  }

	const onSubmit = () => {
    pet.update(() => ({...formValues, type}));
    goto('/pet-data');
	};
</script>

<main>
  {#if step === 0}
    <SelectPetType {onSelectType} />
  {:else if step === 1}
    <form on:submit|preventDefault={onSubmit}>
      <label for="name">Name</label>
      <input type="text" name="name" bind:value={formValues.name} />

      <label for="description">Description</label>
      <input type="text" name="description" bind:value={formValues.description} />

      <button type="submit">Submit</button>
    </form>
  {/if}
	
</main>
