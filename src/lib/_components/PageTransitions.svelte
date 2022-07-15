<!-- Literally just waits until data is ready to display new page + unmounts & remounts dynamic [slug] pages for clean transitions -->
<script>
    import { fly } from 'svelte/transition';
    export let refresh = '';
</script>
  
{#key refresh}
<div>
    <slot/>
</div>
{/key}

<style>
    
</style>