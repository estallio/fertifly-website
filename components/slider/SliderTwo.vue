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
        :style="{ background: `url(${getSanityBackgroundImageUrl(slider.backgroundImage)}) center center / cover no-repeat, url(${slider.backgroundImageDoc.metadata.lqip}) center center / cover no-repeat` }"
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

  export default {
    props: ['sliderContent'],
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
      },
    }),
    methods: {
      get: (...args) => {
        return get(...args);
      },
      getSanityBackgroundImageUrl: function(sanityUrl) {
        return sanityUrl && this.$urlFor(sanityUrl).size(1000);
      }
    }
  };
</script>

<style>
  .slide::before {
    content: '';
    background-image: url('../../assets/images/bg/bg-image-pattern.png');
    position: absolute;
    background-repeat: repeat;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0.65;
  }

  .slick-track {
    left: 0 !important;
  }
</style>
