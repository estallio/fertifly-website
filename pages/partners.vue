<template>
  <div>

    <!-- Start Breadcrump Area  -->
    <div class="breadcrumb-area rn-bg-color ptb--120 bg_image bg_image--pattern">
      <v-container>
        <v-row>
          <v-col lg="12">
            <div class="breadcrumb-inner pt--100 pt_sm--40 pt_md--50">
              <h1 class="heading-title">{{ $t('partners.title') }}</h1>
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

    <v-container>
      <!-- Start First Section Heading -->
      <v-row class="mt_sm--50 mt_md--70 mt--75">
        <v-col lg="12">
          <div class="section-title section-title--3 text-center">
            <h2 class="heading-title">{{ get(sanityContent, `headingSection[${$i18n.locale}].heading`, '') }}</h2>
            <p>{{ get(sanityContent, `headingSection[${$i18n.locale}].subheading`, '') }}</p>
          </div>
        </v-col>
      </v-row>
      <!-- End First Section Heading -->
    </v-container>

    <!-- Start Brand Area -->
    <div class="rn-brand-area brand-separation">
      <v-container>
        <Brand :partners="sanityContent.partners" />
      </v-container>
    </div>
    <!-- End Brand Area -->

  </div>
</template>

<script>
  import { generateGROQ } from '../queries/partners'
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
    methods: {
      get: (...args) => {
        return get(...args);
      },
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
            text: this.$t('partners.title'),
            to: '',
            disabled: true,
          },
        ],
      };
    },
    nuxtI18n: {
      paths: {
        en: '/partners',
        de: '/partner'
      }
    }
  }
</script>
