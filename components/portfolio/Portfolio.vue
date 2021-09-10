<template>
  <div>
    <!-- Start Portfolio Activation  -->
    <VueSlickCarousel
      v-bind="settings"
      class="rn-slick-activation portfolio-slick-activation item-fluid slick-dotted rn-slick-dot mt--40 mt_sm--40"
    >
      <!-- Start Single Portfolio  -->
      <div class="portfolio" v-for="(item, i) in portfolioContent" :key="i">
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
      <!-- End Single Portfolio  -->
    </VueSlickCarousel>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        portfolioContent: [
          {
            src: require("../../assets/images/portfolio/portfolio-2.jpg"),
            meta: "Development",
            title: "Getting tickets to the big show",
          },
          {
            src: require("../../assets/images/portfolio/portfolio-5.jpg"),
            meta: "Development",
            title: "Getting tickets to the big show",
          },
          {
            src: require("../../assets/images/portfolio/portfolio-6.jpg"),
            meta: "Development",
            title: "Getting tickets to the big show",
          },
          {
            src: require("../../assets/images/portfolio/portfolio-7.jpg"),
            meta: "Development",
            title: "Getting tickets to the big show",
          },
          {
            src: require("../../assets/images/portfolio/portfolio-8.jpg"),
            meta: "Development",
            title: "Getting tickets to the big show",
          },
          {
            src: require("../../assets/images/portfolio/portfolio-9.jpg"),
            meta: "Development",
            title: "Getting tickets to the big show",
          },
        ],
        // for all works
        settings: {
          dots: true,
          arrows: true,
          infinite: true,
          speed: 500,
          slidesToShow: 5,
          slidesToScroll: 1,
          initialSlide: 0,

          responsive: [
            {
              breakpoint: 1600,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
              },
            },
            {
              breakpoint: 1263,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
              },
            },
            {
              breakpoint: 770,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 1,
              },
            },
            {
              breakpoint: 599,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 1,
              },
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
              },
            },
          ],
        },
      };
    },
  };
</script>
