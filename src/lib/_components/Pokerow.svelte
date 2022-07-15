<script lang="ts">
    import type { IPokemon } from '$lib';

    export var data : IPokemon;
</script>

<div class="row">
    <div class="col">
        <p>{data.DexNum}</p>
    </div>
    <div class="col">
        <p><a href={`./pokemon/${data.DexNum}`}>{data.Name}</a></p>
    </div>
    <div class="col">
        <img src={data.Sprite} alt={data.Name}>
    </div>
    <div class="col">
        {#if data.Types.split("|").length > 1}
        <img class="type-icon" src={`/res/${data.Types.split("|")[0]}.png`} alt={data.Types.split("|")[0]}>
        <img class="type-icon" src={`/res/${data.Types.split("|")[1]}.png`} alt={data.Types.split("|")[1]}>
        {:else}
        <img class="type-icon" src={`/res/${data.Types}.png`} alt={data.Types}>
        {/if}
    </div>
    {#each data.Stats as stat, i}
    <div class={`col stat-${i}`}>
        <p>{stat}</p>
    </div>
    {/each}
</div>

<style>
    .row {
        max-height: 64px;
    }
    .col {
        border: 1px solid black;
        width: 10%;
        padding:0;
    }
    p {
        text-align: center;
        font-family: monospace;
        padding:0;
        margin:0;
    }
    a {
        color: black;
    }
    img {
        max-height: 64px;
        max-width: 64px;
    }
</style>