<script lang="ts">
    import { MoveRow, type IMove } from "$lib";

    import { onMount } from "svelte";

    let moveList: IMove[]|null = null;
    onMount(async () => {
        let promises : Promise<IMove>[] = [...Array(50).keys()].map(async (id) => {
        const move = fetchMove(id + 1);
            return move;
            });
        moveList = await Promise.all(promises);
    });

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

<table> 
    {#if moveList != null}
        {#each moveList as move}
            <MoveRow data={move}/>
        {/each}
    {/if}
</table>

<style>

</style>