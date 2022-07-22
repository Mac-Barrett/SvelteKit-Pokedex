<script lang="ts">
    export var name : string;
    export var type : string;
    export var damageClass : string;
    export var power : string;
    export var accuracy : string;
    export var description : string;
</script>

<tr>
    <td>{name}</td>
    <td><img src={`/res/${type}.png`} alt={type}></td>
    <td>{damageClass}</td>
    <td>{power}</td>
    <td>{accuracy}</td>
    <td colspan="2">{description}</td>
</tr>

<style>
    td {
        border: 1px solid black;
        padding: 5px;
    }
</style>