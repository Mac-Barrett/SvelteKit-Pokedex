<script lang="ts">
    import { TypeColors } from "$lib";
    export var data : any;
    export var evoChain : any;

    const totalPkmn : number = 151;
    let type1 : string;
    let type2 : string;
    $: {
        type1 = (data.types[0].type.name);
        type2 = (data.types.length > 1) ? data.types[1].type.name : type1;
        console.log(type1, TypeColors[type1])
        console.log(evoChain);
    }
</script>

<div class="container my-3" style="--type1: {TypeColors[type1]};">
    <!-- Top NavBar -->
    <div id="pkmnNavBar" class="row mx-2 mt-4 py-3">
        <div class="col">
            {#if data.id != 1}
            <a href={`./${data.id - 1}`}>Previous</a>
            {/if}
        </div>
        <div class="col">
            <h3>#{data.id}: {data.name}</h3>
        </div>
        <div class="col">
            {#if data.id != totalPkmn}
            <a href={`./${data.id + 1}`}>Next</a>
            {/if}
        </div>
    </div>

    <div class="row mx-2 mt-4 py-3">
        <div class="col p-0">
            <img src={data.sprites.other["official-artwork"].front_default} alt={data.name}>
        </div>
        <div class="col">

        </div>
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

    img {
        border: 2px solid black;
        border-radius: 5px;
        background-color: white;
    }
</style>