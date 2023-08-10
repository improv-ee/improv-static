import { defineNuxtConfig } from 'nuxt/config'
const path = require('path');

export default defineNuxtConfig({
    "css": [
        "~/assets/scss/main.scss"
    ],
    modules: [
        'nuxt-simple-sitemap'
      ],
      nitro: {
        output: {
          publicDir: path.join(__dirname, 'cf-pages')
        }
      },
})
