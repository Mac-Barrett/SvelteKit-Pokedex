<script lang="ts">
    import { Pokerow, type IPokemon } from "$lib";

    import { onMount } from "svelte";

    let pkmnList: IPokemon[]|null = null;
    onMount(async () => {
        let promises : Promise<IPokemon>[] = [...Array(151).keys()].map(async (id) => {
            const pokemon = fetchPokemon(id + 1);
            return pokemon;
        });
        pkmnList = await Promise.all(promises);
    });
    
    async function fetchPokemon(id: number): Promise<IPokemon> {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
        const data = await response.json();

        let stats: string[] = new Array<string>(6);
        for(let i = 0; i < 6; i++) {
            stats[i] = data.stats[i].base_stat.toString();
        }

        let types: string = (data.types.length === 1) ?
            data.types[0].type.name : `${data.types[0].type.name}|${data.types[1].type.name}`;

        return {
            DexNum: id.toString(),
            Name: data.name,
            Sprite: data.sprites.front_default,
            Types: types,
            Stats: stats
        };
    }
</script>

<div class="container my-5 p-5">
    <table>
        <tr class="sticky-top">
            <th id="Dex">Dex No</th>
            <th id="Name">Name</th>
            <th id="Sprite">Sprite</th>
            <th id="Types">Types</th>
            <th id="HP">HP</th>
            <th id="Atk">Atk</th>
            <th id="Def">Def</th>
            <th id="SpAtk">SpAtk</th>
            <th id="SpDef">SpDef</th>
            <th id="Speed">Speed</th>
        </tr>
        {#if pkmnList != null}
            {#each pkmnList as pkmn}
                <Pokerow data={pkmn}/>    
            {/each}
        {/if}
    </table>
</div>

<style>
    .container {
        background-color: lightgray;
        border-radius: 20px;
        border: 2px solid black;
    }

    table {
        width: 100%;
        background-color: white;
    }
    
    th {
        text-align: center;
        background-color: white;
        border: 1px solid black;
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