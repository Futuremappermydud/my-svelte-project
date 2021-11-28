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
		<img class="socMediaImage" src="<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 127.14 96.36"><defs><style>.cls-1{fill:#fff;}</style></defs><g id="图层_2" data-name="图层 2"><g id="Discord_Logos" data-name="Discord Logos"><g id="Discord_Logo_-_Large_-_White" data-name="Discord Logo - Large - White"><path class="cls-1" d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z"/></g></g></g></svg>" alt="bruh"/>
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