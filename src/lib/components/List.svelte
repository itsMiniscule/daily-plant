<script>
  import Default from "$lib/assets/default-plant.jpg";
  export let plant;
</script>

<div class="bg-green-200 p-4 rounded-md shadow-md flex items-center">
  <!-- Thumbnail Image -->
  <img
      src={plant.default_image?.thumbnail || Default} 
      alt={plant.common_name || "Unknown Plant"}
      class="w-16 h-16 object-cover rounded mr-4"
  />

  <!-- Plant Details -->
  <div>
      <!-- Common Name -->
      <h2 class="font-bold text-lg">{plant.common_name || "Unknown Name"}</h2>

      <!-- Scientific Name -->
      <p class="text-sm italic">
          {plant.scientific_name?.[0] || "Unknown Scientific Name"}
      </p>

      <!-- Indoor/Outdoor -->
      <p class="text-sm">
          {plant.indoor === 1 ? "Indoor" : plant.indoor === 0 ? "Outdoor" : "Unknown Type"}
      </p>
  </div>
</div>
