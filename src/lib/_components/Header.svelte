<script lang="ts">

</script>

<div class="header">
    <div class="container-fluid bg" style="border-bottom: 1px solid slategray;">
        <h1 class="py-2">SvelteDex</h1>
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
        border: 2px solid slategray;
    }

    h1 {
        text-align: center;
        color:slategray;
        margin: 0;
    }

    .bg {
        min-height: 4em;
        background-color: black;
    }
</style>