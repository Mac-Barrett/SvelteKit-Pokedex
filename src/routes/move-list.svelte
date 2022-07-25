<script lang="ts">
    import GridList, { ListType } from "$lib/_components/GridList.svelte";
</script>

<GridList listType={ListType.MOVE_LIST} IDs={[...Array(50).keys()]}/>

<style>

</style>