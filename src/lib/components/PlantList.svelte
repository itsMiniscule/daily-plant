<script lang="ts">
    import { onMount } from "svelte";
    import List from "$lib/components/List.svelte";

    interface Plant {
        common_name: string;
        scientific_name: string[];
        indoor: boolean | null;
        family: string | null;
        default_image: {
            thumbnail: string | null;
        };
    }

    let indoorPlants: Plant[] = [];
    let outdoorPlants: Plant[] = [];
    let loading: boolean = true;
    let error: string | null = null;

    onMount(async () => {
        try {
            // Fetch indoor and outdoor plants separately
            const [indoorResponse, outdoorResponse] = await Promise.all([
                fetch(
                    "https://perenual.com/api/species-list?key=sk-L9WP675b80ec7662a7987&indoor=1",
                ),
                fetch(
                    "https://perenual.com/api/species-list?key=sk-L9WP675b80ec7662a7987",
                ),
            ]);

            const [indoorData, outdoorData] = await Promise.all([
                indoorResponse.json(),
                outdoorResponse.json(),
            ]);

            indoorPlants = indoorData.data.map((plant: Plant) => ({
                ...plant,
            }));

            outdoorPlants = outdoorData.data
                .filter((plant: Plant) => plant.indoor !== true) // Corrected the comparison
                .map((plant: Plant) => ({
                    ...plant,
                }));
        } catch (err) {
            error = "Failed to fetch plant data.";
            console.error(err);
        } finally {
            loading = false;
        }
    });
</script>

<div class="container mx-auto p-4">
    {#if loading}
        <p class="text-center">Loading...</p>
    {:else if error}
        <p class="text-center text-red-500">{error}</p>
    {:else}
        <h2 class="text-xl font-bold mb-2">Indoor Plants</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {#each indoorPlants as plant}
                <List {plant} />
            {/each}
        </div>

        <h2 class="text-xl font-bold mt-8 mb-2">Outdoor Plants</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {#each outdoorPlants as plant}
                <List {plant} />
            {/each}
        </div>
    {/if}
</div> 