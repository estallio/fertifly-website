<template>
  <div>

    <!-- Start Breadcrump Area  -->
    <div class="breadcrumb-area rn-bg-color ptb--120 bg_image bg_image--pattern">
      <v-container>
        <v-row>
          <v-col lg="12">
            <div class="breadcrumb-inner pt--100 pt_sm--40 pt_md--50">
              <h1 class="heading-title">{{ $t('contact.title') }}</h1>
              <ul class="page-list">
                <li v-for="(item, i) in breadcrumbs" :key="i">
                  <nuxt-link :aria-label="item.text" :alt="item.text" :to="localePath(item.to)">{{ item.text }}</nuxt-link>
                </li>
              </ul>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <!-- End Breadcrump Area  -->

    <!-- Start Contact Address Area  -->
    <div class="rn-contact-address-area rn-section-gap bg_color--5">
      <v-container>
        <ContactAddress />
      </v-container>
    </div>
    <!-- End Contact Address Area  -->

    <!-- Start Contact Area  -->
    <div class="rn-contact-area rn-section-gap bg_color--1">
      <div class="contact-form--1">
        <v-container>
          <Contact />
        </v-container>
      </div>
    </div>
    <!-- End Contact Area  -->

  </div>
</template>

<script>
  import { generateGROQ } from '../queries/products'
  import get from 'lodash/get'
  import config from '../config'

  export default {
    async asyncData({ $sanity, $preview, store }) {
      let includeDrafts = false;

      if ($preview) {
        includeDrafts = true;
      }

      const sanityContent = await $sanity.fetch(generateGROQ(includeDrafts))

      store.commit('STORE_CONTACT_INFO', sanityContent.contactInfo)

      return { sanityContent: sanityContent.content }
    },
    head() {
      return {
        title: get(this.sanityContent, `seo[${this.$i18n.locale}].title`, '') + config.ecoflyTitleAppendix,
        meta: [
          // hid is used as unique identifier. Do not use `vmid` for it as it will not work
          {
            hid: 'description',
            name: 'description',
            content: get(this.sanityContent, `seo[${this.$i18n.locale}].description`, ''),
          }
        ]
      }
    },
    data() {
      return {
        breadcrumbs: [
          {
            text: this.$t('index.title'),
            to: '/',
            disabled: false,
          },
          {
            text: this.$t('contact.title'),
            to: '',
            disabled: true,
          },
        ],
      };
    },
    computed: {
      availableLocales () {
        return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
      },
    },
    nuxtI18n: {
      paths: {
        en: '/contact',
        de: '/kontakt'
      }
    }
  }
</script>
