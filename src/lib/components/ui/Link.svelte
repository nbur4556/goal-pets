<script lang="ts">
	export let to: string;
	export let exClass = '';
</script>

<a href={to} class={`text-blue-400 hover:text-blue-300 ${exClass}`}><slot /></a>
