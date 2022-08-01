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
    export var ability : any;
</script>



<style>

</style>