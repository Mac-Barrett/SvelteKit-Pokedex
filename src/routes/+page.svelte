<script lang="ts">
    
</script>

<div class="container my-5">
    <h3>Welcome to SvelteDex</h3>
    <p>
        This is an interactive pokemon information repository that I built during downtime at work to get more familiar with Svelte, API's, and Web Development in general. This project was obviously built using the Svelte framework, but additional technologies I've leveraged include Bootstrap, TypeScript, and NodeJS. The information from each webpage on this site comes from <a href="https://pokeapi.co/">PokeAPI</a>, a quite powerful REST API, which means that the webpage itself can be fast and small.
    </p>
    <br><br>
    <h3>Features (v0):</h3>
    <ul>
        <li>A scrollable Pokedex list complete with stats, types, & abilites</li>
        <li>An individual page for every pokemon listed:</li>
        <ul>
            <li>General information on the species of pokemon</li>
            <li>A more in depth statistical overview</li>
            <li>Information on resistances based on its typing</li>
            <li>A list of learnable moves based on an associated generation</li>
        </ul>
        <li>A page contianing a list of all of the moves from the franchise</li>
        <li>An individual page for every move in the franchise:</li>
        <ul>
            <li>General information about the move</li>
            <li>A list of all pokemon who can learn the move</li>
        </ul>
        <li>A page contianing a list of all abilities from the franchise</li>
        <li>An individual page for every ability:</li>
        <ul>
            <li>General information about the move</li>
            <li>A list of all the pokemon that can have the ability</li>
        </ul>
    </ul>
</div>

<style>
    h3 {
        font-weight: 700;
    }
    p, li {
        font-size: .9em;
        font-weight: 500;
    }
</style>