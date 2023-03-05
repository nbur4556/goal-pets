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
		<InputText name="username">Username:</InputText>
		<InputPassword name="password">Password:</InputPassword>
		<InputPassword name="confirmPassword">Confirm Password:</InputPassword>
		<InputSubmit />
	</form>
</PageContent>
