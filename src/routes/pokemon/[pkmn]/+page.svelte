<script lang="ts">
    import { MoveRow, TypeEffectivenessBlock, StatsBlock, GeneralInfoBlock, TypeColors, type IMove } from "$lib";
    import type { PageData } from './$types';
    
    export let data: PageData;
    $: ({ pkmnData, pkmnEvolution } = data);

    const totalPkmn : number = 151;
    let type1: string;
    let type2: string|null;
    let stats: number[] = Array(6);
    
    let infoBlockProps: any;
    let moveList: Promise<IMove[]>;

    $: {
        type1 = (pkmnData.types[0].type.name);
        type2 = (pkmnData.types.length > 1) ? pkmnData.types[1].type.name : null;
        stats = getStats("base_stat");

        infoBlockProps = getInfoBlockProps();
        moveList = getMoves();
    }

    function getInfoBlockProps() {
        return {
            img: pkmnData.sprites.other["official-artwork"].front_default,
            name: pkmnData.name,
            evoChain: pkmnEvolution,
            evs: getStats("effort"),
        }
    }

    function getStats(statType: string) {
        let newStats : number[] = Array(6);
        for (let i = 0; i < 6; i++) {
            newStats[i] = pkmnData.stats[i][statType]; // statType being either "base_stat" or "effort"
        }
        return newStats;
    }

    async function getMoves() {
        let promises: Promise<IMove>[] = Object.keys(pkmnData.moves).map(async (index) => {
            return fetchMove(pkmnData.moves[index].move.url);
        });
        return await Promise.all(promises);

        async function fetchMove(url: string) {
            const response = await fetch(url);
            const json = await response.json();

            return {
                ID: json.id,
                Name: json.name,
                Type: json.type.name,
                DamageClass: json.damage_class.name,
                Power: json.power,
                Accuracy: json.Accuracy,
                Description: json.flavor_text_entries[0].flavor_text
            }
        }
    }
</script>

<div class="container my-3" style="--type1: {TypeColors[type1]};">
    <!-- Top NavBar -->
    <div id="pkmnNavBar" class="row mx-2 mt-4 py-3">
        <div class="col">
            {#if pkmnData.id != 1}
            <button id="prev" class="btn btn-outline-secondary">Previous</button>
            {/if}
        </div>
        <div class="col">
            <h3>#{pkmnData.id}: {pkmnData.name}</h3>
        </div>
        <div class="col">
            {#if pkmnData.id != totalPkmn}
            <button id="next" class="btn btn-outline-secondary">Next</button>
            {/if}
        </div>
    </div>

    <!-- Row 1 -->
    <div class="row mx-1 mt-4 py-3">
        <div class="col p-0">
            <GeneralInfoBlock {...infoBlockProps}/>
            <StatsBlock stats={stats}/>
        </div>
    </div>
    
    <!-- Row 2 -->
    <div class="row mx-2 mt-4 py-3">
        <div class="col p-0">
            <TypeEffectivenessBlock type1={type1} type2={type2}/>
        </div>
    </div>

    <!-- Row 3 -->
    <div class="row mx-2 mt-4 py-3">
        <table>
            {#await moveList}
                Loading UwU
            {:then moveList} 
                {#each moveList as move}
                    <MoveRow data={move}/>
                {/each}
            {/await}
        </table>
    </div>
</div>

<style>
    .container {
        border: 2px solid black;
        border-radius: 10px;
        
        background-color: var(--type1);
    }

    #pkmnNavBar {
        border: 2px solid black;
        border-radius: 10px;

        background-color: white;
    }

    #pkmnNavBar > div.col {
        text-align: center;
    }

    table {
        background-color: white;
    }
</style>