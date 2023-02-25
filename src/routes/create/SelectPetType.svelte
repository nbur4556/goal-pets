<script lang="ts">
  export let onSelectType: (type: string) => void;
</script>

<h1>New Creature</h1>

<p>Your creature is a representation of a goal you want to achieve</p>

<h2>Choose a goal type:</h2>

<ul>
  <!-- //? Can we use data values here? -->
  <li><button on:click={() => onSelectType("intellectual")}>Intellectual</button></li>
  <li><button on:click={() => onSelectType("physical")}>Physical</button></li>
  <li><button on:click={() => onSelectType("social")}>Social</button></li>
  <li><button on:click={() => onSelectType("financial")}>Financial</button></li>
  <li><button on:click={() => onSelectType("occupational")}>Occupational</button></li>
  <li><button on:click={() => onSelectType("spiritual")}>Spiritual</button></li>
  <li><button on:click={() => onSelectType("environmental")}>Environmental</button></li>
  <li><button on:click={() => onSelectType("emotional")}>Emotional</button></li>
  <!-- //TODO: if other is seleted, provide form to name that goal type -->
  <li><button on:click={() => onSelectType("other")}>Other</button></li>
</ul>