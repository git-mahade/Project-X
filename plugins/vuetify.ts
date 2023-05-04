import { createVuetify } from 'vuetify'
import type { ThemeDefinition } from "vuetify";
import "@mdi/font/css/materialdesignicons.css";
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export default defineNuxtPlugin(nuxtApp => {
  const Lighttheme: ThemeDefinition = {
    dark: false,
    variables: {},
    colors: {
      primary: "#1e88e5",
      info: "#03c9d7",
      success: "#05b187",
      accent: "#fc4b6c",
      warning: "#fec90f",
      error: "#fc4b6c",
      secondary: "#0cb9c5",
    },
  };
  
  const Darktheme: ThemeDefinition = {
    dark: true,
    colors: {
      primary: "#1e88e5",
      info: "#03c9d7",
      success: "#05b187",
      accent: "#fc4b6c",
      warning: "#fec90f",
      error: "#fc4b6c",
      secondary: "#0cb9c5",
    },
  };
  const vuetify = createVuetify({
    ssr: true,
    components,
    directives,
    icons: {
      defaultSet: 'mdi',
      aliases,
      sets: {
        mdi,
      }
    },
    theme: {
      themes: {
        light: Lighttheme,
        dark: Darktheme,
      },
    },
    defaults: {
      VBtn: {
        color: "primary",
        rounded: "md",
        flat: true,
        fontWeight: "400",
        letterSpacing: "0",
      },
      VCard: {
        flat: true,
        elevation: 0,
      },
    },
  })

  nuxtApp.vueApp.use(vuetify)
})