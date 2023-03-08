<script>
	import {
		InputPassword,
		InputSubmit,
		InputText,
		PageContent,
	} from '@src/lib/components/ui/index.svelte';
</script>

<PageContent>
	<form method="POST" class="flex flex-col gap-4">
		<InputText name="username" testId="username">Username:</InputText>
		<InputPassword name="password" testId="password">Password:</InputPassword>
		<InputSubmit />
	</form>
</PageContent>
