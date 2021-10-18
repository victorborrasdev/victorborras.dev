import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({
  meta: {
    link: [
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@1,700&family=Poppins:wght@300&display=swap'
      }
    ],
  },
  css: [
    '@/assets/styles/main.scss'
  ]
})
