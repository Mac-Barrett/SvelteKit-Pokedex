<script lang="ts">
    import { MoveRow, type IMove } from "$lib";
    import { Stretch } from "svelte-loading-spinners";

    import { onMount } from "svelte";

    let moveList: IMove[]|null = null;
    onMount(async () => {
        let promises : Promise<IMove>[] = [...Array(50).keys()].map(async (id) => {
            const response = await fetch(`https://pokeapi.co/api/v2/move/${id + 1}/`);
            const data = await response.json();

            return {
                ID: (id + 1).toString(),
                Name: data.name,
                Type: data.type.name,
                DamageClass: data.damage_class.name,
                Power: data.power,
                Accuracy: data.Accuracy,
                Description: data.flavor_text_entries[0].flavor_text
            };
        });
        moveList = await Promise.all(promises);
    });
</script>

<div class="container my-5 p-5">
    <table> 
        {#if moveList != null}
            {#each moveList as move}
                <MoveRow data={move}/>
            {/each}
        {:else}
        <div style="background-color: lightgray; text-align:center;">
            <Stretch color="black"></Stretch>
        </div>
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
</style>