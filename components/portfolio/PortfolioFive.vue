<template>
  <v-row class="row--5">
    <!-- Start Single Portfolio  -->
    <v-col
      lg="3"
      md="4"
      sm="6"
      cols="12"
      v-for="(item, i) in portfolioContent"
      :key="i"
    >
      <div class="portfolio-style--3">
        <div class="thumbnail">
          <router-link to="/portfolio-details">
            <img class="w-100" :src="item.src" alt="Portfolio Images" />
          </router-link>
        </div>
        <div class="content">
          <p class="portfoliotype">{{ item.meta }}</p>
          <h4 class="heading-title">
            <router-link to="/portfolio-details">{{ item.title }}</router-link>
          </h4>
          <div class="portfolio-btn">
            <router-link class="rn-btn white--text" to="/portfolio-details"
              >Read More</router-link
            >
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
          src: require("../../assets/images/portfolio/portfolio-1.jpg"),
          meta: "Development",
          title: "You can see your Portfolio",
        },
        {
          src: require("../../assets/images/portfolio/portfolio-2.jpg"),
          meta: "Html",
          title: "Getting tickets to the big show",
        },
        {
          src: require("../../assets/images/portfolio/portfolio-3.jpg"),
          meta: "Graphic",
          title: "You can see your Portfolio",
        },
        {
          src: require("../../assets/images/portfolio/portfolio-4.jpg"),
          meta: "Freelancer",
          title: "You can see your Portfolio",
        },
        {
          src: require("../../assets/images/portfolio/portfolio-5.jpg"),
          meta: "Freelancer",
          title: "The Language of Developer",
        },
        {
          src: require("../../assets/images/portfolio/portfolio-6.jpg"),
          meta: "Freelancer",
          title: "You can see your Portfolio",
        },
        {
          src: require("../../assets/images/portfolio/portfolio-7.jpg"),
          meta: "App Development",
          title: "The Language of Developer",
        },
        {
          src: require("../../assets/images/portfolio/portfolio-8.jpg"),
          meta: "Freelancer",
          title: "You can see your Portfolio",
        },
      ],
    };
  },
};
</script>
