<script lang="ts">
    import type { IAbility } from "$lib";

    export let data: IAbility
</script>

<tr>
    <td>{data.ID}</td>
    <td><a href={`/ability/${data.ID}`}>{data.Name}</a></td>
    <td>{data.Description}</td>
</tr>

<style>
    td {
        border: 1px solid black;
    }
</style>