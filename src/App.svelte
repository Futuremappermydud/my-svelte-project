<script>
	import { Modal } from "carbon-components-svelte";
	let ghModal = false;
	let discModal = false;
	let twitModal = false;
</script>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://unpkg.com/carbon-components-svelte/css/g90.css"
  />
</svelte:head>

<main>
	<Modal
		size=xs
		bind:open={discModal}
		modalHeading="Discord"
		passiveModal
		on:open
		on:close
	>
		<p style="color: #808080; font-weight: bold; font-size: 1.25em;">FutureMapper#3488</p>
	</Modal>
	<Modal
		size=xs
		bind:open={twitModal}
		modalHeading="Twitter"
		passiveModal
		on:open
		on:close
	>
		<a href="https://twitter.com/Futuremapper_" style="color: #3266ba; font-weight: bold; font-size: 1.25em;">Futuremappermydud</a>
	</Modal>
	<Modal
		size=xs
		bind:open={ghModal}
		modalHeading="Github"
		passiveModal
		on:open
		on:close
	>
		<a href="https://github.com/Futuremapper" style="color: #3266ba; font-weight: bold; font-size: 1.25em;">Futuremappermydud</a>
	</Modal>
	<h1>
		Future Mapper
	</h1>
	<h2>
		Game Modder / Reverse Engineer
	</h2>
	<div class="DividerHoriz"/>
	<div class="Buttons">
		<button class="discord" on:click={() => (discModal = true)}>
			<img class="socMediaImage" src="https://raw.githubusercontent.com/Futuremappermydud/my-svelte-project/main/src/Images/DiscordLogo.png" alt="Discord"/>
		</button>
		<div class="DividerVert"/>
		<button class="github" on:click={() => (ghModal = true)}>
			<img class="socMediaImage" src="https://raw.githubusercontent.com/Futuremappermydud/my-svelte-project/main/src/Images/GithubLogo.png" alt="Github"/>
		</button>
		<div class="DividerVert"/>
		<button class="twitter" on:click={() => (twitModal = true)}>
			<img class="socMediaImage" src="https://raw.githubusercontent.com/Futuremappermydud/my-svelte-project/main/src/Images/TwitterLogo.png" alt="Twitter"/>
		</button>
	</div>
</main>

<style lang="scss">
	@import './vars';
	.Buttons
	{
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: center;
	}
	.DividerVert
	{
		border-left:$Divider-Width solid $Divider-Color;
		height: $DividerVert-Length;
		border-radius: 4px;
	}
	.DividerHoriz
	{
		border-top:$Divider-Width solid $Divider-Color;
		width: $DividerHoriz-Length;
		border-radius: 4px;
		margin: auto;
		margin-bottom: 5px;
		margin-top: 10px;
	}
	.socMediaImage {
		height: 65%;
		width: auto;
		border-radius: 4px;
		-webkit-user-drag: none;
		user-select: none;
		-moz-user-select: none;
		-webkit-user-select: none;
		-ms-user-select: none;
	}
	button {
		width: 120px;
		height: 120px;
		margin: 0;
		border: none;
		border-radius: 4px;
		margin-top: 5px;
		margin-left: 10px;
		margin-right: 10px;
	}
	.discord
	{
		background-color: $DiscordLogo-Color;
		&:active
		{
			background-color: $DiscordLogo-ColorSelected;
		}
	}
	.github
	{
		background-color: $GithubLogo-Color;
		&:active
		{
			background-color: $GithubLogo-ColorSelected;
		}
	}
	.twitter
	{
		background-color: $TwitterLogo-Color;
		&:active
		{
			background-color: $TwitterLogo-ColorSelected;
		}
	}
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;	
		margin: 0 auto;
	}

	h1 {
		color: $Header-Color;
		text-transform: uppercase;
		font-size: $Header-Size;
		font-weight: 100;
	}

	h2 {
		color: $SubHeader-Color;
		text-transform: uppercase;
		font-size: $SubHeader-Size;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}

	:global(body) {
		background-color: #262626;
		background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100' preserveAspectRatio='none'%3E%3Cpolygon points='0,100 100,0 100,100' style='fill:%23202020%3B' /%3E%3C/svg%3E");
	}
</style>