<script context="module" lang="ts">
    // @ts-ignore
    export async function load({ params, fetch }) {
        const url = `https://pokeapi.co/api/v2/pokemon/${params.pkmn}`;
        const response = await fetch(url);

        return {
            status: response.status,
            props: {
                data: response.ok && (await response.json())
            }
        };
    }
</script>

<script lang="ts">
    import { onMount } from "svelte";

    export let data : any;
</script>

{data.name}

<style>

</style>