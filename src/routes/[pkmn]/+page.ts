
// @ts-ignore
export async function load({ params, fetch }) {
    let pokemonName : number|string = params.pkmn;

    const pkmnDataResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.pkmn}`);
    const pkmnEvolutionResponse = await fetch(`https://pokeapi.co/api/v2/evolution-chain/${params.pkmn}`);

    throw new Error("@migration task: Migrate this return statement (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693)");
    return {
        status: pkmnDataResponse.status,
        props: {
            pkmnData: pkmnDataResponse.ok && (await pkmnDataResponse.json()),
            pkmnEvoChain: pkmnEvolutionResponse.ok && (await pkmnEvolutionResponse.json()),
        }
    };
}
