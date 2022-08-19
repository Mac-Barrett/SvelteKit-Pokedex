import type { PageLoad } from "./$types";

export const load: PageLoad = async ({params, fetch}) => {
    const response = await fetch(`https://pokeapi.co/api/v2/ability/${params.ability}`);
    const ability = await response.json();

    return ability;
}