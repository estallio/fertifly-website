import PurgecssPlugin from 'purgecss-webpack-plugin'
import glob from 'glob-all'
import path from 'path'
import VuetifyLoaderPlugin from 'vuetify-loader/lib/plugin'

import config from './config'
import de from './lang/de'
import en from './lang/en'

const { NODE_ENV = "production" } = process.env;

const isDev = NODE_ENV === "development";

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/coollightbox.client.js',
    '~/plugins/vuecountto.client.js',
    '~/plugins/vuevisibilitysensor.client.js',
    '~/plugins/vueslickcarousel.js',
    '~/plugins/fontawesome.js',
    '~/plugins/preview.client.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
   'vuetify/dist/vuetify.min.css',
   'vue-cool-lightbox/dist/vue-cool-lightbox.min.css',
   'vue-slick-carousel/dist/vue-slick-carousel.css',
   'vue-slick-carousel/dist/vue-slick-carousel-theme.css',
   '~/assets/scss/main.scss'
  ],

  vuetify: {
    defaultAssets: {
      font: false,
      icons: false,
    },
    icons: {
      // reduces size: https://stackoverflow.com/questions/67796971/nuxtjs-vuetify-purgecss
      iconfont: 'mdiSvg'
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    analyze: true,
    extractCSS: true,
    postcss:
      {
        // disable postcss plugins in development
        plugins: isDev
          ? {} : {
            // maybe configure this if there is time somewhen: https://warrenlee.tech/blog/optimizing-css-with-purgecss
            // "@fullhuman/postcss-purgecss": {
            //   content: [
            //     'components/**/*.{js,ts,vue}',
            //     'layouts/**/*.{js,ts,vue}',
            //     'pages/**/*.{js,ts,vue}',
            //     'plugins/**/*.{js,ts,vue}',
            //     'node_modules/vuetify/src/**/*.{js,ts,vue}',
            //     'node_modules/vue-slick-carousel/**/*.{js,ts,vue}'
            //   ],
            //   css: [
            //     'vue-cool-lightbox/dist/vue-cool-lightbox.min.css',
            //     'vue-slick-carousel/dist/vue-slick-carousel.css',
            //     'vue-slick-carousel/dist/vue-slick-carousel-theme.css',
            //     'vuetify/dist/vuetify.min.css',
            //     '~/assets/scss/main.scss'
            //   ],
            //   styleExtensions: ['.css', '.sass', '.scss'],
            //   whitelist: [
            //     'container',
            //     'row',
            //     'spacer',
            //     'aos-animate',
            //     'col',
            //     '[type=button]',
            //     'v-application p'
            //   ],
            //   whitelistPatterns: [
            //     /^v-.*/,
            //     /^col-.*/,
            //     /^theme-.*/,
            //     /^rounded-.*/,
            //     /^data-aos-.*/,
            //     /^(red|grey)--text$/,
            //     /^text--darken-[1-4]$/,
            //     /^text--lighten-[1-4]$/
            //   ],
            //   whitelistPatternsChildren: [
            //     /^post-content/,
            //     /^v-input/,
            //     /^swiper-.*/,
            //     /^pswp.*/,
            //     /^v-text-field.*/,
            //     /^v-progress-linear/
            //   ]
            // },
            "css-byebye": {
              rulesToRemove: [
                /.*\.v-application--is-rtl.*/,
                /.*\.theme--dark.*/
              ]
            }
          }
      },
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // '@nuxtjs/eslint-module',
    // '@nuxtjs/stylelint-module',
    '@nuxtjs/sanity/module',
    'vue-plausible',
    '@nuxtjs/vuetify',
    "@nuxtjs/svg"
  ],

  svg: {
    vueSvgLoader: {
    },
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/i18n', '@nuxtjs/pwa', '@nuxtjs/robots', '@nuxtjs/sitemap'],

  plausible: config.plausible,

  sanity: config.sanity,

  // https://github.com/nuxt-community/robots-module
  robots: {
    UserAgent: '*',
    Disallow: '/',
    Sitemap: config.hostname + '/sitemap.xml',
  },

  router: {
    trailingSlash: false,
  },

  generate: {
    // Important for static hosting with i18n to produce
    // en.html files etc. so there is no trailing slash
    // when served via simple services like Cloudflare Pages etc.
    subFolders: false,

    // TODO: Nuxt is generating a dynamic 404? what is happening here?
    // Generate a 404 page as Cloudflare pages needs one
    fallback: '404.html',
  },

  i18n: {
    locales: [
      {
        code: 'de',
        iso: 'de',
        name: 'Deutsch',
      },
      {
        code: 'en',
        iso: 'en',
        name: 'English',
      },
    ],
    strategy: 'prefix',
    // removing this can be tricky with dynamic i18n slug generation
    defaultLocale: 'de',
    vueI18n: {
      fallbackLocale: 'en',
      messages: { de, en },
    },
    seo: true,
    baseUrl: config.hostname,
    routesNameSeparator: config.routesNameSeparator,
  },







  // Global page headers: https://go.nuxtjs.dev/config-head
  /*head () {
    if (!this.$nuxtI18nHead) {
      return {
        htmlAttrs: {
          myAttribute: 'My Value',
        },
        meta: [
          { charset: 'utf-8' },
          { name: 'viewport', content: 'width=device-width, initial-scale=1' },
          { hid: 'description', name: 'description', content: '' },
          { name: 'format-detection', content: 'telephone=no' },
          {
            hid: 'description',
            name: 'description',
            content: 'My Custom Description'
          },
        ],
        link: [
          { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
          {
            hid: 'apple-touch-icon',
            rel: 'apple-touch-icon',
            sizes: '180x180',
            href: '/apple-touch-icon.png'
          },
        ],
        title: 'nuxt-i18n-test',
      }
    }

    // TODO: canonical not correct

    const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true })
    return {
      htmlAttrs: {
        myAttribute: 'My Value',
      ...i18nHead.htmlAttrs
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: '' },
        { name: 'format-detection', content: 'telephone=no' },
        {
          hid: 'description',
          name: 'description',
          content: 'My Custom Description'
        },
        ...i18nHead.meta
      ],
        link: [
          { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        {
          hid: 'apple-touch-icon',
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/apple-touch-icon.png'
        },
        ...i18nHead.link
      ],
    title: 'nuxt-i18n-test',
    }
  },*/

  sitemap: {
    hostname: config.hostname,
    i18n: true,
    filter1({ routes }) {
      // Problem: Nuxt generates default default localized pages like index.html or about.html even if
      // generation strategy is 'prefix'. For this reason, files like about.html or index.html are present
      // in the output directory and in the sitemap file. We don't want to include these files in the sitemap
      // so unlocalized files are filtered out at the bottom of this function. Requests to the generated files
      // are blocked by a Cloudflare Worker that don't let access any other folder than 'en', 'de' or 'static'.
      // The only page without language we want to be included in the sitemap is the index file. In this case
      // we additionally want to index the location or language based redirect and tell Google about it via
      // the 'x-default' entry in the sitemap. All the other paths are too difficult to x-default them because
      // of localized slug generation. If localized slug generation should be turned off, this should be quite easy.
      // But image an 'about-us' and 'ueber-uns' page. The default language in the browser is german - if the user
      // types in /about-us it will be redirected to /de/about-us and gets a 404 - we don't want Google to index this
      // behaviour even if it suits for one language

      // get the unlocalized index page and any localized one
      const localizedIndexPage = routes.filter((route) =>
        route.name?.includes('index' + config.routesNameSeparator)
      )[0]
      const indexPage = routes.filter((route) => route.name === 'index')[0]

      // push the unlocalized to the localized one
      // this works because all arrays and objects in the routes array are references
      localizedIndexPage.links.push({
        lang: 'x-default',
        url: indexPage.url,
      })

      // connect the localized and unlocalized index pages
      indexPage.links = localizedIndexPage.links

      // filter out all unlocalized routes except the index page
      return routes.filter(
        (route) =>
          !route.name ||
          route.name.includes(config.routesNameSeparator) ||
          route.name.includes('index')
      )
    },
    routes: async () => {
      return [
        // TODO: get jobs dynamic slugs
      ]
    },
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    // TODO: lang manifest different languages?
  },

  server: {
    host: "0.0.0.0"
  }
}
