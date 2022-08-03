<!-- Literally just waits until data is ready to display new page + unmounts & remounts dynamic [slug] pages for clean transitions -->
<script>
    export let refresh = '';
</script>
  
{#key refresh}
<div>
    <slot/>
</div>
{/key}

<style>
    
</style>