<script>
	export let value = 'Submit';
	export let testId = 'submit-button';
</script>

<!-- // TODO Reuse button styles -->
<input
	type="submit"
	{value}
	class="rounded-lg border-2 py-2 px-8 hover:bg-gray-200"
	data-testid={testId}
/>
