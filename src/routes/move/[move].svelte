<script context="module" lang="ts">
    // @ts-ignore
    export async function load({ params, fetch }) {
        const res = await fetch(`https://pokeapi.co/api/v2/move/${params.move}`);

        return {
            status: res.status,
            props: {
                move: res.ok && (await res.json()),
            }
        };
    }
</script>

<script lang="ts">
    import { MoveRow } from "$lib";
    import { TypeColors } from "$lib";

    export var move : any;
    console.log(move);

    let props : any = {
        name : move.name,
        type : move.type.name,
        damageClass : move.damage_class.name,
        power : move.power,
        accuracy : move.accuracy,
        description : move.flavor_text_entries[0].flavor_text
    }
</script>

<div class="container my-5 p-5" style="--type: {TypeColors[move.type.name]}">
    <table>
        <MoveRow {...props}/>
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