<template>
  <div>

    <!-- Start Breadcrump Area  -->
    <div class='breadcrumb-area rn-bg-color ptb--120 bg_image bg_image--pattern'>
      <v-container>
        <v-row>
          <v-col lg='12'>
            <div class='breadcrumb-inner pt--100 pt_sm--40 pt_md--50'>
              <h1 class='heading-title'>{{ $t('about.title') }}</h1>
              <ul class='page-list'>
                <li v-for='(item, i) in breadcrumbs' :key='i'>
                  <nuxt-link :aria-label="item.text" :alt="item.text" :to="localePath(item.to)">{{ item.text }}</nuxt-link>
                </li>
              </ul>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <!-- End Breadcrump Area  -->

    <div class='mb--75'>
      <v-container>

        <template v-for="(contentSection, i) in this.sanityContent.contentSections">

          <v-row class="mt_sm--70 mt_md--90 mt--120">
            <v-col lg="12">
              <div class="section-title section-title--3 text-center">
                <h2 class="heading-title">{{ get(contentSection, `[${$i18n.locale}].heading`, '') }}</h2>
                <p>{{ get(contentSection, `[${$i18n.locale}].subheading`, '') }}</p>
              </div>
            </v-col>
          </v-row>

          <!-- Start Blog Details Area  -->
          <v-row>
            <v-col cols='12'>
              <div class='inner-wrapper'>
                <div class='inner'>
                  <SanityContent class="text-justified" :blocks="get(contentSection, `[${$i18n.locale}].content`, [])" :serializers="serializers" />
                </div>
              </div>
            </v-col>
          </v-row>
          <!-- End Blog Details Area  -->

        </template>

      </v-container>
    </div>
  </div>
</template>

<script>
import { generateGROQ } from '../queries/about'
import get from 'lodash/get'

import ImageComponent from '../components/ImageComponent'

export default {
  data() {
    return {
      breadcrumbs: [
        {
          text: this.$t('index.title'),
          to: '/',
          disabled: false
        },
        {
          text: this.$t('about.title'),
          to: '',
          disabled: true
        }
      ],
    }
  },
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
    getAltText: function(image) {
      return image && get(image, `altTex[${this.$i18n.locale}].text`, '');
    },
    get: (...args) => {
      return get(...args);
    },
    getImage: function(sanityImageUrl) {
      return sanityImageUrl && this.$urlFor(sanityImageUrl).size(500).fit('max');
    },
    getImageHeight: function(imageDoc) {
      return imageDoc && imageDoc.metadata.dimensions.aspectRatio
    }
  },
  computed: {
    availableLocales() {
      return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
    },
    serializers() {
      return {
        types: {
          image: ImageComponent
        },
      }
    }
  },
  nuxtI18n: {
    paths: {
      en: '/about-us',
      de: '/ueber-uns'
    }
  }
}
</script>
