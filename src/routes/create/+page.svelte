<script lang="ts">
  interface FormValuesType {
    name: string;
    description: string;
    type: string;
  }

  let formValues: FormValuesType = {
    name: "",
    description: "",
    type: "",
  }

  const onSubmit = () => {
    console.log(formValues);
  }
</script>

<main>
  <h1>Create Your Goal Pet</h1>

  <form on:submit={onSubmit}>
    <label for="name">Name</label>
    <input type="text" name="name" bind:value={formValues.name} />

    <label for="description">Description</label>
    <input type="text" name="description" bind:value={formValues.description} />

    <label for="type">Goal Type</label>
    <select name="type" bind:value={formValues.type}>
      <option value=""></option>
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
</main>