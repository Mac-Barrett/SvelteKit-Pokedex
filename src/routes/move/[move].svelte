<script context="module" lang="ts">
    // @ts-ignore
    export async function load({ params, fetch }) {
        let pokemonName : number|string = params.pkmn;

        const res = await fetch(`https://pokeapi.co/api/v2/move/${params.move}`);

        return {
            status: res.status,
            props: {
                move: res.ok && (await res.json()),
            }
        };
    }
</script>

<script lang="ts">
    export var move : any;
    console.log(move);
</script>



<style>

</style>