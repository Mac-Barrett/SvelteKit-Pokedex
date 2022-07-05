<script lang="ts" context="module">
    export enum dataType {
        IMAGE,
        TYPES,
        TEXT,
        LINK
    }
</script>

<script lang="ts">
    const IMG_PATH = (dexNum : string) : string => `https://archives.bulbagarden.net/media/upload/a/ad/Spr_2g_${dexNum}.png`;
    const WIKI_PATH : string = 'https://bulbapedia.bulbagarden.net/wiki/';
    export var data : string;
    export var type : dataType;
</script>

    {#if type === dataType.IMAGE}
        <img src={data} alt={data}>
    {:else if type === dataType.TYPES}
        {#if data.split("|").length > 1}
            <img class="type-icon" src={data.split("|")[0]} alt={data.split("|")[0]}>
            <img class="type-icon" src={data.split("|")[1]} alt={data.split("|")[1]}>
        {:else}
            <img class="type-icon" src={data} alt={data}>
        {/if}
    {:else if type === dataType.TEXT}
        <p>{data}</p>
    {:else}
        <p><a href={WIKI_PATH + data}>{data}</a></p>
    {/if}


<style>
    p {
        text-align: center;
        font-family: monospace;
    }
    a {
        color: black;
    }

    img {
        height: 64px;
        width: 64px;
    }

    img.type-icon {
        height: 30px;
        width: 60px;
    }
</style>