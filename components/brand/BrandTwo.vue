<template>
  <!-- Start Brand Area -->
  <v-row class="mt--30">
    <v-col cols="12">
      <ul class="brand-style">
        <li v-for="(brand, i) in brandImages" :key="i">
          <a :href="brand.url">
            <img :src="brand.src" alt="Logo Images" />
          </a>
        </li>
      </ul>
    </v-col>
  </v-row>
  <!-- End Brand Area -->
</template>

<script>
  export default {
    data() {
      return {
        brandImages: [
          {
            src: require("../../assets/images/brand/brand-01.png"),
            url: "#",
          },
          {
            src: require("../../assets/images/brand/brand-02.png"),
            url: "#",
          },
          {
            src: require("../../assets/images/brand/brand-03.png"),
            url: "#",
          },
          {
            src: require("../../assets/images/brand/brand-04.png"),
            url: "#",
          },
          {
            src: require("../../assets/images/brand/brand-05.png"),
            url: "#",
          },
          {
            src: require("../../assets/images/brand/brand-06.png"),
            url: "#",
          },
        ],
      };
    },
  };
</script>
