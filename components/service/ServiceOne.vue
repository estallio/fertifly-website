<template>
  <v-row>
    <!-- Start Single Service  -->
    <v-col
      xl="4"
      lg="4"
      md="4"
      sm="6"
      cols="12"
      v-for="(item, i) in serviceContent"
      :key="i"
    >
      <div class="single-service service__style--3 text-white">
        <div class="icon">
          <img :src="item.src" alt="Creative Agency" />
        </div>
        <div class="content">
          <h3 class="heading-title">
            {{ item.title }}
          </h3>
          <p>
            {{ item.desc }}
          </p>
        </div>
      </div>
    </v-col>
    <!-- End Single Service  -->
  </v-row>
</template>

<script>
  export default {
    data() {
      return {
        serviceContent: [
          {
            src: require("../../assets/images/icons/icon-01.png"),
            title: "Business Stratagy",
            desc: `There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered.`,
          },
          {
            src: require("../../assets/images/icons/icon-02.png"),
            title: " Website Development",
            desc: `There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered.`,
          },
          {
            src: require("../../assets/images/icons/icon-03.png"),
            title: "Marketing & Reporting",
            desc: `There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered.`,
          },
        ],
      };
    },
  };
</script>
