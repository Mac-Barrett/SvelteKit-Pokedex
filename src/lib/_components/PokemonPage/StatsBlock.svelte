<script lang="ts">
    export var stats : number[];
    const statNames : Record<number, string> = {
        0: "HP",
        1: "ATK",
        2: "DEF",
        3: "SPATK",
        4: "SPDEF",
        5: "SPD"
    }

    let statsObj = {
        base: [1],
        bst: 0,
        at50: { min: [1], max: [1] },
        at100: { min: [1], max: [1] }
    }

    $: {
        statsObj.base = stats;
        statsObj.bst = calcBST();
        statsObj.at50 = calcAllStats(50);
        statsObj.at100 = calcAllStats(100);
        console.log(statsObj);
    }

    function calcBST() {
        let bst = 0;
        stats.forEach(val => {
            bst += val;
        });
        return bst;
    }

    function calcAllStats(lvl: number) {
        let minStat : number[] = Array(6);
        let maxStat : number[] = Array(6);
        stats.forEach((val, i) => {
            let isHP = (i === 0);
            minStat[i] = calcStat(isHP, true, lvl, val);
            maxStat[i] = calcStat(isHP, false, lvl, val);
        });
        return {
            min: minStat,
            max: maxStat
        }
    }

    function calcStat(isHP : boolean, isMin : boolean, lvl : number, baseStat : number) : number {
        let EV = (isMin) ? 0 : 252;
        let IV = (isMin) ? 0 : 31;
        let Nature = (isMin) ? 0.9 : 1.1;

        if (isHP) {
            return Math.floor(0.01 * (2 * baseStat + IV + Math.floor(0.25 * EV)) * lvl) + lvl + 10;
        } else {
            return Math.floor(Math.floor(0.01 * (2 * baseStat + IV + Math.floor(0.25 * EV)) * lvl) + 5 * Nature);
        }
    }
</script>

<table class="p-3">
    <tr>
        <th style="text-align: center;" colspan="2" rowspan="2">Stats</th>
        <th style="text-align: center;" colspan="2" rowspan="1">Range</th>
    </tr>
    <tr>
        <th style="width: 60px;">at 50:</th>
        <th style="width: 60px;">at 100:</th>
    </tr>
    {#each stats as stat, i}
    <tr class="stat-{i}">
        <th class="stat-{i}">
            <div style="float: left;">{statNames[i]}:</div>
            <small style="float:right;" class="pt-1 pl-2">{stat}</small>
        </th>
        <td class="stat-{i} stat-bar-container">
            <div class="stat-{i} stat-bar" style="width: calc({(stat / 255)} * 200px);"></div>
        </td>
        <td class="stat-{i}">
            <small>{statsObj.at50.min[i]} - {statsObj.at50.max[i]}</small>
        </td>
        <td class="stat-{i}">
            <small>{statsObj.at100.min[i]} - {statsObj.at100.max[i]}</small>
        </td>
    </tr>
    {/each}
    <tr>
        <td colspan="4">BST: {statsObj.bst}</td>
    </tr>
</table>

<style>
    table {
        background-color: white;

        border: 2px solid black;
        border-radius: 20px;
        margin: 0;
    }

    tr {
        height: 30px;
    }

    th {
        border: 1px solid black;
    }

    td {
        text-align: center;
        border: 1px solid black;
    }

    small {
        font-size: .66em;
        font-weight: 700;
    }

    .stat-bar-container {
        min-width: 200px;
    }

    .stat-bar {
        opacity: 1.0;
        height: 30px;
        border: 1px solid black;
    }
</style>