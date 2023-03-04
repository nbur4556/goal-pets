<script lang="ts">
	import { Button, InputSubmit, InputText } from '@src/lib/components/ui/index.svelte';

	export let selectType: (type: string) => void;

	let otherTypeSelected = false;
	let otherType = '';

	const types = [
		'intellectual',
		'physical',
		'social',
		'financial',
		'occupational',
		'spiritual',
		'environmental',
		'emotional',
	];

	const showOtherType = () => (otherTypeSelected = true);
</script>

<h1>New Creature</h1>

<p data-testid="page-description">
	Your creature is a representation of a goal you want to achieve
</p>

<h2 data-testid="page-subheading">Choose a goal type:</h2>

<ul class="grid grid-cols-3 gap-4">
	{#each types as type}
		<li>
			<Button onClick={() => selectType(type)} exClass="w-full" testId={`${type}-type`}>
				{type.charAt(0).toUpperCase() + type.slice(1)}
			</Button>
		</li>
	{/each}

	<li>
		<Button onClick={showOtherType} exClass="w-full" testId="other-type">Other</Button>
	</li>
</ul>

{#if otherTypeSelected === true}
	<form on:submit|preventDefault={() => selectType(otherType)}>
		<InputText name="type" bind:value={otherType} testId="type-input">Type Name</InputText>
		<InputSubmit />
	</form>
{/if}
