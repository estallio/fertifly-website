<template>
  <v-row>
    <v-col cols="12">
      <div class="slick-space-gutter--15">
        <VueSlickCarousel
          v-bind="settings"
          class="rn-slick-activation slick-dotted rn-slick-dot pb--25"
        >
          <!-- Start Blog Area  -->
          <div
            class="blog blog-style--1"
            v-for="(item, i) in blogContent"
            :key="i"
          >
            <div class="thumbnail">
              <router-link to="/blog-details">
                <img class="w-100" :src="item.src" alt="Blog Images" />
              </router-link>
            </div>
            <div class="content">
              <p class="blogtype">{{ item.meta }}</p>
              <h4 class="heading-title">
                <router-link to="/blog-details">{{ item.title }}</router-link>
              </h4>
              <div class="blog-btn">
                <router-link to="/blog-details" class="rn-btn white--text">
                  Read More
                </router-link>
              </div>
            </div>
          </div>
          <!-- End Blog Area  -->
        </VueSlickCarousel>
      </div>
    </v-col>
  </v-row>
</template>

<script>
  export default {
    data() {
      return {
        blogContent: [
          {
            src: require("../../assets/images/blog/blog-01.jpg"),
            meta: "Development",
            title: "Getting tickets to the big show",
          },
          {
            src: require("../../assets/images/blog/blog-02.jpg"),
            meta: "Development",
            title: "Getting tickets to the big show bayazid",
          },
          {
            src: require("../../assets/images/blog/blog-03.jpg"),
            meta: "Development",
            title: "Getting tickets to the big show iqra",
          },
          {
            src: require("../../assets/images/blog/blog-04.jpg"),
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
