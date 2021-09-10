<template>
  <div>
    <VueSlickCarousel
      v-bind="settings"
      class="slider-activation rn-slick-dot dot-light"
    >
      <div
        class="slide slide-style-2 slider-box-content without-overlay d-flex align-center bg_image"
        data-black-overlay="1"
        v-for="(slider, i) in sliderContent"
        :key="i"
        :style="{ backgroundImage: 'url(' + slider.src + ')' }"
      >
        <v-container>
          <div class="inner" :class="slider.text_position">
            <h1 class="heading-title">{{ slider.title }}</h1>
            <p class="description">
              {{ slider.desc }}
            </p>
            <div class="slide-btn">
              <router-link class="rn-button-style--2 btn_solid" to="/contact"
                >Contact Us</router-link
              >
            </div>
          </div>
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
            text_position: "text-right",
            src: require("../../assets/images/bg/bg-image-30.jpg"),
            title: "Agency.",
            desc: ` There are many variations of passages but the majority have suffered alteration.`,
          },
          {
            text_position: "text-left",
            src: require("../../assets/images/bg/bg-image-29.jpg"),
            title: "Agency.",
            desc: `There are many variations of passages but the majority have suffered alteration.`,
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
          adaptiveHeight: true,
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
