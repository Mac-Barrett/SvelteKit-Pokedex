<script lang="ts">

</script>

<div class="header">
    <div class="container-fluid bg top">
        <a href="/" sveltekit:prefetch>
            <h1 class="py-2">SvelteDex</h1>
        </a>
    </div>
    <div class="contianer-fluid bg">
        <div class="row m-0">
            <a href="/pokedex" class="btn col-sm mx-5 my-2" sveltekit:prefetch>Pokedex</a>
            <a href="/types" class="btn col-sm mx-5 my-2" sveltekit:prefetch>Types</a>
            <a href="/move-list" class="btn col-sm mx-5 my-2" sveltekit:prefetch>Moves</a>
            <a href="/ability-list" class="btn col-sm mx-5 my-2" sveltekit:prefetch>Abilities</a>
        </div>
    </div>
</div>

<style>
    .header {
        max-height: fit-content;
        background-color: black;
    }
    a {
        height: 100%;
        color:slategray;
    }
    a:hover {
        color: slategray;
        border: 2px solid slategray;
        opacity: .8;
        text-decoration: none;
    }

    h1 {
        text-align: center;
        color:slategray;
        margin: 0;
    }

    .bg {
        min-height: calc(4em - 2px);
        background-color: black;
    }

    .top {
        min-width: 300px;
        max-width: 75%;
        border-bottom: 2px solid slategray;
        border-radius: 30px;
    }
</style>