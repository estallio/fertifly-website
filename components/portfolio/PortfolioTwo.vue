<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <div class="slick-space-gutter--15">
          <VueSlickCarousel
            v-bind="settings"
            class="rn-slick-activation slick-dotted rn-slick-dot mt--10"
          >
            <!-- Start Single Portfolio  -->
            <div
              class="portfolio mt--30 mb--20"
              v-for="(item, i) in portfolioContent"
              :key="i"
            >
              <div class="thumbnail-inner">
                <v-img class="thumbnail" :src="item.src"></v-img>
                <v-img class="bg-blr-image" :src="item.src"></v-img>
              </div>
              <div class="content">
                <div class="inner">
                  <p>{{ item.meta }}</p>
                  <h4>
                    <router-link to="portfolio-details">{{
                      item.title
                    }}</router-link>
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
      </v-col>
    </v-row>
  </v-container>
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
            title: "Getting tickets to the big show bayazid",
          },
          {
            src: require("../../assets/images/portfolio/portfolio-6.jpg"),
            meta: "Development",
            title: "Getting tickets to the big show iqra",
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
        ],
        // for all works
        settings: {
          dots: true,
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          spaceBetween: 15,

          responsive: [
            {
              breakpoint: 890,
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
                infinite: true,
                dots: true,
              },
            },
            {
              breakpoint: 490,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1,
              },
            },
          ],
        },
      };
    },
  };
</script>
