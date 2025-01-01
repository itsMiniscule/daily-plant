<script>
    import List from "$lib/components/PlantList.svelte";
    import RandomPlant from "$lib/components/RandomPlant.svelte";

    let showRandomPlant = false;

    function toggleRandomPlant() {
        showRandomPlant = !showRandomPlant;
    }
</script>

<header class="flex justify-center text-6xl mb-6">
    <div>List of plants</div>
</header>

<section>
    <button on:click={toggleRandomPlant} class="bg-green-500 text-white p-2 rounded">
        {showRandomPlant ? 'Hide Random Plant' : 'Show Random Plant'}
    </button>
</section>

<section class="mb-32">
    {#if showRandomPlant}
        <RandomPlant />
    {/if}
</section>

<section class="mb-32">
    <List />
</section>
