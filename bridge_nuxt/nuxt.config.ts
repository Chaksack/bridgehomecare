// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],
  runtimeConfig: {
    public: {
      calendlyUrl: 'https://calendly.com/bridgecarehomesolutions'
    }
  },
  app: {
    head: {
      htmlAttrs: { lang: 'en-US' },
      titleTemplate: (title) => (title ? `${title} | BridgeCare Home Solutions` : 'BridgeCare Home Solutions'),
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Structured, non-medical recovery support at home: pre and post operative recovery, postpartum and new mother household support, and traditional non-medical home care, serving the Denver-Aurora metropolitan area.' }
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/images/logo.png' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600;700&family=Libre+Baskerville:wght@400;700&display=swap' },
        { rel: 'stylesheet', href: 'https://assets.calendly.com/assets/external/widget.css' }
      ],
      script: [
        { src: 'https://assets.calendly.com/assets/external/widget.js', defer: true }
      ]
    }
  }
})
