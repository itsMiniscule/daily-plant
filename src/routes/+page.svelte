<script>
    import "../app.css";
    import Plant from "$lib/components/plants.svelte";
    import CurrentDate from "$lib/components/CurrentDate.svelte";
    import PlantTimer from "$lib/components/PlantTimer.svelte";
</script>

<section class="flex justify-center mb-6">
    <div class="text-6xl items-center">Plant of the Day</div>
</section>

<section class="flex justify-center">
    <CurrentDate />
</section>

<section class="flex justify-center">
    <div class="text-xl items-center">Time till new plant:</div>
</section>

<section class="flex justify-center">
    <PlantTimer />
</section>

<section>
    <Plant />
</section>
