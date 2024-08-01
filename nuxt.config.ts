// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "shadcn-nuxt",
    [
      "nuxt-highcharts",
      {
        /* module options */
      },
    ],
  ],
  highcharts: {
    /* module options */
  },
  shadcn: {
    /**
     * Prefix for all the imported components
     */
    prefix: "",
    /**
     * Directory where the components are located.
     * @default "./components/ui"
     */
    componentDir: "./components/ui",
  },
});
