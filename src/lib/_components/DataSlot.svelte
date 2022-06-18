<script lang="ts" context="module">
    export enum dataType {
        image,
        imageX2,
        text,
        link
    }
</script>

<script lang="ts">
    const IMG_PATH : string = '/res/imgs/';
    const BULBAPEDIA_PATH : string = 'https://bulbapedia.bulbagarden.net/wiki/';
    export var data : string;
    export var type : dataType;
</script>

<div class="container">
    {#if type === dataType.image}
    <div class="row">
        <img src={data} alt="" srcset="">
    </div>
    {:else if type === dataType.imageX2}
    <div class="row">
        <img src={data.split("|")[0]} alt="">
        <img src={data.split("|")[1]} alt="">
    </div>
    {:else if type === dataType.text}
    <div class="row">
        <p>{data}</p>
    </div>
    {:else}
    <div class="row">
        <p><a href={BULBAPEDIA_PATH + data}>{data}</a></p>
    </div>
    {/if}
</div>


<style>

</style>