// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  srcDir: 'src',
  ssr: false,
  devServer: { host: process.env.TAURI_DEV_HOST || 'localhost' },

  vite: {
    clearScreen: false,
    envPrefix: ['VITE_', 'TAURI_']
  },

  modules: ['@nuxt/ui'],
})