<template>
  <div>
    <VueSlickCarousel
      v-bind="settings"
      class="slider-activation rn-slick-dot rn-slick-activation dot-light mb--0"
    >
      <div
        class="slide slide-style-2 fullscreen bg_image"
        data-black-overlay="8"
        v-for="(slider, i) in sliderContent"
        :key="i"
        :style="{ backgroundImage: 'url(' + slider.src + ')' }"
      >
        <v-container>
          <v-row>
            <v-col cols="12">
              <div class="inner text-left">
                <h1 class="heading-title">{{ slider.title }}</h1>
                <p class="description">
                  {{ slider.desc }}
                </p>
                <div class="slide-btn">
                  <router-link
                    class="rn-button-style--2 btn_solid"
                    to="/contact"
                    >Contact Us</router-link
                  >
                </div>
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
        sliderContent: [
          {
            src: require("../../assets/images/bg/bg-image-17.jpg"),
            title: "Grow business.",
            desc: ` There are many variations of passages of Lorem Ipsum available
                  but the majority have suffered alteration.`,
          },
          {
            src: require("../../assets/images/bg/bg-image-18.jpg"),
            title: "Development.",
            desc: ` There are many variations of passages of Lorem Ipsum available
                  but the majority have suffered alteration.`,
          },
          {
            src: require("../../assets/images/bg/bg-image-19.jpg"),
            title: "Marketing..",
            desc: ` There are many variations of passages of Lorem Ipsum available
                  but the majority have suffered alteration.`,
          },
        ],
        settings: {
          fade: true,
          dots: true,
          arrows: true,
          infinite: true,
          speed: 1000,
          slidesToShow: 1,
          slidesToScroll: 1,
          margin: 20,
        },
      };
    },
  };
</script>

<style lang="scss">
  .slick-slide {
    img {
      display: block;
      width: 100%;
    }
  }
</style>
