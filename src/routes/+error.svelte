<script>
	import { page } from '$app/stores';

	import { Link, PageContent } from '@src/lib/components/ui/index.svelte';
	import { paths } from '@src/lib/paths';
</script>

<PageContent>
	<h1>
		Error {$page.status}:

		{#if $page.error?.message}
			{$page.error?.message}
		{:else}
			Error unknown
		{/if}
	</h1>

	<Link to={paths.home}>Return Home</Link>
</PageContent>
