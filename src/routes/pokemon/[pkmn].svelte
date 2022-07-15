<script context="module" lang="ts">
    // @ts-ignore
    export async function load({ params, fetch }) {
        const pkmnDataResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.pkmn}`);
        const pkmnEvolutionResponse = await fetch(`https://pokeapi.co/api/v2/evolution-chain/${params.pkmn}`);

        return {
            status: pkmnDataResponse.status,
            props: {
                pkmnData: pkmnDataResponse.ok && (await pkmnDataResponse.json()),
                pkmnEvoChain: pkmnEvolutionResponse.ok && (await pkmnEvolutionResponse.json()),
            }
        };
    }
</script>

<script lang="ts">
    import { PokemonPage } from "$lib";
    import { PageTransitions } from "$lib";
    import { fly } from 'svelte/transition'

    export let pkmnData : any;
    export let pkmnEvoChain : any;

    let slideX : number = 0;
</script>

<PageTransitions refresh={pkmnData && pkmnEvoChain}>
    <div in:fly={{ x: -slideX, duration: 250, delay: 250 }} out:fly={{ x: slideX, duration: 250, delay: 0 }}>
        <PokemonPage on:setSlideX={(event) => {slideX = event.detail.slideX}} data={pkmnData} evoChain={pkmnEvoChain}/>
    </div>
</PageTransitions>

<style>

</style>