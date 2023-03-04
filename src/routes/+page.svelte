<script lang="ts">
	import { Link, PageContent } from '@src/lib/components/ui/index.svelte';
	import { paths } from '@src/lib/paths';
	import { account } from '@src/stores';
</script>

<PageContent>
	{#if $account?.username}
		<h1 class="text-center">Welcome to Goal Pets {$account.username}!</h1>
	{:else}
		<h1 class="text-center">Welcome to Goal Pets!</h1>
	{/if}

	<Link to={paths.creature.create} exClass="text-center">Create your Goal Pet now!</Link>
</PageContent>
