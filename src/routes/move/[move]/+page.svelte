<script lang="ts">
    // throw new Error("@migration task: Add data prop (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292707)");
    import { MoveRow, type IMove } from "$lib";
    import { TypeColors } from "$lib";
    import type { PageData } from './$types';

    export let data: PageData;

    let props : IMove;
    $: {
        props = {
            ID: data.id,
            Name: data.name,
            Type: data.type.name,
            DamageClass: data.damage_class.name,
            Power: data.power,
            Accuracy: data.accuracy,
            Description: data.flavor_text_entries[0].flavor_text,
        }
        console.log(data);
    }
</script>

<div class="container my-5 p-5" style="--type: {TypeColors[data.type.name]}">
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