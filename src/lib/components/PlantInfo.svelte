<!-- <script>
    let selectedPlant = null;

    function selectPlant(plant) {
        selectedPlant = plant;
    }

    function closeModal() {
        selectedPlant = null;
    }
</script>

<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
    {#each indoorPlants as plant}
        <button on:click={() => selectPlant(plant)} class="cursor-pointer">
            <List {plant} />
        </button>
    {/each}

    {#each outdoorPlants as plant}
        <button on:click={() => selectPlant(plant)} class="cursor-pointer">
            <List {plant} />
        </button>
    {/each}
</div>

{#if selectedPlant}
    <div
        class="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center"
    >
        <div class="bg-white p-6 rounded-lg shadow-lg max-w-md">
            <button
                on:click={closeModal}
                class="absolute top-2 right-2 text-lg font-bold text-red-500"
            >
                X
            </button>
            <h2 class="text-2xl font-bold">{selectedPlant.common_name}</h2>
            <p class="text-lg italic">{selectedPlant.scientific_name?.[0]}</p>
            <img
                src={selectedPlant.default_image?.thumbnail}
                alt={selectedPlant.common_name}
                class="w-full h-48 object-cover mt-4 rounded"
            />
            <p class="mt-4">
                {selectedPlant.description || "No description available."}
            </p>
        </div>
    </div>
{/if} -->
