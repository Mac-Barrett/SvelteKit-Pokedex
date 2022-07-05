<script lang="ts">
    import { DataSlot, dataType } from '$lib';

    export var PokemonData : Array<string>;
    const dataTypeSequence = [
        dataType.TEXT,
        dataType.LINK,
        dataType.IMAGE,
        dataType.TYPES,
        dataType.TEXT,
        dataType.TEXT,
        dataType.TEXT,
        dataType.TEXT,
        dataType.TEXT,
        dataType.TEXT
    ]
</script>

<div class="row">
    {#each PokemonData as dataForSlot, i}
        <div class="col p-0">
            <DataSlot data={dataForSlot} type={dataTypeSequence[i]}/>
        </div>
    {/each}
</div>

<style>
    .row {
        max-height: 64px;
    }
    .col {
        border: 1px solid black;
        width:10%;
    }
</style>