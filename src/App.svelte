<script>
	import SocialMediaButton from "./SocMediaButton.svelte"
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
		Beat Saber Modder
	</h3>
	<button>
		<img class="socMediaImage" src="./images/icon_clyde_white_RGB.png" alt="bruh"/>
	</button>
</main>

<style>
	.socMediaImage {
		height: 65%;
		width: auto;
		border-radius: 4px;
	}
	button {
		background-color: #5865F2;
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