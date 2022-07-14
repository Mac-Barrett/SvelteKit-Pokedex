import Header from "./_components/Header.svelte";
import Footer from "./_components/Footer.svelte";
import Pokerow from "./_components/Pokerow.svelte";

import PokemonPage from "./_components/PokemonPage/PokemonPage.svelte";
import MoveRow from "./_components/PokemonPage/MoveRow.svelte";
import TypeEffectivenessBlock from "./_components/PokemonPage/TypeEffectivenessBlock.svelte"

export {
    Header,
    Footer,
    Pokerow,

    PokemonPage,
    MoveRow,
    TypeEffectivenessBlock
};

export interface IPokemon {
    DexNum: string,
    Name:   string,
    Sprite: string,
    Types:  string,
    Stats: Array<string>;
}

export const TypeColors: any = {
    "bug"       : "#a8b820",
    "dark"      : "#705848",
    "dragon"    : "#7038f8",
    "electric"  : "#f8d030",
    "fairy"     : "#ee99ac",
    "fighting"  : "#c03028",
    "fire"      : "#f08030",
    "flying"    : "#a890f0",
    "ghost"     : "#705898",
    "grass"     : "#78c850",
    "ground"    : "#e0c068",
    "ice"       : "#98d8d8",
    "normal"    : "#a8a878",
    "poison"    : "#a040a0",
    "psychic"   : "#f85888",
    "rock"      : "#8d741f",
    "steel"     : "#d9d9f6",
    "water"     : "#6890f0"
}