<template>
  <v-row>
    <!-- Start Single Portfolio  -->
    <v-col
      lg="4"
      md="4"
      sm="6"
      cols="12"
      class="mt--40"
      v-for="(item, i) in portfolioContent"
      :key="i"
    >
      <div class="portfolio">
        <div class="thumbnail-inner">
          <v-img class="thumbnail" :src="item.src"></v-img>
          <v-img class="bg-blr-image" :src="item.src"></v-img>
        </div>
        <div class="content">
          <div class="inner">
            <p>{{ item.meta }}</p>
            <h4>
              <router-link to="portfolio-details">{{ item.title }}</router-link>
            </h4>
            <div class="portfolio-button">
              <router-link class="rn-btn" to="/portfolio-details"
                >Case Study</router-link
              >
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
            src: require("../../assets/images/portfolio/portfolio-8.jpg"),
            meta: "Development",
            title: "Getting tickets to the big show",
          },
          {
            src: require("../../assets/images/portfolio/portfolio-7.jpg"),
            meta: "Development",
            title: "Getting tickets to the big show",
          },
          {
            src: require("../../assets/images/portfolio/portfolio-3.jpg"),
            meta: "Development",
            title: "Getting tickets to the big show",
          },
          {
            src: require("../../assets/images/portfolio/portfolio-4.jpg"),
            meta: "Development",
            title: "Getting tickets to the big show",
          },
          {
            src: require("../../assets/images/portfolio/portfolio-3.jpg"),
            meta: "Development",
            title: "Getting tickets to the big show",
          },
          {
            src: require("../../assets/images/portfolio/portfolio-2.jpg"),
            meta: "Development",
            title: "Getting tickets to the big show",
          },
        ],
      };
    },
  };
</script>
