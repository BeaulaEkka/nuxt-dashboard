<script setup></script>

<template>
  <div class="grid items-start lg:flex">
    <aside>
      <Sidebar />
    </aside>

    <main class="p-8 w-full"><slot /></main>
  </div>
</template>

<style scoped></style>
