<script lang="ts">
	import { Link, PageContent } from '@src/lib/components/ui/index.svelte';
	import { account } from '@src/stores';

	import type { PageData } from './$types';

	export let data: PageData;
</script>

<PageContent>
	{#if $account?.username}
		<h1 class="text-center">Welcome to Goal Pets {$account.username}!</h1>
	{:else}
		<h1 class="text-center">Welcome to Goal Pets!</h1>
	{/if}
	<Link to="/create" exClass="text-center">Create your Goal Pet now!</Link>

	<!-- //!Temporary login form for testing -->
	<!-- //TODO: Do not reload on submit -->
	<form method="POST" action="?/loginAccount">
		<input type="text" name="username" class="border" />
		<input type="submit" value="Login" class="border" />
	</form>

	<!-- //!Temporary create account form for testing -->
	<form method="POST" action="?/createAccount">
		<input type="text" name="username" class="border" />
		<input type="submit" value="Register" class="border" />
	</form>

	<!-- //! Temporary list of all accounts for testing -->
	{#if data.accounts}
		<ul>
			{#each data.accounts as account}
				<li>
					{account.id}: {account.username} -- {account.createdAt} -- {account.updatedAt}
				</li>
			{/each}
		</ul>
	{/if}
</PageContent>
