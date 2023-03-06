<script>
	import { Link, PageContent } from '@src/lib/components/ui/index.svelte';
	import { paths } from '@src/lib/paths';
	import { account } from '@src/stores';
</script>

<!-- //TODO: Logout functionality -->
<PageContent>
	<h1>Welcome {$account?.displayName || 'Player'}!</h1>
	<Link to={paths.app.creature.create}>Create a new Creature!</Link>
</PageContent>
