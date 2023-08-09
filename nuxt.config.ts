import colors from 'vuetify/lib/util/colors'
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxthq/ui',
    '@invictus.codes/nuxt-vuetify',
  ],
  css: [
    "/global.css"
  ],
  vuetify: {
    /* vuetify options */
    vuetifyOptions: {
      theme: {
        themes: {
          light: {
            dark: false,
            colors: {
              red: colors.red.darken1, // #E53935
              pink: colors.red.lighten4, // #FFCDD2
            },
          },
        },
      },
    },

    moduleOptions: {
      /* nuxt-vuetify module options */
    }
  },
  colorMode: {
    preference: 'light',
  },
})
