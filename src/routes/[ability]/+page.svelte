<script lang="ts">
    throw new Error("@migration task: Add data prop (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292707)");

    import { AbilityRow, type IAbility }from "$lib";

    export var ability : any;

    let props: IAbility;
    $: {
        props = {
            ID: ability.id,
            Name: ability.name,
            Description: ability.flavor_text_entries[0].flavor_text
        }
        console.log(ability);
    }
</script>

<AbilityRow data={props}/>

<style>

</style>