<script lang="ts">
	import { Link, PageContent } from '@src/lib/components/ui/index.svelte';
	import { paths } from '@src/lib/paths';
	import { account } from '@src/stores';

	import type { PageData } from './$types';

	export let data: PageData;

	if (data.account) {
		account.set(data.account);
	}
</script>

<!-- //TODO: Logout functionality -->
<PageContent>
	{#if $account}
		<h1 class="text-center">Welcome to Goal Pets {$account.displayName}!</h1>
		<Link to={paths.creature.create} exClass="text-center">Create your Goal Pet now!</Link>
	{:else}
		<h1 class="text-center">Welcome to Goal Pets!</h1>
		<Link to={paths.auth.register} exClass="text-center">Register</Link>
		<Link to={paths.auth.login} exClass="text-center">Login</Link>
	{/if}
</PageContent>
