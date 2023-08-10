import { defineNuxtConfig } from 'nuxt/config'
const path = require('path');
export default defineNuxtConfig({
    nitro: {
        output: {
          publicDir: path.join(__dirname, 'static')
        }
      },
    "css": [
        "~/assets/scss/main.scss"
    ],
    modules: [
        'nuxt-simple-sitemap'
      ],
})
