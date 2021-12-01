<script>
    export let name = "Weather";
    export let desc = "Beat Saber mod that adds various weather effects to your game";
    export let link = "https://github.com/Futuremappermydud/Beat-Saber-Weather";
    export let icon = "https://raw.githubusercontent.com/Futuremappermydud/my-svelte-project/main/src/Images/WeatherCover.png";
    export function NewTab() {
        window.open(link, "_blank");
    }
</script>

<div class="tile" on:click={() => NewTab()} style="cursor:pointer; margin-top: 7.5px;">
    <div class="imgWrapper">
        <img src="{icon}" alt="icon">
    </div>
    <div class="meta">
        <p style="font-size: 1.75em;">{name}</p>
        <p style="font-size: 1em;">{desc}</p>
    </div>
</div>

<style lang="scss">
    .tile {
        font-size: 0.9em;
        margin: auto;
        border-radius: 8px;
        width: 350px;
        height: 100px;
        background-color: #4279df;
        display: flex;
        align-items: center;
        box-shadow: 0 3px 2px -2px #3d6fce;
        &:not(:active)
        {
            box-shadow: 0 4px 2px -2px #3d6fce;
        }
    }
    .imgWrapper
    {
        margin: auto;
        border-radius: 8px;
        width: 143.5px;
        height: 100px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    img {
        width: 80px;
        height: 80px;
        -webkit-user-drag: none;
		user-select: none;
		-moz-user-select: none;
		-webkit-user-select: none;
		-ms-user-select: none;
    }
    .meta {
        width: 100%;
        height: 100%;
        padding: 10px;
        text-align: left;
    }
</style>