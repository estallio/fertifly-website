<template>
  <v-row>
    <v-col cols="12">
      <!-- Start Tab Content  -->
      <div class="rn-testimonial-content">
        <client-only>
        <v-tabs-items v-model="tab">
          <v-tab-item v-for="item in testimonialContent" :key="item.id">
            <v-card flat>
              <v-card-text>
                <div class="inner">
                  <p>
                    {{ get(item, `cite[${$i18n.locale}].text`, '') }}
                  </p>
                </div>
                <div class="author-info">
                  <h6>
                    <span>{{ item.citeFrom }}</span>
                    <span v-if="item.citeFrom && get(item, `affiliation[${$i18n.locale}].text`, null)"> - </span>
                    {{ get(item, `affiliation[${$i18n.locale}].text`, '') }}
                  </h6>
                </div>
              </v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs-items>
        </client-only>
        <client-only #placeholder>
          <v-card flat v-if="testimonialContent.length">
            <v-card-text>
              <div class="inner">
                <p>
                  {{ get(testimonialContent, `[0].cite[${$i18n.locale}].text`, '') }}
                </p>
              </div>
              <div class="author-info">
                <h6>
                  <span>{{ get(testimonialContent, `[0].citeFrom`, '') }}</span>
                  <span v-if="get(testimonialContent, `[0].citeFrom`, null) && get(testimonialContent, `[0].affiliation[${$i18n.locale}].text`, null)"> - </span>
                  {{ get(testimonialContent, `[0].affiliation[${$i18n.locale}].text`, '') }}
                </h6>
              </div>
            </v-card-text>
          </v-card>
        </client-only>
        <!-- End .v-tabs-items -->
        <v-tabs class="z-index-2" v-model="tab" centered hide-slider center-active>
          <v-tab v-for="item in testimonialContent" :key="item.id">
            <div class="thumb">
              <img :src="getThumbnailImage(item.image)"
                   :alt="getAltText(item.image)"
                   :width="100"
                   :height="100 / getThumbnailHeight(item.imageDoc)"
              />
            </div>
          </v-tab>
        </v-tabs>
        <!-- End .v-tabs -->
      </div>
      <!-- End .rn-testimonial-content -->
    </v-col>
  </v-row>
</template>

<script>
  import get from 'lodash/get';
  import config from '~/config'

  export default {
    props: ['testimonialContent'],

    data() {
      return {
        tab: null,
      };
    },

    methods: {
      getAltText: function(image) {
        return image && get(image, `altText[${this.$i18n.locale}].text`, '');
      },
      get: (...args) => {
        return get(...args);
      },
      getThumbnailImage: function(sanityImageUrl) {
        try {
          return this.$urlFor(sanityImageUrl).size(200).url();
        } catch (ex) {
          return config.fallbackImageSrc;
        }
      },
      getThumbnailHeight: function(imageDoc) {
        return imageDoc && this.get(imageDoc, 'metadata.dimensions.aspectRatio')
      }
    }
  };
</script>

<style>
  .z-index-2 {
    position: relative;
    z-index: 2;
  }

  .rn-testimonial-content img {
    height: auto;
  }
</style>
