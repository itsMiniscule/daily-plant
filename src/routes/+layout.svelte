<script>
    import "../app.css";
    import plantheader from "$lib/assets/plant-header.png";
</script>

<div class="flex flex-col min-h-screen">
    <!-- Header with decorative plants -->
    <header class="relative flex justify-center">
        <img
            src={plantheader}
            alt="Decorative plants"
            class="w-full h-full max-h-64 object-cover"
        />
    </header>

    <!-- Main content -->
    <main class="flex-grow p-4">
        <slot />
    </main>

    <!-- Navbar -->
    <nav class="bg-green-100 py-4 fixed bottom-0 w-full flex justify-around">
        <button class="text-green-700 font-semibold">Home</button>
        <button class="text-green-700 font-semibold">Favorites</button>
        <button class="text-green-700 font-semibold">History</button>
    </nav>
</div>
