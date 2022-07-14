<script lang="ts">

</script>

<div class="container-fluid bg">
    <h1 class="py-2">SvelteDex</h1>
</div>
<div class="contianer-fluid bg">
    <div class="row" style="max-width: 100%;">
        <a href="/pokedex" class="btn col-sm mx-5" sveltekit:prefetch>Pokedex</a>
        <a href="/movedex" class="btn col-sm mx-5" sveltekit:prefetch>Move List</a>
        <a href="/other??" class="btn col-sm mx-5" sveltekit:prefetch>Other</a>
    </div>
</div>

<style>
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
    }

    .bg {
        min-height: 5em;
        background-color: black;
    }
</style>