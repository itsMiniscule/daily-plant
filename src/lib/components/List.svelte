<script>
  import Default from "$lib/assets/default-plant.jpg";
  export let plant;
</script>

<div class="bg-light-green p-4 rounded-md shadow-md flex items-center transition transform hover:scale-105">
  <img
    src={plant.default_image?.thumbnail || Default} 
    alt={plant.common_name || "Unknown Plant"}
    class="w-20 h-20 object-cover rounded mr-4"
  />
  <div>
    <h2 class="font-bold text-lg">{plant.common_name || "Unknown Name"}</h2>
    <p class="text-sm italic">
      {plant.scientific_name?.[0] || "Unknown Scientific Name"}
    </p>
    <p class="text-sm mt-2 text-green-600 hover:text-green-800">
      <strong>Sunlight:</strong> {plant.sunlight || "No information on sunlight"}
    </p>
    <p class="text-sm mt-2 text-green-600 hover:text-green-800">
      <strong>Watering:</strong> {plant.watering || "No information on watering"}
    </p>
  </div>
</div>
