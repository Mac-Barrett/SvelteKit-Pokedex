<script lang="ts">
    import Pokerow from "$lib/_components/Pokerow.svelte";
    import { onMount } from "svelte";

    const numPokemon : number = 9
    let Pokedex : Array<Array<string>> = new Array(numPokemon);
    let data = new Array<string>(10);
    let done : boolean = false;
    onMount(() => {
        loadPokedex().then(response => {
            done = true;
            console.log(Pokedex)
        });
    });

    async function loadPokedex(): Promise<any> {
        for (let id = 1; id <= numPokemon; id++) {
            Pokedex[id - 1] = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
                .then(response => response.json())
                .then(data => {
                    let pokemon : Array<string> = new Array(10);
                    pokemon[0] = id.toString();
                    pokemon[1] = data["name"];
                    pokemon[2] = data["sprites"]["front_default"];
                    pokemon[3] = (data["types"].length == 1) ? data["types"][0]["type"]["name"] : `${data["types"][0]["type"]["name"]}|${data["types"][1]["type"]["name"]}`;
                    for (let stat = 0; stat < 6; stat++) {
                        pokemon[4 + stat] = data["stats"][stat]["base_stat"].toString();
                    }
                    return pokemon;
                });
            console.log(Pokedex[id])
        }
        return;
    }
</script>

{#if done}
    <div class="container my-5">
        {#each Pokedex as pokemon}
            <Pokerow PokemonData={pokemon}/>
        {/each}
    </div>
{/if}

<style>

</style>