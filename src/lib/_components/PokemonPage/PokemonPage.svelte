<script lang="ts">
    import { goto } from "$app/navigation";
    import { createEventDispatcher } from "svelte/internal";
    const dispatch = createEventDispatcher();

    import { TypeColors } from "$lib";
    import StatsBlock from "./StatsBlock.svelte";

    export var data : any;
    export var evoChain : any;

    const totalPkmn : number = 151;
    let type1 : string;
    let type2 : string;
    let stats : number[] = Array(6);
    $: {
        type1 = (data.types[0].type.name);
        type2 = (data.types.length > 1) ? data.types[1].type.name : type1;
        stats = getStats();

        console.log(data);
    }

    function getStats() {
        let newStats : number[] = Array(6);
        for (let i = 0; i < 6; i++) {
            newStats[i] = data.stats[i].base_stat;
        }
        return newStats;
    }

    function onTopNavigate(event: Event) {
        let btn : HTMLButtonElement = event.target as HTMLButtonElement;
        let slideX : number, route : string;
        if (btn.id === "prev") {
            slideX = 300;
            route = `./${data.id - 1}`;    
        }
        else {
            slideX = -300;
            route = `./${data.id + 1}`;    
        }
        dispatch('setSlideX', {slideX});
        goto(route, { noscroll : true });
    }
</script>

<div class="container my-3" style="--type1: {TypeColors[type1]};">
    <!-- Top NavBar -->
    <div id="pkmnNavBar" class="row mx-2 mt-4 py-3">
        <div class="col">
            {#if data.id != 1}
            <button id="prev" on:click={onTopNavigate}>Previous</button>
            {/if}
        </div>
        <div class="col">
            <h3>#{data.id}: {data.name}</h3>
        </div>
        <div class="col">
            {#if data.id != totalPkmn}
            <button id="next" on:click={onTopNavigate}>Next</button>
            {/if}
        </div>
    </div>

    <div class="row mx-2 mt-4 py-3">
        <div class="col p-0">
            <img src={data.sprites.other["official-artwork"].front_default} alt={data.name}>
        </div>
        <div class="col p-0">
            <StatsBlock stats={stats}/>
        </div>
    </div>
</div>

<style>
    .container {
        border: 2px solid black;
        border-radius: 10px;
        
        background-color: var(--type1);
    }

    #pkmnNavBar {
        border: 2px solid black;
        border-radius: 10px;

        background-color: white;
    }

    #pkmnNavBar > div.col {
        text-align: center;
    }

    img {
        border: 2px solid black;
        border-radius: 5px;
        background-color: white;
    }
</style>