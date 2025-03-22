// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@unocss/nuxt',
    '@nuxt/eslint',
    '@nuxt/content',
  ],
  vue: {
    propsDestructure: true,
  },
  unocss: {
    nuxtLayers: true,
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
      ],
    },
  },
  eslint: {
    // options
    config: {
      standalone: false,
    },
    checker: true,
  },
  experimental: {
    viewTransition: true,
  },
})
