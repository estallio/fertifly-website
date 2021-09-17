<template>
  <div>
    <VueSlickCarousel
      v-bind="settings"
      class="slider-activation rn-slick-dot rn-slick-activation dot-light mb--0"
    >
      <div
        class="slide slide-style-2 bg_image"
        v-for="(slider, i) in sliderContent"
        :key="i"
        :style="{ backgroundImage: 'url(' + require(`../../assets/images/bg/${slider.src}`) + ')' }"
      >
        <v-container class="slider-content-height">
          <v-row align="center">
            <v-col cols="12">
              <div class="inner text-left">
                <h1 class="heading-title" v-html="slider.title"></h1>
                <p class="description">
                  {{ slider.desc }}
                </p>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </div>
      <!-- End Single Slide  -->
    </VueSlickCarousel>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        sliderContent: this.$t('index.slider'),
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
          margin: 20,
        },
      };
    },
  };
</script>
