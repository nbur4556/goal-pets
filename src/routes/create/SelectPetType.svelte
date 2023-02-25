<script lang="ts">
  export let selectType: (type: string) => void;
  
  let otherTypeSelected = false;
  let otherType = "";

  const showOtherType = () => otherTypeSelected = true;
</script>

<h1>New Creature</h1>

<p>Your creature is a representation of a goal you want to achieve</p>

<h2>Choose a goal type:</h2>

<ul>
  <li><button on:click={() => selectType("intellectual")}>Intellectual</button></li>
  <li><button on:click={() => selectType("physical")}>Physical</button></li>
  <li><button on:click={() => selectType("social")}>Social</button></li>
  <li><button on:click={() => selectType("financial")}>Financial</button></li>
  <li><button on:click={() => selectType("occupational")}>Occupational</button></li>
  <li><button on:click={() => selectType("spiritual")}>Spiritual</button></li>
  <li><button on:click={() => selectType("environmental")}>Environmental</button></li>
  <li><button on:click={() => selectType("emotional")}>Emotional</button></li>

  <li><button on:click={showOtherType}>Other</button></li>

  {#if otherTypeSelected === true}
    <form on:submit|preventDefault={() => selectType(otherType)}>
      <label for="type">Type name</label>
      <input type="text" name="type" bind:value={otherType} />
      <button type="submit">Submit</button>
    </form>
  {/if}
</ul>