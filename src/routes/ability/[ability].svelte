<script context="module" lang="ts">
    // @ts-ignore
    export async function load({ params, fetch }) {
        const res = await fetch(`https://pokeapi.co/api/v2/ability/${params.ability}`);

        return {
            status: res.status,
            props: {
                ability: res.ok && (await res.json()),
            }
        };
    }
</script>

<script lang="ts">
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