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

    <p>Passwords must include:</p>
    <ul class="list-disc">
      <li>at least 8 characters</li>
      <li>lower case character</li>
      <li>upper case character</li>
      <li>number</li>
      <li>special character</li>
    </ul>

		<InputSubmit />
	</form>
</PageContent>
