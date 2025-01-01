<script lang="ts">
    import { onMount } from "svelte";

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
                .filter((plant: Plant) => plant.indoor !== true)
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