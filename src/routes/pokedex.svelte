<script lang="ts">
    import GridList, { ListType } from "$lib/_components/GridList.svelte";
</script>

<div class="container my-5 p-5">
    <table>
        <tr class="sticky-top">
            <th id="Dex">Dex No</th>
            <th id="Name">Name</th>
            <th id="Sprite">Sprite</th>
            <th id="Types">Types</th>
            <th id="HP">HP</th>
            <th id="Atk">Atk</th>
            <th id="Def">Def</th>
            <th id="SpAtk">SpAtk</th>
            <th id="SpDef">SpDef</th>
            <th id="Speed">Speed</th>
        </tr>
        <GridList listType={ListType.PKMN_LIST} IDs={[...Array(151).keys()]}/>
    </table>
</div>

<style>
    .container {
        background-color: darkslateblue;
        border-radius: 20px;
        border: 2px solid black;
    }
    table {
        background-color: white;
        width: 100%;
    }
    th {
        text-align: center;
        background-color: white;
        border: 1px solid black;
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