import type { PageLoad } from "./$types";

export const load: PageLoad = async ({params, fetch}) => {
    const pkmnDataResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.pkmn}`);
    const pkmnEvolutionResponse = await fetch(`https://pokeapi.co/api/v2/evolution-chain/${params.pkmn}`);

    if (!pkmnDataResponse.ok || !pkmnEvolutionResponse.ok)
        throw Error("No data");

    const pkmnData = await pkmnDataResponse.json();
    const pkmnEvolution = await pkmnEvolutionResponse.json();
    
    return {pkmnData, pkmnEvolution}
}
