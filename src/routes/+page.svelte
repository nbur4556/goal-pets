<script lang="ts">
	import { Link, PageContent } from '@src/lib/components/ui/index.svelte';
	import { paths } from '@src/lib/paths';
</script>

<PageContent>
	<h1 class="text-center">Welcome to Goal Pets!</h1>
	<Link to={paths.auth.register} exClass="text-center">Register</Link>
	<Link to={paths.auth.login} exClass="text-center">Login</Link>
</PageContent>
