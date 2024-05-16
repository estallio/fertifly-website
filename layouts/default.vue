<template>
  <v-app id="inspire">

    <Header/>

    <v-main>
      <Nuxt />
    </v-main>

    <Footer/>

    <v-fab-transition>
      <v-btn
        v-scroll="onScroll"
        v-show="fab"
        fab
        color="#eb460a"
        fixed
        width="50"
        height="50"
        bottom
        right
        name="'To Top' Button"
        aria-label="'To Top' Button"
        @click="toTop"
      >
        <font-awesome-icon icon="angle-up" />
      </v-btn>
    </v-fab-transition>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      fab: false,
    }),
    methods: {
      onScroll(e) {
        if (typeof window === "undefined") return;
        const top = window.pageYOffset || e.target.scrollTop || 0;
        this.fab = top > 60;
      },
      toTop() {
        this.$vuetify.goTo(0);
      },
    },
    head() {
      let i18nHead = {};

      if (this.$nuxtI18nHead) {
        i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true });
      }

      return {
        htmlAttrs: {
          ...(i18nHead.htmlAttrs || {})
        },
        meta: [
          { charset: 'utf-8' },

          { name: 'viewport', content: 'width=device-width, initial-scale=1' },

          // For IE10 Metro
          { name: 'msapplication-TileColor', content: "#FFFFFF" },
          { name: 'msapplication-TileImage', content: "/favicon-114.png" },
          { name: 'theme-color', content: "#ffffff" },
          ...(i18nHead.meta || [])
        ],
        link: [
          // For old IEs
          { rel: 'shortcut icon', href: '/favicon.ico' },

          // For new browsers multisize ico
          {
            rel: 'icon',
            type: 'image/x-icon',
            sizes: '16x16 32x32',
            href: '/favicon.ico'
          },

          // For iPad with high-resolution Retina display running iOS ≥ 7:
          {
            rel: 'apple-touch-icon',
            sizes: '152x152',
            href: '/favicon-152-precomposed.png'
          },

          // For iPad with high-resolution Retina display running iOS ≤ 6:
          {
            rel: 'apple-touch-icon',
            sizes: '144x144',
            href: '/favicon-144-precomposed.png'
          },

          // For iPhone with high-resolution Retina display running iOS ≥ 7:
          {
            rel: 'apple-touch-icon',
            sizes: '120x120',
            href: '/favicon-120-precomposed.png'
          },

          // For iPhone with high-resolution Retina display running iOS ≤ 6:
          {
            rel: 'apple-touch-icon',
            sizes: '114x114',
            href: '/favicon-114-precomposed.png'
          },

          // For iPhone 6+
          {
            rel: 'apple-touch-icon',
            sizes: '180x180',
            href: '/favicon-180-precomposed.png'
          },

          // For first- and second-generation iPad:
          {
            rel: 'apple-touch-icon',
            sizes: '72x72',
            href: '/favicon-72-precomposed.png'
          },

          // For non-Retina iPhone, iPod Touch, and Android 2.1+ devices:
          { rel: 'apple-touch-icon', sizes: '57x57', href: '/favicon-57.png' },

          // Chrome for Android
          { rel: 'icon', sizes: '192x192', href: '/favicon-192.png' },

          ...(i18nHead.link || []).filter(element => element.hid !== 'i18n-xd')
        ],
      }
    }
  };
</script>

<style scoped>
  .v-btn--is-elevated.v-btn--fab {
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  }
  .v-btn--icon.v-size--default .v-icon,
  .v-btn--fab.v-size--default .v-icon {
    height: 30px;
    font-size: 30px;
    width: 30px;
  }
  .v-btn--fab.v-btn--fixed {
    z-index: 99;
  }
  .fa-angle-up {
    display: block;
    line-height: 48px;
    font-size: 22px;
    font-weight: 600;
    color: #fffff6;
  }
  .v-btn--absolute.v-btn--bottom,
  .v-btn--fixed.v-btn--bottom {
    bottom: 60px;
  }

  .v-btn--absolute.v-btn--right,
  .v-btn--fixed.v-btn--right {
    right: 20px;
  }
</style>
