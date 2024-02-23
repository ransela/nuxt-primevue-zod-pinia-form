import * as path from "path";

export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "nuxt-primevue",'@pinia/nuxt'],
  devtools: { enabled: true },
  typescript: {
    typeCheck: true,
    strict: true,
  },
  primevue: {
    options: { unstyled: true },
    importPT: { as: "Lara", from: path.resolve(__dirname, "./presets/lara/") },
    components: {
      exclude: ["Editor", "Chart"],
    },
  },
});
