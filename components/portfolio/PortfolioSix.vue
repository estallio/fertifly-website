<template>
  <v-row>
    <!-- Start Single Portfolio  -->
    <v-col
      xl="3"
      lg="3"
      md="4"
      sm="6"
      cols="12"
      class="portfolio-tilthover"
      v-for="(item, i) in portfolioContent"
      :key="i"
    >
      <div class="Tilt-inner">
        <div class="portfolio">
          <div class="thumbnail-inner">
            <div class="thumbnail" :class="item.img"></div>
            <div class="bg-blr-image" :class="item.img"></div>
          </div>
          <div class="content">
            <div class="inner">
              <p>{{ item.meta }}</p>
              <h4>
                <a href="portfolio-details.html">{{ item.title }}</a>
              </h4>
              <div class="portfolio-button">
                <router-link class="rn-btn" to="/portfolio-details"
                  >Case Study</router-link
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </v-col>
    <!-- End Single Portfolio  -->
  </v-row>
</template>

<script>
  export default {
    data() {
      return {
        portfolioContent: [
          {
            img: "image-1",
            meta: "Development",
            title: "Getting tickets to the big show",
          },
          {
            img: "image-2",
            meta: "Development",
            title: "Getting tickets to the big show",
          },
          {
            img: "image-3",
            meta: "Development",
            title: "Getting tickets to the big show",
          },
          {
            img: "image-4",
            meta: "Development",
            title: "Getting tickets to the big show",
          },
          {
            img: "image-5",
            meta: "Development",
            title: "Getting tickets to the big show",
          },
          {
            img: "image-6",
            meta: "Development",
            title: "Getting tickets to the big show",
          },
          {
            img: "image-7",
            meta: "Development",
            title: "Getting tickets to the big show",
          },
          {
            img: "image-8",
            meta: "Development",
            title: "Getting tickets to the big show",
          },
        ],
      };
    },
  };
</script>
