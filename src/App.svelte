<script>
	import { Modal } from "carbon-components-svelte";
	import Spacer from "./Components/Spacer.svelte";
	import ProjectTile from "./Components/ProjectTile.svelte";
	import { InlineNotification } from "carbon-components-svelte";
	let ghModal = false;
	let discModal = false;
	let twitModal = false;
	export let fadeHeader = false;
	let projects = [
		{
			"name": "Weather",
			"desc": "Beat Saber mod that adds various weather effects to your game",
			"icon": "https://raw.githubusercontent.com/Futuremappermydud/my-svelte-project/main/src/Images/WeatherCover.png",
			"link": "https://github.com/Futuremappermydud/Beat-Saber-Weather"
		},
		{
			"name": "Song Music Visualizer",
			"desc": "Beat Saber mod that adds a music visualizer to your menu",
			"icon": "https://raw.githubusercontent.com/Futuremappermydud/my-svelte-project/main/src/Images/SpectrogramImage.png",
			"link": "https://github.com/Futuremappermydud/Song-Music-Visualizer"
		},
		{
			"name": "Better Song Search Quest",
			"desc": "Beat Saber mod that adds a better way to find new songs.",
			"icon": "https://raw.githubusercontent.com/Futuremappermydud/my-svelte-project/main/src/Images/MagnifyingGlass.png",
			"link": "https://github.com/Futuremappermydud/Song-Music-Visualizer"
		}
	]
</script>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://unpkg.com/carbon-components-svelte/css/g90.css"
  />
</svelte:head>
<main>
	<div class="bg"></div>
	<InlineNotification
		kind="info-square"
		title="WIP"
		subtitle="This site is still being worked on :)"
		timeout=3000
		style="position: absolute; width: 500px"
	/>
	{#if ghModal || discModal || twitModal}
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
			<a href="https://twitter.com/Futuremapper_/" target="_blank" rel="noreferrer noopener" style="color: #3266ba; font-weight: bold; font-size: 1.25em;">Futuremappermydud</a>
		</Modal>
		<Modal
			size=xs
			bind:open={ghModal}
			modalHeading="Github"
			passiveModal
			on:open
			on:close
		>
			<a href="https://github.com/Futuremapper/" target="_blank" rel="noreferrer noopener" style="color: #3266ba; font-weight: bold; font-size: 1.25em;">Futuremappermydud</a>
		</Modal>
	{/if}
	{#if fadeHeader}
	<div class="headerParent headerBG">
		<h1 class="mainHeader">
			Future Mapper
		</h1>
	</div>
	{:else}
	<div class="headerParent">
		<h1 class="mainHeader">
			Future Mapper
		</h1>
	</div>
	{/if}
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
	<Spacer height=150/>
	<h1>Projects</h1>
	<div style="margin: 10px;">
		{#each projects as project}
			<ProjectTile
				name = {project.name}
				desc = {project.desc}
				link = {project.link}
				icon = {project.icon}
			/>
		{/each}
	</div>

</main>

<style lang="scss">
	//Text

	//Header
	$Header-Color: #ff3e00;
	$Header-Size: 4em;

	//SubHeader
	$SubHeader-Color: #6a6a6a;
	$SubHeader-Size: 1.5em;

	//Info
	$Info-Color: #FFFFFF;
	$Info-Size: 1em;

	//Logos

	//Discord
	$DiscordLogo-Color: #5865F2;
	$DiscordLogo-ColorSelected: #4751c0;

	//Github
	$GithubLogo-Color: #000000;
	$GithubLogo-ColorSelected: #1d1d1d;

	//Twitter
	$TwitterLogo-Color: #1DA1F2;
	$TwitterLogo-ColorSelected: rgb(31, 128, 189);

	//Misc

	//Divider
	$Divider-Color: #80808050;
	$Divider-Width: 2px;
	$DividerVert-Length: 130px;
	$DividerHoriz-Length: 410px;
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
		cursor:pointer;
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

	.headerParent {
		top: 0px;
		position: -webkit-sticky;
		position: sticky;
	}

	.headerBG {
		background-color: rgba(0, 0, 0, 0.25);
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}

	.bg {
		position: absolute;
        z-index: 1;
        background: black;
        width: 100%;
        height: 100%;
        animation: fadeInAnimation ease 1.5s;
		animation-iteration-count: 1;
		animation-fill-mode: forwards;
	}
	@keyframes fadeInAnimation {
    0% {
        opacity: 1;
    }
	90% {
		visibility: visible;
	}
    100% {
        opacity: 0;
		visibility: hidden;
     }
}

	:global(body) {
		background-color: #262626;
		background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100' preserveAspectRatio='none'%3E%3Cpolygon points='0,100 100,0 100,100' style='fill:%23202020%3B' /%3E%3C/svg%3E");
	}
</style>