export default defineNuxtConfig({
  app: {
    head: {
      title: "Project X",
    },
  },
  css: ["vuetify/lib/styles/main.sass", "~/assets/css/main.css","~/assets/scss/main.scss" ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  build: {
    transpile: ["vuetify"],
  },
  vite: {
    define: {
      "process.env.DEBUG": false,
    },
  },
  modules: ['@pinia/nuxt'],
});
