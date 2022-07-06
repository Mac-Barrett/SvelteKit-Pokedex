import Header from "./_components/Header.svelte";
import Footer from "./_components/Footer.svelte";
import Pokerow from "./_components/Pokerow.svelte";

export {
    Header,
    Footer,
    Pokerow
};

export interface IPokemon {
    DexNum: string,
    Name:   string,
    Sprite: string,
    Types:  string,
    Stats: Array<string>;
}