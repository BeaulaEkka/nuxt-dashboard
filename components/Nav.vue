<script setup>
import { Icon } from "@iconify/vue";
</script>

<template>
  <nav class="flex justify-between">
    <div>
      <Icon icon="ic:round-dashboard" :style="{ fontSize: '36px' }" />
    </div>
    <div>
      <ul>
        <li>
          <Icon icon="ic:round-dashboard" :style="{ fontSize: '36px' }" />
        </li>
        <li>Home</li>
        <li>About</li>
        <li>company</li>
      </ul>
    </div>
  </nav>
</template>

<style scoped></style>
