<script setup>
import { Icon } from "@iconify/vue";
import { ref } from "vue";

const items = ref([
  {
    title: "Overview",
    path: "/",
    icon: "material-symbols:overview-outline-rounded",
  },
  {
    title: "Transactions",
    path: "/transactions",
    icon: "tabler:arrows-right-left",
  },
  { title: "Accounts", path: "/accounts", icon: "mdi:accounts" },
  { title: "Contacts", path: "/contacts", icon: "ri:contacts-book-line" },
  { title: "Settings", path: "/settings", icon: "carbon:settings" },
]);
</script>

<template>
  <div>
    <header
      class="flex items-center gap-2 p-4 hover:scale-[101%] transition cursor-pointer"
    >
      <Logo />
      <p class="font-bold">Nuxt-Dashboard</p>
    </header>
    <div class="px-4 grow">
      <div class="grid gap-2">
        <div
          class="flex items-center gap-2 px-2 py-1 transition rounded cursor-pointer hover:bg-gray-100"
          v-for="(item, index) in items"
          :key="index"
        >
          <NuxtLink :to="item.path" class="flex items-center gap-2">
            <Icon size="20" :icon="item.icon" color="black" />
            <span>{{ item.title }}</span>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
