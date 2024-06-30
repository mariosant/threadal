// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@nuxt/image", "@nuxtjs/google-fonts", "@pinia/nuxt"],
  googleFonts: {
    families: {
      Inter: [400, 600, 700],
    },
  },
  runtimeConfig: {
    public: {
      pocketbaseUrl: process.env["POCKETBASE_URL"],
    },
  },
});
