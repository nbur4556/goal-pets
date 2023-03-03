<script lang="ts">
	import { Link, PageContent } from '@src/components/ui/index.svelte';
  import type { PageData } from './$types';

  export let data: PageData;
</script>

<PageContent>
	<h1 class="text-center">Welcome to Goal Pets!</h1>
	<Link to="/create" exClass="text-center">Create your Goal Pet now!</Link>

	<!-- //!Temporary create account form for testing -->
	<form method="POST" action="?/createAccount">
		<input type="text" name="username" class="border" />
		<input type="submit" />
	</form>

  <!-- //! Temporary list of all accounts for testing -->
  {#if data.allAccounts}
    <ul>
      {#each data.allAccounts as account}
        <li>
          {account.id}: {account.username} -- {account.createdAt} -- {account.updatedAt}
        </li>
      {/each}
    </ul>
  {/if}
</PageContent>
