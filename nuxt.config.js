import colors from 'vuetify/es5/util/colors'

export default {
  // server: {
  //   host: '10.0.0.9' // default: localhost
  // },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - nuxt',
    title: 'nuxt',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'SEO Description' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'quill/dist/quill.core.css',
    'quill/dist/quill.snow.css',
    'quill/dist/quill.bubble.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // { src: '~/plugins/api.js' },
    // { src: '~/plugins/axios.js' },
    { src: '@/plugins/lang.js', mode: 'client' },
    { src: '~/plugins/i18n.js' },
    { src: '~/plugins/infiniteloading', ssr: false },
    { src: '~plugins/nuxt-quill-plugin', ssr: false }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    '@nuxtjs/device',
    '@nuxtjs/tailwindcss'
  ],
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: 'AIzaSyA7gMRW2JOm_TrfLhkvpLTOqGm8jInjT8o',
          authDomain: 'cmslayer-c3869.firebaseapp.com',
          databaseURL: 'https://cmslayer-c3869.firebaseio.com',
          projectId: 'cmslayer-c3869',
          storageBucket: 'cmslayer-c3869.appspot.com',
          messagingSenderId: '1027810095143',
          appId: '1:1027810095143:web:1494a6909d5ae36db79e02'
        },
        services: {
          auth: true,
          ssr: true,
          firestore: { ssr: true } // Just as example. Can be any other service.
        }
      }
    ],
    '@nuxt/content',
    [
      'nuxt-i18n',
      {
        // seo: true,
        // baseUrl: 'http://10.0.0.9:3000',
        // detectBrowserLanguage: {
        //   useCookie: true,
        //   cookieKey: 'i18n_redirected',
        //   cookieCrossOrigin: true,
        //   alwaysRedirect: true,
        //   onlyOnRoot: true // recommended
        // },
        defaultLocale: 'en',
        locales: [
          { code: 'en', file: 'en-US.js', iso: 'en-US', name: 'English' },
          { code: 'bn', file: 'bn-BN.js', iso: 'bn-BN', name: 'Bengali', isCatchallLocale: true }
        ],
        lazy: true,
        langDir: 'lang/',
        strategy: 'prefix_except_default',
        vueI18n: { fallbackLocale: 'en' },
        vuex: { syncLocale: true }
      }
    ]
  ],
  content: {
    // Options
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // baseURL: 'http://10.0.0.9:3000',
    proxy: true
  },
  proxy: {
    '/api/': { target: 'http://localhost:3003', pathRewrite: { '^/api/': '' } }
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        light: {
          primary: colors.green.base,
          secondary: colors.teal.base,
          accent: colors.lime.base,
          error: colors.red.base,
          warning: colors.orange.base,
          info: colors.blue.base,
          success: colors.cyan.base
        },
        dark: {
          primary: colors.yellow.darken2,
          accent: colors.green.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  // devServer: {
  //   proxy: 'http://localhost:8080'
  // },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
