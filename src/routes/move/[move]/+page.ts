import type { PageLoad } from "./$types";

export const load: PageLoad = async ({params, fetch}) => {
    const response = await fetch(`https://pokeapi.co/api/v2/move/${params.move}`);
    const move = await response.json();

    return move;
}

