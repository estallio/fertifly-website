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

          <v-row :class="{'mt_sm--50 mt_md--70 mt--75': i === 0, 'mt_sm--70 mt_md--90 mt--120': i !== 0}">
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

import Link from '../components/content/Link'
import File from '../components/content/File'

import Image from '../components/content/Image'
import Gallery from '../components/content/Gallery'
import DownloadButton from '../components/content/DownloadButton'
import LinkButton from '../components/content/LinkButton'

import Strong from '../components/content/Strong'
import Underline from '../components/content/Underline'
import StrikeThrough from '../components/content/StrikeThrough'
import Emphasis from '../components/content/Emphasis'
import Code from '../components/content/Code'

import ListItem from '../components/content/ListItem'
import List from '../components/content/List'

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
  head() {
    return {
      title: get(this.sanityContent, `seo[${this.$i18n.locale}].title`, ''),
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
      return image && get(image, `altText[${this.$i18n.locale}].text`, '');
    },
    get: (...args) => {
      return get(...args);
    },
    getImage: function(sanityImageUrl) {
      return sanityImageUrl && this.$urlFor(sanityImageUrl).size(500).fit('max').url();
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
        listItem: ListItem,
        list: List,
        marks: {
          strong: Strong,
          underline: Underline,
          'strike-through': StrikeThrough,
          em: Emphasis,
          code: Code,
          link: Link,
          file: File,
        },
        types: {
          image: Image,
          gallery: Gallery,
          downloadButton: DownloadButton,
          linkButton: LinkButton,
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

<style>
  .page-list {
    font-size: 18px;
  }

  @media only screen and (max-width: 767px) {
    .page-list {
      font-size: 16px;
    }
  }
</style>
