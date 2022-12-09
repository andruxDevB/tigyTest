import MomentLocalesPlugin from 'moment-locales-webpack-plugin'
import authConfig from './config/auth.config'

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  env: {
    API_URL: process.env.API_URL,
    PUSHER_KEY: process.env.PUSHER_KEY,
    PUSHER_CLUSTER: process.env.PUSHER_CLUSTER,
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'TIGY',
    titleTemplate: '%s - TIGY',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~assets/css/v-tooltip.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/i18n.js',
    '~/plugins/axios.js',
    '~/plugins/lodash.js',
    '~/plugins/helpers.js',
    '~/plugins/filters.js',
    '~/plugins/v-tooltip.js',
    '~/plugins/vue-charts.js',
    '~/plugins/vee-validate.js',
    '~/plugins/vue-svg-gauge.js',
    '~/plugins/persisted-state.js',
    '~/plugins/vue-easy-slider.js',
    '~/plugins/vue-autosuggest.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    // https://github.com/whardier/nuxt-hero-icons
    '@nuxt-hero-icons/outline/nuxt',
    '@nuxt-hero-icons/solid/nuxt',
    // https://github.com/nuxt-community/moment-module
    '@nuxtjs/moment',
    [
      '@nuxtjs/laravel-echo',
      {
        broadcaster: 'pusher',
        key: process.env.PUSHER_KEY,
        cluster: process.env.PUSHER_CLUSTER,
        forceTLS: true,
      },
    ],
    '@nuxt/postcss8',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // 'nuxt-vite',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/svg',
    '@nuxtjs/auth-next',
    ['nuxt-tailvue', { toast: true, modal: true, button: true }],
    [
      'nuxt-i18n',
      {
        locales: [
          {
            code: 'es',
            iso: 'es-ES',
            file: 'es/index.js',
          },
        ],
        lazy: true,
        defaultLocale: 'es',
        strategy: 'prefix_except_default',
        langDir: 'lang/',
      },
    ],
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: process.env.API_URL,
  },

  // moment module configuration: https://github.com/nuxt-community/moment-module
  moment: {
    defaultLocale: 'es',
    locales: ['es'],
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    plugins: [
      new MomentLocalesPlugin({
        localesToKeep: ['es'],
      }),
    ],
    postcss: {
      plugins: {
        'postcss-import': true,
        'tailwindcss/nesting': {},
        'postcss-nested': {},
      },
    },
  },

  auth: authConfig,

  loading: {
    color: '#99719E',
    height: '5px',
  },

  router: {
    middleware: ['sidebar'],
  },
}
