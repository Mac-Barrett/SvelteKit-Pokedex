<script lang="ts">
    import { TypeEffectiveness } from "$lib";

    export var type1: string;
    export var type2: string | null;

    let speciesTypeEffectiveness: any = {
        "4x Weak": [],
        "2x Weak": [],
        Neutral: [],
        "1/2 Resist": [],
        "1/4 Resist": [],
        Immune: [],
    };

    $: {
        Object.keys(TypeEffectiveness).forEach((attackingType: string) => {
            let type1effectiveness: number = TypeEffectiveness[attackingType][type1];
            let type2effectiveness: number = (type2 === null) ? 1 : TypeEffectiveness[attackingType][type2];
            let totalTypeEffectiveness: number = type1effectiveness * type2effectiveness;
            console.log(totalTypeEffectiveness);

            switch (totalTypeEffectiveness) {
                case 4:
                    speciesTypeEffectiveness["4x Weak"].push(attackingType);
                    break;
                case 2:
                    speciesTypeEffectiveness["2x Weak"].push(attackingType);
                    break;
                case 1:
                    speciesTypeEffectiveness["Neutral"].push(attackingType);
                    break;
                case 0.5:
                    speciesTypeEffectiveness["1/2 Resist"].push(attackingType);
                    break;
                case 0.25:
                    speciesTypeEffectiveness["1/4 Resist"].push(attackingType);
                    break;
                case 0:
                    speciesTypeEffectiveness["Immune"].push(attackingType);
                    break;
            }
        });
    }
</script>

<div class="container p-3">
    <div class="heading"><p>Defenses:</p></div>
    {#each Object.keys(speciesTypeEffectiveness) as ResistanceLevel}
    <div class="row">
        <div class="col-3">{ResistanceLevel}</div>
        <div class="col-9">
            {#each speciesTypeEffectiveness[ResistanceLevel] as Type, n}
                <img src={`/res/${Type}.png`} alt={Type} />
            {/each}
        </div>
    </div>
{/each}
</div>

<style>
    .container {
        background-color: white;
        border-radius: 20px;
        border: 2px solid black;
    }

    .heading {
        text-align: center;
        font-weight: 600;
        width: 100%;
    }

    .row {
        border-top: 1px solid black;
    }
</style>
