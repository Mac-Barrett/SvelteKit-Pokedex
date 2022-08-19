<script lang="ts">
    export var img: string;
    export var name: string;
    export var evoChain: any;
    export var evs: any;

    $: {
    }
</script>

<div>
    <img src={img} alt={name}>
    <p>{name}</p>
    <p>{evoChain}</p>
    <p>{evs}</p>
</div>
    
<style>
    img {
        border: 2px solid black;
        border-radius: 5px;
        background-color: white;

        width: 275px;
    }

    p {
        text-align: center;
    }
</style>