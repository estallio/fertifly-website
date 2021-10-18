<template>
  <div>

    <!-- Start Breadcrump Area  -->
    <div class="breadcrumb-area rn-bg-color ptb--120 bg_image bg_image--pattern">
      <v-container>
        <v-row>
          <v-col lg="12">
            <div class="breadcrumb-inner pt--100 pt_sm--40 pt_md--50">
              <h1 class="heading-title">{{ $t('products.title') }}</h1>
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

    <div class="pb_md--100 pb--80">
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

        <!-- Start First Content  -->
        <v-row class="mt_sm--40 mt_md--20 mt--40" v-for="(product, i) in this.sanityContent.products" :key="product._key">
          <v-col cols="12">
            <v-row class="sercice-details-content align-items-center justify-center">

              <!-- Start Column -->
              <v-col lg="3" md="4" cols="4" class="flex-lg">
                <div class="pb_sm--20 pt_sm--15 pb_md--25 pt_md--25 thumbnail flex-lg flex-lg-column justify-lg-center">
                  <img class="w-100"
                       style="box-shadow: none"
                       :src="getProductImage(product.image)"
                       :alt="getAltText(product.image)"
                       :width="100"
                       :height="100 / getImageHeight(product.imageDoc)"
                  />
                </div>
              </v-col>
              <!-- End Column -->

              <!-- Start Column -->
              <v-col lg="7" md="7" cols="12">
                <div class="flex-column justify-center d-flex fill-height">
                  <h2 class="heading-title">{{ get(product, `text[${$i18n.locale}].heading`, '') }}</h2>
                    <SanityContent class="text-justified" :blocks="get(product, `text[${$i18n.locale}].text`, [])" />
                </div>
              </v-col>
              <!-- End Column -->

            </v-row>
          </v-col>
        </v-row>
        <!-- End First Content  -->

      </v-container>
    </div>

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
    methods: {
      getAltText: function(image) {
        return image && get(image, `altText[${this.$i18n.locale}].text`, '');
      },
      get: (...args) => {
        return get(...args);
      },
      getProductImage: function(sanityImageUrl) {
        return sanityImageUrl && this.$urlFor(sanityImageUrl).size(500).fit('max').url();
      },
      getImageHeight: function(imageDoc) {
        return imageDoc && imageDoc.metadata.dimensions.aspectRatio
      }
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
            text: this.$t('products.title'),
            to: '',
            disabled: true,
          },
        ],
      };
    },
    nuxtI18n: {
      paths: {
        en: '/products',
        de: '/produkte'
      }
    }
  };
</script>

<style>
@media only screen and (max-width: 960px) {
  .heading-title {
    text-align: center;
  }
}
</style>
