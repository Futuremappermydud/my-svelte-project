<script>
	import { Modal } from "carbon-components-svelte";
	import SocialMediaButton from "./SocMediaButton.svelte"
	let open = false;
	let discModalOpen = false;
</script>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://unpkg.com/carbon-components-svelte/css/g90.css"
  />
</svelte:head>

<main>
	<h1 class="orange">
		Future Mapper
	</h1>
	<h3 class="gray">
		Game Modder / Reverse Engineer
	</h3>
	<button class="discord" on:click={() => (discModalOpen = true)}>
		<img class="socMediaImage" src="https://raw.githubusercontent.com/Futuremappermydud/my-svelte-project/main/src/Images/icon_clyde_white_RGB.png?token=AM6HQMCFCXEKXLU6TFERVF3BUPL7U" alt="bruh"/>
	</button>
	<br/>
	<button class="github" on:click={() => (open = true)}>
		<img class="socMediaImage" src="" alt="bruh"/>
	</button>
	<Modal
		bind:open
		modalHeading="Create database"
		primaryButtonText="Confirm"
		secondaryButtonText="Cancel"
		on:click:button--secondary={() => (open = false)}
		on:open
		on:close
		on:submit
	>
		<p>Create a new Cloudant database in the US South region.</p>
	</Modal>
</main>

<style>
	.socMediaImage {
		height: 65%;
		width: auto;
		border-radius: 4px;
	}
	button {
		color: red;
		width: 120px;
		height: 120px;
		margin: 0;
		border: none;
		border-radius: 4px;
	}
	button:active {
		background-color: #727df7;
		color: red;
		width: 120px;
		height: 120px;
		margin: 0;
		border: none;
		border-radius: 4px;
	}
	.discord
	{
		background-color: #5865F2;
	}
	.discord:active
	{
		background-color: #6b76ee;
	}
	.github
	{
		background-color: #000000;
	}
	.github:active
	{
		background-color: #464646;
	}
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;	
		margin: 0 auto;
	}

	.orange {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	.gray {
		color: #6a6a6a;
		text-transform: uppercase;
		font-size: 1.5aem;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}

	:global(body) {
		background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100' preserveAspectRatio='none'%3E%3Cpolygon points='0,100 100,0 100,100' style='fill:%23202020%3B' /%3E%3C/svg%3E");
	}
</style>