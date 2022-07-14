<script lang="ts">
    export var stats : number[];

    let statNames : Record<number, string> = {
        0: "HP",
        1: "ATK",
        2: "DEF",
        3: "SPATK",
        4: "SPDEF",
        5: "SPD"
    }
</script>

<!-- Do this as any actual table please for the love of God -->
<div class="col">
    {#each stats as stat, i}
        <div class="row stat-{i}">
            <div class="col">

            </div>
            <div class="col">

            </div>
            <div class="col">

            </div>
        </div>
    {/each}
</div>