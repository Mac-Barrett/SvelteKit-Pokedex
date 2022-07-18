<script lang="ts">
    export var type1 : string;
    export var type2 : string;

    let typeEffectiveness = {
        "4x Weak" : {

        },
        "2x Weak" : {

        },
        "Neutral" : {

        },
        "1/2 Resist" : {

        },
        "1/4 Resist" : {

        },
        "Immune" : {

        }
    }

    $: {
        
    }
</script>

<table>
    <tr>
        <th>Defenses:</th>
    </tr>
    {#each Object.keys(typeEffectiveness) as ResistanceLevel}
        <tr>
            <th>{ResistanceLevel}</th>
            {#each Object.keys(ResistanceLevel) as Type}
            <td>
                <img src={`/res/${Type}.png`} alt={Type}>
            </td>
            {/each}
        </tr>
    {/each}
</table>

<style>
    
</style>