<script lang="ts">
	import { enhance } from '$app/forms';

	import { InputSubmit, Link, PageContent } from '@src/lib/components/ui/index.svelte';
	import { paths } from '@src/lib/paths';
	import { account } from '@src/stores';

	import type { PageData } from './$types';

	export let data: PageData;
</script>

<PageContent>
	<h1 data-testid="welcome-message">Welcome {$account?.displayName || 'Player'}!</h1>
	<Link to={paths.app.creature.create}>Create a new Creature!</Link>

	<h2>Your Creatures</h2>
	<ul>
		{#each data.creatures as creature}
			<li>{'>>'} {creature.name} - {creature.description}</li>
		{/each}
	</ul>

	<form method="POST" use:enhance={() => account.set(undefined)}>
		<InputSubmit value="Logout" />
	</form>
</PageContent>
