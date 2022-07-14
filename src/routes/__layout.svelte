<script lang="ts">
    import { Header, Footer } from '../lib/index';
</script>

<head>
    <title>SvelteDex</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
</head>

<Header/>
<div class="container">
    <slot/>
</div>
<Footer/>

<style>
    div {
        min-height: calc(100vh - 15em); /* 100vh - (height of Header.svelte + height of Footer.svelte) [10em + 5em = 15em] */
    }

    :global(p.small-text) {
        font-size: .5em;
    }

    :global(#type-0) {
        background-color: rgba(255, 0, 0, 0.25);
    }
    :global(#type-1) {
        background-color: rgba(215, 125, 0, 0.25);
    }
    :global(#type-2) {
        background-color: rgba(255, 255, 0, 0.25);
    }
    :global(#type-3) {
        background-color: rgba(50, 255, 50, 0.25);
    }
    :global(#type-4) {
        background-color: rgba(0, 255, 255, 0.25);
    }
    :global(#type-5) {
        background-color: rgba(153, 50, 204, 0.25);
    }
</style>