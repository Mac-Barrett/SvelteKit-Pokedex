import type { PageLoad } from "./$types";

export const load: PageLoad = async ({params, fetch}) => {
    const response = await fetch(`https://pokeapi.co/api/v2/types/${params.type}`);
    if (!response.ok)
        throw new Error(`No data for type: ${params.type}`);

    const type = await response.json();
    return type;
}