<script lang="ts">
    import type { IPokemon } from "$lib";
    import { Pokerow } from "$lib";

    // import PokemonStore from "src/stores/PokemonStore";
    import { onMount } from "svelte";

    let Pokedex: IPokemon[];
    onMount(async () => {
        const numPokemon : number = 151
        let promises : Promise<IPokemon>[] = [...Array(numPokemon).keys()].map(async (_pkmn, id) => {
            const pokemon = fetchPokemon(id + 1);
            return pokemon;
        });
        Pokedex = await Promise.all(promises);
    })

    function fetchPokemon(id: number): Promise<IPokemon> {
        return fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
            .then(response => response.json())
            .then(data => {
                let stats : string[] = new Array<string>(6);
                for (let i = 0; i < 6; i++) {
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
    }
</script>

<div class="container my-5">
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
    {#if Pokedex}
    {#each Pokedex as pokemon}
        <Pokerow data={pokemon}></Pokerow>
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