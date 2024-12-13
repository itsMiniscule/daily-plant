<script>
    import { onMount } from "svelte";
    import "../app.css";

    let plantData = null;

    onMount(async () => {
        try {
            const response = await fetch("https://perenual.com/api/species-list?key=sk-L9WP675b80ec7662a7987&indoor=1");
            const result = await response.json();
            if (result.data && result.data.length > 0) {
                // Pick a random plant
                plantData = result.data[Math.floor(Math.random() * result.data.length)];
            }
        } catch (error) {
            console.error("Failed to fetch plant data:", error);
        }
    });
</script>

<section>
    {#if plantData}
        <div class="text-center">
            <h2 class="text-xl font-bold">{plantData.common_name || "Unknown Plant"}</h2>
            <p class="italic">{plantData.scientific_name ? plantData.scientific_name.join(", ") : "Scientific name not available"}</p>
            {#if plantData.default_image}
                <img src={plantData.default_image.regular_url} alt={plantData.common_name} class="mx-auto mt-4 w-64 h-64 object-cover">
            {/if}
        </div>
    {:else}
        <p class="text-center">Loading a random plant...</p>
    {/if}
</section>
