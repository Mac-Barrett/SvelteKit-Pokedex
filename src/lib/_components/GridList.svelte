<script lang="ts" context="module">
    export enum ListType {
        MOVE_LIST,
        PKMN_LIST
    }
</script>

<script lang="ts">
    import { Pokerow, MoveRow, type IMove, type IPokemon } from "$lib";
    import { onMount } from "svelte";

    export var listType: ListType;
    export var IDs: Array<number>;

    let moveList : Array<IMove>;
    let pkmnList : Array<IPokemon>;
    

    onMount(async () => {
        if (listType === ListType.MOVE_LIST) {
            let promises : Promise<IMove>[] = IDs.map(async (id) => {
                const move = fetchMove(id + 1);
                return move;
            });
            moveList = await Promise.all(promises);
        }
        else {
            let promises : Promise<IPokemon>[] = IDs.map(async (id) => {
                const pokemon = fetchPokemon(id + 1);
                return pokemon;
            });
            pkmnList = await Promise.all(promises);
        }
    });

    async function fetchPokemon(id: number): Promise<IPokemon> {
        const response=await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
        const data=await response.json();
        let stats: string[]=new Array<string>(6);
        for(let i=0;i<6;i++) {
            stats[i] = data.stats[i].base_stat.toString();
        }

        let types: string=(data.types.length==1) ?
        data.types[0].type.name : `${data.types[0].type.name}|${data.types[1].type.name}`;

        let Pokemon: IPokemon={
            DexNum: id.toString(),
            Name: data.name,
            Sprite: data.sprites.front_default,
            Types: types,
            Stats: stats
        };
        return Pokemon;
    }

    async function fetchMove(id: number): Promise<IMove> {
        const response = await fetch(`https://pokeapi.co/api/v2/move/${id}/`);
        const data = await response.json();
        let Move: IMove={
            ID: id.toString(),
            Name: data.name,
            Type: data.type.name,
            DamageClass: data.damage_class.name,
            Power: data.power,
            Accuracy: data.Accuracy,
            Description: data.flavor_text_entries[0].flavor_text
        };
        return Move;
    }
</script>

{#if listType === ListType.MOVE_LIST}
    {#if moveList}
    <table>
        {#each moveList as move}
            <MoveRow data={move}/>
        {/each}
    </table>
    {/if}
{:else}
    {#if pkmnList}
        {#each pkmnList as pkmn}
            <Pokerow data={pkmn}/>
        {/each}
    {/if}
{/if}

<style>

</style>