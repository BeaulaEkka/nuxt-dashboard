<script setup>
import { Icon } from "@iconify/vue";

const open = ref(true);
</script>

<template>
  <div>
    <div
      class="z-50 flex lg:hidden items-center justify-between bg-white shadow-sm h-full w-full p-4 "
    >
      <Logo />
      <div class="">
        <Icon
          class="z-50 cursor-pointer left-2 top-2"
          size="30"
          icon="iconamoon:menu-burger-horizontal-fill"
          @click="open = true"
        />
        <div
          v-if="open"
          class="absolute top-0 left-0 z-50 w-full h-full bg-white"
        >
          <Icon
            class="absolute z-50 cursor-pointer right-4 top-4"
            size="30"
            icon="material-symbols:close"
            @click="open = false"
          />
          <SidebarMenu />
        </div>
      </div>
    </div>

    <div
      class="hidden lg:flex w-[250px] h-screen flex-col justify-between border-r"
    >
      <SidebarMenu />
    </div>
  </div>
</template>

<style scoped></style>
