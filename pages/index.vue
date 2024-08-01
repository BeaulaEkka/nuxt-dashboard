<script setup>
const loading = ref(false);
</script>

<template>
  <div class="grid gap-2 h-screen">
    <header class="flex items-start justify-between">
      <div class="grow">
        <p>Hi, Beaula Welcome Back !</p>
        <h1>Dashboard</h1>
      </div>
    </header>

    <main class="grid gap-2">
      <NavigationTabs />
      
      <section class="w-full h-[360px] bg-neutral-200 s">chart</section>
    </main>

    <footer class="flex gap-4 justify-between">
      <div class="bg-neutral-200 flex-grow">3 different cards</div>
      <div class="bg-neutral-200 flex-grow">3 different cards</div>
      <div class="bg-neutral-200 flex-grow">3 different cards</div>
    </footer>
  </div>
</template>

<style scoped></style>
