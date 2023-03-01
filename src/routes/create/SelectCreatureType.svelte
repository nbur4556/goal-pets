<script lang="ts">
  import Button from '@src/components/ui/Button.svelte';
  import InputSubmit from '@src/components/ui/InputSubmit.svelte';
  import InputText from '@src/components/ui/InputText.svelte';

	export let selectType: (type: string) => void;

	let otherTypeSelected = false;
	let otherType = '';

	const showOtherType = () => (otherTypeSelected = true);
</script>

<h1>New Creature</h1>

<p>Your creature is a representation of a goal you want to achieve</p>

<h2>Choose a goal type:</h2>

<ul class="grid grid-cols-3 gap-4">
	<li><Button onClick={() => selectType('intellectual')} exClass="w-full">Intellectual</Button></li>
  <li><Button onClick={() => selectType('physical')} exClass="w-full">Physical</Button></li>
	<li><Button onClick={() => selectType('social')} exClass="w-full">Social</Button></li>
	<li><Button onClick={() => selectType('financial')} exClass="w-full">Financial</Button></li>
	<li><Button onClick={() => selectType('occupational')} exClass="w-full">Occupational</Button></li>
	<li><Button onClick={() => selectType('spiritual')} exClass="w-full">Spiritual</Button></li>
	<li><Button onClick={() => selectType('environmental')} exClass="w-full">Environmental</Button></li>
	<li><Button onClick={() => selectType('emotional')} exClass="w-full">Emotional</Button></li>
	<li><Button onClick={showOtherType} exClass="w-full">Other</Button></li>
</ul>

{#if otherTypeSelected === true}
  <form on:submit|preventDefault={() => selectType(otherType)}>
    <InputText name="type" bind:value={otherType}>Type Name</InputText>
    <InputSubmit />
  </form>
{/if}