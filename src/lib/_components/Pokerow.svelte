<script lang="ts">
    import type { IPokemon } from '$lib';

    export var data : IPokemon;
</script>

<tr>
    <td>
        <p class="d-md-block d-none">{data.DexNum}</p>
        <small class="d-md-none d-block">{data.DexNum}</small>
    </td>
    <td>
        <p class="d-md-block d-none"><a href={`./pokemon/${data.DexNum}`}>{data.Name}</a></p>
        <small class="d-md-none d-block"><a href={`./pokemon/${data.DexNum}`}>{data.Name}</a></small>
    </td>
    <td>
        <img src={data.Sprite} alt={data.Name}>
    </td>
    <td>
        {#if data.Types.split("|").length > 1}
            <img class="type-icon" src={`/res/${data.Types.split("|")[0]}.png`} alt={data.Types.split("|")[0]}>
            <img class="type-icon" src={`/res/${data.Types.split("|")[1]}.png`} alt={data.Types.split("|")[1]}>
        {:else}
            <img class="type-icon" src={`/res/${data.Types}.png`} alt={data.Types}>
        {/if}
    </td>
    {#each data.Stats as stat, i}
        <td class={`data stat-${i}`}>
            <p class="d-md-block d-none">{stat}</p>
            <small class="d-md-none d-block">{stat}</small>
        </td>
    {/each}
</tr>

<style>
    td {
        text-align: center;
        border: 1px solid black;
    }
    a {
        color: black;
    }
    img {
        max-height: 64px;
        max-width: 64px;
    }
</style>