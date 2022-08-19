<script>
    // throw new Error("@migration task: Add data prop (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292707)");
    
    /** @type {import('./$types').PageData} */
    export let data;

    $: console.log(data);

    import { AbilityRow } from "$lib";

    /** @type {import('$lib').IAbility}*/
    let props;
    $: {
        props = {
            ID: data.id,
            Name: data.name,
            Description: data.flavor_text_entries[0].flavor_text
        }
        console.log(data);
    }
</script>

<AbilityRow data={props}/>

<style>

</style>