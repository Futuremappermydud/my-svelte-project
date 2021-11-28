import App from './App.svelte';
const app = new App({
	target: document.body,
	props: {
	}
});

const checkpoint = 20;

	function rgb(r, g, b, a){
		return "rgb("+r+","+g+","+b+","+a+")";
	}

	window.addEventListener("scroll", () => {
		const currentScroll = window.pageYOffset;
		let color;
		if (currentScroll <= checkpoint) {
			app.$$set({fadeHeader: false});

		} else {
			app.$$set({fadeHeader: true});
		}
});

export default app;