
// @ts-ignore
export async function load({ params, fetch }) {
    const res = await fetch(`https://pokeapi.co/api/v2/ability/${params.ability}`);

    throw new Error("@migration task: Migrate this return statement (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693)");
    return {
        status: res.status,
        props: {
            ability: res.ok && (await res.json()),
        }
    };
}
