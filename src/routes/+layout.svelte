<script>
    import "../app.css";
</script>

<div class="flex flex-col min-h-screen">
    <!-- Main content -->
    <main class="flex-grow p-4">
        <slot />
    </main>

    <!-- Navbar -->
    <nav class="bg-light-green py-4 fixed bottom-0 w-full flex justify-around">
        <button class="text-green-700 font-semibold">Home</button>
        <button class="text-green-700 font-semibold">History</button>
    </nav>
</div>
