<script setup>
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const list = [
  { title: "Today", value: "today", component: resolveComponent("TabsToday") },
  { title: "Week", value: "week", component: resolveComponent("TabsWeek") },
  { title: "Month", value: "month", component: resolveComponent("TabsMonth") },
  { title: "Year", value: "year", component: resolveComponent("TabsYear") },
];
let categories = ref({ today: [], week: [], month: [], year: [] });

let currentCategory = ref([
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
]);
const options = computed(() => ({
  chart: {
    type: "line",
    animation: { enabled: false },
  },
  title: {
    text: "",
  },

  xAxis: {
    gridLineColor: "transparent",
    categories: currentCategory,
  },
  yAxis: {
    gridLineColor: "transparent",
    title: {
      text: "Temperature (°C)",
    },
  },
  plotOptions: {
    line: {
      marker: { enabled: false },
      dataLabels: {
        enabled: true,
      },
      enableMouseTracking: true,
    },
  },
  series: [
    {
      name: "Reggane",
      lineWidth: "4px",
      color: {
        linearGradient: {},
        stops: [
          [0, "purple"],
          [0.33, "red"],
          [0.66, "orange"],
          [1, "lightGreen"],
        ],
      },
      data: [
        16.0, 18.2, 23.1, 27.9, 32.2, 36.4, 39.8, 38.4, 35.5, 29.2, 22.0, 17.8,
      ],
    },
    // {
    //   name: "Tallinn",
    //   data: [
    //     -2.9, -3.6, -0.6, 4.8, 10.2, 14.5, 17.6, 16.5, 12.0, 6.5, 2.0, -0.9,
    //   ],
    // },
  ],
}));
</script>

<template>
  <Tabs default-value="today" class="w-[400px]">
    <TabsList>
      <TabsTrigger v-for="item in list" :key="item.value" :value="item.value">
        {{ item.title }}
      </TabsTrigger>
    </TabsList>
    <TabsContent v-for="item in list" :key="item.value" :value="item.value">
      <!-- <component :is="item.component" /> -->
      <highchart :options="options" />
    </TabsContent>
  </Tabs>
</template>
