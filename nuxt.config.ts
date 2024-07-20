// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@pinia/nuxt',
    '@nuxt/ui',
    '@nuxtjs/tailwindcss',
    [
      '@nuxtjs/google-fonts',
      {
        families: {
          'Noto Sans SC': {
            wght: [100, 300, 400, 500, 700, 900],
            ital: [100, 300],
          },
          Roboto: true,
        },
        display: 'swap',
        preconnect: true,
        preload: true,
      },
    ],
  ],
  colorMode: {
    preference: 'light',
  },
  tailwindcss: {
    // Options
  },
  css: ['~/assets/css/main.css'],
});
