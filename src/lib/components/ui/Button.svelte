<script lang="ts">
	export let onClick: () => void;
	export let exClass = '';
	export let testId = 'button';
</script>

<button
	on:click={onClick}
	class={`rounded-lg border-2 py-2 px-8 hover:bg-gray-200 ${exClass}`}
	data-testid={testId}
>
	<slot />
</button>
