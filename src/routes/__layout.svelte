<script lang="ts">
    import { Header, Footer } from '../lib/index';
</script>

<head>
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
</style>