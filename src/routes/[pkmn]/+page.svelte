

<script lang="ts">
    throw new Error("@migration task: Add data prop (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292707)");
    // Suggestion (check code before using, and possibly convert to data.X access later):
    // import type { PageData } from './$types';
    // export let data: PageData;
    // $: ({ pkmnData, pkmnEvoChain } = data);

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