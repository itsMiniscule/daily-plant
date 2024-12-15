<script>
    import { onMount } from "svelte";
    import Plant from "$lib/components/plant.svelte";

    export let slotContent = "Loading a random plant...";
    /**
     * @type {null}
     */
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
        <Plant {plantData} />
    {:else}
        <slot>{slotContent}</slot>
    {/if}
</section>