<template>
  <div>
    <!-- Start Slider Area -->
    <SliderTwo :sliderContent="this.sanityContent.banner" />
    <!-- End Slider Area -->

    <!-- Start Area -->
    <div>
      <v-container>
        <div v-for="(contentItem, i) in this.sanityContent.contentSections" :key="contentItem._key">

          <!-- Start First Section Heading -->
          <v-row :class="{'mt_sm--60 mt_md--80 mt--110': i === 0, 'mt_sm--70 mt_md--90 mt--150': i !== 0}">
            <v-col lg="12">
              <div class="section-title section-title--3 text-center">
                <h2 class="heading-title">{{ get(contentItem, `headingFields[${$i18n.locale}].heading`, '') }}</h2>
                <p>{{ get(contentItem, `headingFields[${$i18n.locale}].subheading`, '') }}</p>
              </div>
            </v-col>
          </v-row>
          <!-- End First Section Heading -->

          <div v-for="subContentItem in contentItem.content" :key="subContentItem._key">
            <!-- Start First Content  -->
            <v-row class="mt_sm--10 mt_md--20 mt--40 justify-center">

              <!-- Start Column -->
              <v-col
                :cols="subContentItem.showImageHalf ? 10 : 12"
                :lg="subContentItem.showImageHalf ? 6 : 7"
                :md="subContentItem.showImageHalf ? 6 : 7"
                :order="subContentItem.smImageAboveText ? 2 : 1" :order-md="subContentItem.imageLocatedLeft ? 2 : 1">
                <div class="flex-column justify-center d-flex fill-height">
                  <SanityContent class="text-justified" :blocks="get(subContentItem, `textBlock[${$i18n.locale}].text`, [])" />
                </div>
              </v-col>
              <!-- End Column -->

              <!-- Start Column -->
              <v-col
                :cols="subContentItem.showImageHalf ? 10 : 9"
                :lg="subContentItem.showImageHalf ? 6 : 4"
                :md="subContentItem.showImageHalf ? 9 : 4"
                :sm="subContentItem.showImageHalf ? 9 : 7"
                class="flex-lg" :order="subContentItem.smImageAboveText ? 1 : 2" :order-md="subContentItem.imageLocatedLeft ? 1 : 2">
                <div class="pb_sm--20 pt_sm--15 pb_md--25 pt_md--25 thumbnail flex-lg flex-lg-column justify-lg-center">
                  <img class="w-100"
                       style="box-shadow: none"
                       :src="getContentImage(subContentItem.image)"
                       :alt="getAltText(subContentItem.image)"
                       :width="100"
                       :height="100 / getImageHeight(subContentItem.imageDoc)"
                  />
                </div>
              </v-col>
              <!-- End Column -->

            </v-row>
            <!-- End First Content  -->

            <!-- Start Counterup Area  -->
            <div v-if="subContentItem.hasFactsAndFigures" class="rn-counterup-area mt_sm--35 mt_md--45 mt--70 mb_sm--20 mb_md--20 mb--10">
              <v-container>
                <h3 class="heading-title text-center mb-0">{{ $t('index.factsAndFiguresHeading') }}</h3>
                <Counter :factsAndFigures="subContentItem.factsAndFigures" />
              </v-container>
            </div>
            <!-- End Counterup Area  -->

          </div>

        </div>

      </v-container>
    </div>

    <!-- Start Finding us Area  -->
    <div class="rn-finding-us-area rn-finding-us">
      <div class="inner">
        <div class="content-wrapper" style="flex-direction: column">
          <div class="content products-box">
            <div :class="{'container': $vuetify.breakpoint.smAndUp}">
              <h4 style="color: #444">{{ get(sanityContent, `toProductsSection.toProductsHeading[${$i18n.locale}].heading`, '') }}</h4>
              <p style="color: #444">{{ get(sanityContent, `toProductsSection.toProductsHeading[${$i18n.locale}].text`, '') }}</p>
              <nuxt-link :alt="get(this.sanityContent, `toProductsSection.toProductsHeading[${$i18n.locale}].buttonText`, '')" :to="localePath('products')" class="rn-button-style--2 btn_solid btn-size-sm">{{ get(sanityContent, `toProductsSection.toProductsHeading[${$i18n.locale}].buttonText`, '') }}</nuxt-link>
            </div>
          </div>
        </div>

        <div class="thumbnail">
          <div class="image">
            <img
              style="box-shadow: none; max-width: 1600px"
              :src="getProductsImage(this.sanityContent.toProductsSection.backgroundImage)"
              :alt="this.$t('index.productsBackgroundImageAlt')"
              :width="1000"
              :height="1000 / getImageHeight(this.sanityContent.toProductsSection.backgroundImageDoc)"
            />
          </div>
        </div>

      </div>
    </div>
    <!-- End Finding us Area  -->

    <!-- Start Testimonial Area  -->
    <div class="rn-testimonial-area ptb--80">
      <v-container>
        <Testimonial :testimonialContent="this.sanityContent.testimonials" />
      </v-container>
    </div>
    <!-- Start Testimonial Area  -->

  </div>
</template>
<script>
  import { generateGROQ } from '../queries/home'
  import get from 'lodash/get'
  import config from '../config'

  export default {
    async asyncData({ $sanity, $preview }) {
      let includeDrafts = false;

      if ($preview) {
        includeDrafts = true;
      }

      return { sanityContent: await $sanity.fetch(generateGROQ(includeDrafts)) }
    },

    head() {
      return {
        link: [
          {
            rel: 'x-default',
            href: config.hostname
          }
        ],
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

    mounted() {
      if (this.$preview) {
        this.$sanity.client
        .listen(generateGROQ(true))
        .subscribe((update) => {
          this.sanityContent = update.result;
        })
      }
    },

    methods: {
      getAltText: function(image) {
        return image && get(image, `altTex[${this.$i18n.locale}].text`, '');
      },
      get: (...args) => {
        return get(...args);
      },
      getContentImage: function(sanityImageUrl) {
        return sanityImageUrl && this.$urlFor(sanityImageUrl).size(500).fit('max');
      },
      getProductsImage: function(sanityImageUrl) {
        return sanityImageUrl && this.$urlFor(sanityImageUrl).size(1000).fit('max');
      },
      getImageHeight: function(imageDoc) {
        return imageDoc && imageDoc.metadata.dimensions.aspectRatio
      }
    }
  }
</script>

<style>
.products-box {
  background-color: #fff !important;
  box-shadow: 0 0 15px 1px rgba(170, 170, 170, 0.5);
}
@media only screen and (max-width: 1050px) {
  .products-box {
    background-color: transparent !important;
  }
}
.rn-finding-us-area {
  margin-top: 90px;
}
.rn-testimonial-area {
  margin-top: 100px;
}
.rn-finding-us .inner {
  max-width: 2000px;
  margin: 0 auto;
}
@media only screen and (max-width: 1264px) {
  .products-box {
    box-shadow: none;
  }
  .rn-finding-us-area {
    margin-top: 70px;
  }
  .rn-testimonial-area {
    margin-top: 0;
  }
  .rn-finding-us-area img {
    width: 100% !important;
    height: auto !important;

    padding-top: 0;
  }
}
.rn-finding-us-area img {
  padding-top: 110px;
}
.rn-testimonial-content::after {
  right: 20%;
  bottom: 25%;
}
.rn-testimonial-area {
  margin-top: 0;
}
</style>
