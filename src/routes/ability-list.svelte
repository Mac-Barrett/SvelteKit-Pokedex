<script lang="ts">
    import type { IAbility } from "$lib";
    import AbilityRow from "$lib/_components/AbilityRow.svelte";

    
    import { onMount } from "svelte";

    let abilityList: IAbility[]|null = null;
    onMount(async () => {
        let promises : Promise<IAbility>[] = [...Array(50).keys()].map(async (id) => {
            const response = await fetch(`https://pokeapi.co/api/v2/ability/${id + 1}/`);
            const data = await response.json();

            return {
                ID: (id + 1).toString(),
                Name: data.name,
                Description: data.flavor_text_entries[0].flavor_text
            };
        });
        abilityList = await Promise.all(promises);
    });
</script>

<div class="container my-5 p-5">
    {#if abilityList === null}
    Loading UwU
    {:else}
    <table>
        {#each abilityList as ability}
            <AbilityRow data={ability}/>
        {/each}
    </table>
    {/if}
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