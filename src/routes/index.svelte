<script lang="ts">
    import { Pokerow, type IPokemon } from "$lib";
    import { onMount } from "svelte";

    const numPokemon : number = 9
    let Pokedex : Array<IPokemon> = new Array(numPokemon);
    let data = new Array<string>(10);
    let done : boolean = false;
    onMount(() => {
        loadPokedex().then(response => {
            done = true;
            console.log(Pokedex)
        });
    });

    async function loadPokedex(): Promise<any> {
        for (let id = 1; id <= Pokedex.length; id++) {
            Pokedex[id - 1] = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
                .then(response => response.json())
                .then(data => {
                    let stats : string[] = new Array<string>(6);
                    for (let i = 0; i < stats.length; i++) {
                        stats[i] = data["stats"][i]["base_stat"].toString();
                    }
                    let types : string = (data["types"].length == 1) ? 
                        data["types"][0]["type"]["name"] : `${data["types"][0]["type"]["name"]}|${data["types"][1]["type"]["name"]}`;
                    let Pokemon: IPokemon = {
                        DexNum: id.toString(),
                        Name:   data["name"],
                        Sprite: data["sprites"]["front_default"],
                        Types:  types,
                        Stats:  stats
                    }
                    return Pokemon;
                });
            console.log(Pokedex[id])
        }
        return;
    }
</script>

<div class="container mt-5">
    <div class="row sticky-top">
        <div id="Dex" class="col">Dex No</div>
        <div id="Name" class="col">Name</div>
        <div id="Sprite" class="col">Sprite</div>
        <div id="Types" class="col">Types</div>
        <div id="HP" class="col">HP</div>
        <div id="Atk" class="col">Atk</div>
        <div id="Def" class="col">Def</div>
        <div id="SpAtk" class="col">SpAtk</div>
        <div id="SpDef" class="col">SpDef</div>
        <div id="Speed" class="col">Speed</div>
    </div>
    {#if done}
        {#each Pokedex as pokemon}
            <Pokerow data={pokemon}/>
        {/each}
    {/if}
</div>

<style>
    .row {
        max-height: 64px;
    }
    .col {
        border: 1px solid black;
        width:10%;
        text-align: center;

        font-family: monospace;
        font-size: 1.25em;
        background-color: slategray;
    }

    #HP {
        background-color: red;
    }
    #Atk {
        background-color: orangered;
    }
    #Def {
        background-color: yellow;
    }
    #SpAtk {
        background-color: greenyellow;
    }
    #SpDef {
        background-color: cyan;
    }
    #Speed {
        background-color: darkorchid;
    }
</style>