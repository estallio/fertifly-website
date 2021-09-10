<template>
  <v-row class="row--35" align="center">
    <v-col lg="5" md="5" cols="12">
      <div class="thumbnail">
        <slot name="thum-img"></slot>
      </div>
    </v-col>
    <v-col lg="7" md="7" cols="12">
      <div class="about-inner inner pt--100 pt_sm--40 pt_md--40">
        <div class="section-title">
          <h2 class="heading-title">About Me</h2>
          <p class="description">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered
            <a href="#">alteration</a> in some form, by injected humour, or
            randomised words which dont look even slightly believable. If you
            are going to use a passage of Lorem Ipsum,
          </p>
        </div>
        <!-- End .section-title -->
        <div class="tab-wrapper mt--30">
          <v-row>
            <TabTwo />
          </v-row>
        </div>
      </div>
    </v-col>
  </v-row>
</template>

<script>
  export default {
    data() {
      return {};
    },
  };
</script>
