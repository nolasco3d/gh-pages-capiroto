// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    // baseURL: '/gh-pages-capiroto/'
  },
  modules:['@nuxtjs/tailwindcss'],
  tailwindcss: {
    viewer: false,
    cssPath: '~/assets/css/tailwind.css'
  },
  css: ['~/assets/css/tailwind.css']
})
