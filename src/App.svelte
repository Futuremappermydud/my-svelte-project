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
		<img class="socMediaImage" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjcuMTQgOTYuMzYiPjxkZWZzPjxzdHlsZT4uY2xzLTF7ZmlsbDojZmZmO308L3N0eWxlPjwvZGVmcz48ZyBpZD0i5Zu+5bGCXzIiIGRhdGEtbmFtZT0i5Zu+5bGCIDIiPjxnIGlkPSJEaXNjb3JkX0xvZ29zIiBkYXRhLW5hbWU9IkRpc2NvcmQgTG9nb3MiPjxnIGlkPSJEaXNjb3JkX0xvZ29fLV9MYXJnZV8tX1doaXRlIiBkYXRhLW5hbWU9IkRpc2NvcmQgTG9nbyAtIExhcmdlIC0gV2hpdGUiPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTEwNy43LDguMDdBMTA1LjE1LDEwNS4xNSwwLDAsMCw4MS40NywwYTcyLjA2LDcyLjA2LDAsMCwwLTMuMzYsNi44M0E5Ny42OCw5Ny42OCwwLDAsMCw0OSw2LjgzLDcyLjM3LDcyLjM3LDAsMCwwLDQ1LjY0LDAsMTA1Ljg5LDEwNS44OSwwLDAsMCwxOS4zOSw4LjA5QzIuNzksMzIuNjUtMS43MSw1Ni42LjU0LDgwLjIxaDBBMTA1LjczLDEwNS43MywwLDAsMCwzMi43MSw5Ni4zNiw3Ny43LDc3LjcsMCwwLDAsMzkuNiw4NS4yNWE2OC40Miw2OC40MiwwLDAsMS0xMC44NS01LjE4Yy45MS0uNjYsMS44LTEuMzQsMi42Ni0yYTc1LjU3LDc1LjU3LDAsMCwwLDY0LjMyLDBjLjg3LjcxLDEuNzYsMS4zOSwyLjY2LDJhNjguNjgsNjguNjgsMCwwLDEtMTAuODcsNS4xOSw3Nyw3NywwLDAsMCw2Ljg5LDExLjFBMTA1LjI1LDEwNS4yNSwwLDAsMCwxMjYuNiw4MC4yMmgwQzEyOS4yNCw1Mi44NCwxMjIuMDksMjkuMTEsMTA3LjcsOC4wN1pNNDIuNDUsNjUuNjlDMzYuMTgsNjUuNjksMzEsNjAsMzEsNTNzNS0xMi43NCwxMS40My0xMi43NFM1NCw0Niw1My44OSw1Myw0OC44NCw2NS42OSw0Mi40NSw2NS42OVptNDIuMjQsMEM3OC40MSw2NS42OSw3My4yNSw2MCw3My4yNSw1M3M1LTEyLjc0LDExLjQ0LTEyLjc0Uzk2LjIzLDQ2LDk2LjEyLDUzLDkxLjA4LDY1LjY5LDg0LjY5LDY1LjY5WiIvPjwvZz48L2c+PC9nPjwvc3ZnPg==" alt="bruh"/>
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