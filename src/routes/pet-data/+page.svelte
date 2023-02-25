<script lang="ts">
  import { pet } from '../../stores';
</script>

<main>
  <h1>{$pet.name}</h1>
  <p>Type: {$pet.type}</p>
  <p>{$pet.description}</p>
</main>