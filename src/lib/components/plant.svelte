<script>
    export let plantData;
</script>

<div class="text-center">
    <h2 class="text-xl font-bold">{plantData.common_name || "Unknown Plant"}</h2>
    <p class="italic">{plantData.scientific_name ? plantData.scientific_name.join(", ") : "Scientific name not available"}</p>
    {#if plantData.default_image}
        <img src={plantData.default_image.regular_url} alt={plantData.common_name} class="mx-auto mt-4 w-64 h-64 object-cover">
    {/if}
</div>

<style>
    /* Add any styles specific to the Plant component */
</style>