<script context="module" lang="ts">
    // @ts-ignore
    export async function load({ params, fetch }) {
        const pkmnDataResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.pkmn}`);
        const pkmnEvolutionResponse = await fetch(`https://pokeapi.co/api/v2/evolution-chain/${params.pkmn}`);

        return {
            status: pkmnDataResponse.status,
            props: {
                pkmnData: pkmnDataResponse.ok && (await pkmnDataResponse.json()),
                pkmnEvoChain: pkmnEvolutionResponse.ok && (await pkmnEvolutionResponse.json())
            }
        };
    }
</script>

<script lang="ts">
    import { PokemonPage } from "$lib";
    import { fly } from 'svelte/transition'

    export let pkmnData : any;
    export let pkmnEvoChain : any;
</script>


<div in:fly={{ x:-300, duration: 1000 }}>
    <PokemonPage data={pkmnData} evoChain={pkmnEvoChain}/>
</div>


<style>

</style>