<script lang="ts">
    throw new Error("@migration task: Add data prop (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292707)");

    import { MoveRow, type IMove } from "$lib";
    import { TypeColors } from "$lib";

    export var move : any;

    let props : IMove;
    $: {
        props = {
            ID: move.id,
            Name: move.name,
            Type: move.type.name,
            DamageClass: move.damage_class.name,
            Power: move.power,
            Accuracy: move.accuracy,
            Description: move.flavor_text_entries[0].flavor_text,
        }
        console.log(move);
    }
</script>

<div class="container my-5 p-5" style="--type: {TypeColors[move.type.name]}">
    <table>
        <MoveRow data={props}/>
    </table>
</div>
    
<style>
    .container {
        background-color: var(--type);
        border: 2px solid black;
        border-radius: 20px;
    }
    
    table {
        margin: 0 auto;
        background-color: white;
    }
</style>