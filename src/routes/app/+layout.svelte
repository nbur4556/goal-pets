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

{#if data.account}
	<slot />
{:else}
	<PageContent>
		<h1>Not Authenticated</h1>
		<Link to={paths.auth.login}>Login</Link>
		<Link to={paths.auth.register}>Register</Link>
		<Link to={paths.home}>Return Home</Link>
	</PageContent>
{/if}
