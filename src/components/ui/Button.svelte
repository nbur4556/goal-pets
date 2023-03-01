<script lang="ts">
	export let onClick: () => void;
	export let exClass = '';
</script>

<button on:click={onClick} class={`rounded-lg border-2 py-2 px-8 hover:bg-gray-200 ${exClass}`}>
	<slot />
</button>
