<script lang="ts" context="module">
    export enum dataType {
        IMAGE,
        TYPES,
        TEXT,
        LINK
    }
</script>

<script lang="ts">
    const WIKI_PATH : string = 'https://bulbapedia.bulbagarden.net/wiki/';
    export var data : string;
    export var type : dataType;
</script>

    {#if type === dataType.IMAGE}
        <img src={data} alt={data}>
    {:else if type === dataType.TYPES}
        {#if data.split("|").length > 1}
            <img class="type-icon" src={`/res/${data.split("|")[0]}.png`} alt={data.split("|")[0]}>
            <img class="type-icon" src={`/res/${data.split("|")[1]}.png`} alt={data.split("|")[1]}>
        {:else}
            <img class="type-icon" src={`/res/${data}.png`} alt={data}>
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
        max-height: 64px;
        max-width: 64px;
    }

    img.type-icon {
        max-height: 30px;
        max-width: 60px;
    }
</style>