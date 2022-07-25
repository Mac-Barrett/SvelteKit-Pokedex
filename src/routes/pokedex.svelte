<script lang="ts">
import GridList, { ListType } from "$lib/_components/GridList.svelte";


</script>

<div class="container my-5">
    <div class="row sticky-top">
        <div id="Dex" class="col">Dex No</div>
        <div id="Name" class="col">Name</div>
        <div id="Sprite" class="col">Sprite</div>
        <div id="Types" class="col">Types</div>
        <div id="HP" class="col">HP</div>
        <div id="Atk" class="col">Atk</div>
        <div id="Def" class="col">Def</div>
        <div id="SpAtk" class="col">SpAtk</div>
        <div id="SpDef" class="col">SpDef</div>
        <div id="Speed" class="col">Speed</div>
    </div>
    <GridList listType={ListType.PKMN_LIST} IDs={[...Array(151).keys()]}/>
</div>

<style>
    .row {
        max-height: 64px;
    }
    .col {
        border: 1px solid black;
        width:10%;
        text-align: center;

        font-family: monospace;
        font-size: 1.25em;
        background-color: slategray;
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