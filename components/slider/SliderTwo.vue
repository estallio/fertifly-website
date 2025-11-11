<template>
  <div>
    <VueSlickCarousel
      v-if='sliderContent.length'
      v-bind="settings"
      class="slider-activation rn-slick-dot rn-slick-activation dot-light mb--0"
    >
      <div
        class="slide slide-style-2 bg_image"
        v-for="(slider, i) in sliderContent"
        :key="i"
        :style="{ background: `url(${getSanityBackgroundImageUrl(slider.backgroundImage)}) center ${top ? 'top' : 'center'} / cover no-repeat, url(${ get(slider, 'backgroundImageDoc.metadata.lqip') }) center center / cover no-repeat` }"
      >
        <v-container class="slider-content-height">
          <v-row align="center">
            <v-col cols="12">
              <div class="inner text-left">
                <h1 class="heading-title">{{ get(slider, `text[${$i18n.locale}].heading`, '') }}</h1>
                <p class="description">
                  {{ get(slider, `text[${$i18n.locale}].subheading`, '') }}
                </p>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </div>
      <!-- End Single Slide  -->
    </VueSlickCarousel>

    <div v-else class="slider-activation rn-slick-dot rn-slick-activation dot-light mb--0">
      <div class="slide slide-style-2 bg_image">
        <v-container class="slider-content-height">
        </v-container>
      </div>
    </div>
  </div>
</template>

<script>
  import get from 'lodash/get';
  import config from '../../config';

  export default {
    props: ['sliderContent', 'top'],
    data: () => ({
      settings: {
        fade: true,
        dots: true,
        arrows: false,
        infinite: true,
        adaptiveHeight: false,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
        // rows: 0 // causes heap out of memory when prerendered with nuxt and node
      },
    }),
    methods: {
      get: (...args) => {
        return get(...args);
      },
      getSanityBackgroundImageUrl(sanityUrl) {
        try {
          return this.$urlFor(sanityUrl).size(2000).url();
        } catch (ex) {
          return config.fallbackImageSrc;
        }
      }
    }
  };
</script>

<style>
/*
  .slide::before {
    content: '';
    background-image: url('../../assets/images/bg/bg-image-pattern.png');
    position: absolute;
    background-repeat: repeat;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0.85;
  }
*/
  .slick-track {
    left: 0 !important;
  }

  .slide {
    display: block !important;
  }

  .slide .inner .heading-title,
  .slide .inner .description {
    color: #FFFEF3;
  }
</style>
