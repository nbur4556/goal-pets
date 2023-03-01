<script lang='ts'>
  export let onClick: () => void;
  export let exClass: string = '';
</script>

<button on:click={onClick} class={`border-2 hover:bg-gray-200 py-2 px-8 rounded-lg ${exClass}`}><slot /></button>