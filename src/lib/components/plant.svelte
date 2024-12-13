<!-- <script>
    import { onMount } from "svelte";
    import "../app.css";

    export let data; // Data passed from the parent component
    let plant = null;

    onMount(async () => {
        if (!data) {
            try {
                const response = await fetch("https://perenual.com/api/species-list?key=sk-L9WP675b80ec7662a7987&indoor=1");
                const result = await response.json();
                if (result.data && result.data.length > 0) {
                    // Pick a random plant from the data
                    plant = result.data[Math.floor(Math.random() * result.data.length)];
                }
            } catch (error) {
                console.error("Failed to fetch plant data:", error);
            }
        } else {
            plant = data; // Use data passed down from the parent
        }
    });
</script>

{#if plant}
<section>
    <div class="text-center">
        <h2 class="text-xl font-bold">{plant.common_name || "Unknown Plant"}</h2>
        <p class="italic">{plant.scientific_name ? plant.scientific_name.join(", ") : "Scientific name not available"}</p>
        {#if plant.default_image}
            <img src={plant.default_image.regular_url} alt={plant.common_name} class="mx-auto mt-4 w-64 h-64 object-cover">
        {/if}
    </div>
</section>
{:else}
<p class="text-center">Loading a random plant...</p>
{/if} -->
