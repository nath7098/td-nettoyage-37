// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  ssr: true,
  nitro: {
    preset: 'vercel'
  },
  modules: ['@nuxt/ui', '@nuxt/image', '@nuxt/eslint', '@vueuse/motion/nuxt', '@nuxtjs/sitemap', '@nuxtjs/robots'],
  image: {
    format: ['webp', 'avif'],
    quality: 80
  },
  ui: {
    icons: ['heroicons', 'lucide'],
    theme: {
      colors: ['primary', 'secondary', 'info', 'success', 'warning', 'error', 'neutral']
    }
  },
  css: ['~/assets/css/main.css'],
  colorMode: {
    preference: 'light'
  },
  future: {
    compatibilityVersion: 4
  },
  site: {
    url: 'https://td-nettoyage37.fr',
    name: 'TD Nettoyage 37'
  },
  robots: {
    rules: [
      {
        userAgent: '*',
        allow: '/'
      }
    ]
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'fr'
      },
      title: 'TD Nettoyage 37 - Nettoyage toiture & façade à Tours (37)',
      meta: [
        { name: 'description', content: 'TD Nettoyage 37 : nettoyage de toiture, façade, terrasse, volets, portail et pignons, peinture intérieure et extérieure à Tours et en Indre-et-Loire (37). Devis gratuit sous 24h.' },
        { name: 'robots', content: 'index, follow' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { charset: 'utf-8' },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'TD Nettoyage 37' },
        { property: 'og:title', content: 'TD Nettoyage 37 - Nettoyage toiture & façade à Tours (37)' },
        { property: 'og:description', content: 'Nettoyage de toiture, façade, terrasse et peinture intérieure/extérieure à Tours et en Indre-et-Loire. Démoussage, hydrofuge, devis gratuit.' },
        { property: 'og:image', content: 'https://td-nettoyage37.fr/og-image.jpg' },
        { property: 'og:url', content: 'https://td-nettoyage37.fr' },
        { property: 'og:locale', content: 'fr_FR' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'TD Nettoyage 37 - Nettoyage toiture & façade à Tours' },
        { name: 'twitter:description', content: 'Nettoyage toiture, façade, terrasse & peinture à Tours et en Indre-et-Loire (37). Devis gratuit.' },
        { name: 'twitter:image', content: 'https://td-nettoyage37.fr/og-image.jpg' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'canonical', href: 'https://td-nettoyage37.fr' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' },
        { rel: 'dns-prefetch', href: 'https://fonts.googleapis.com' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap' }
      ]
    }
  },
  compatibilityDate: '2024-11-27'
})
