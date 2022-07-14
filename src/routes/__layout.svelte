<script lang="ts">
    import { Header, Footer } from '../lib/index';
</script>

<head>
    <title>SvelteDex</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
</head>

<Header/>
<slot/>
<Footer/>

<style>
    :global(p.small-text) {
        font-size: .5em;
    }

    :global(#stat-0) {
        background-color: rgba(255, 0, 0, 0.25);
    }
    :global(#stat-1) {
        background-color: rgba(215, 125, 0, 0.25);
    }
    :global(#stat-2) {
        background-color: rgba(255, 255, 0, 0.25);
    }
    :global(#stat-3) {
        background-color: rgba(50, 255, 50, 0.25);
    }
    :global(#stat-4) {
        background-color: rgba(0, 255, 255, 0.25);
    }
    :global(#stat-5) {
        background-color: rgba(153, 50, 204, 0.25);
    }
</style>