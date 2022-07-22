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
            <a href="/move-list" class="btn col-sm mx-5 my-2" sveltekit:prefetch>Move List</a>
            <a href="/ability-list" class="btn col-sm mx-5 my-2" sveltekit:prefetch>Ability List</a>
        </div>
    </div>
</div>

<style>
    .header {
        max-height: 8em;
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
        min-height: calc(4em - 1px);
        background-color: black;
    }

    .top {
        min-width: 300px;
        max-width: 75%;
        border-bottom: 2px solid slategray;
        border-radius: 30px;
    }
</style>