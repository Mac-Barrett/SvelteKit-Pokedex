<script lang="ts">
    import type { IMove } from "$lib";

    export var data : IMove;
    console.log(data);
</script>

<tr>
    <td>{data.Name}</td>
    <td><img src={`/res/${data.Type}.png`} alt={data.Type}></td>
    <td>{data.DamageClass}</td>
    <td>{data.Power}</td>
    <td>{data.Accuracy}</td>
    <td colspan="2">{data.Description}</td>
</tr>

<style>
    td {
        border: 1px solid black;
        padding: 5px;
    }
</style>