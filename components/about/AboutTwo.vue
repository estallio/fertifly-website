<template>
  <v-row class="row--35" align="center">
    <v-col lg="6" md="6" cols="12">
      <div class="thumbnail">
        <img
          class="w-100"
          src="../../assets/images/about/about-4.png"
          alt="About Images"
        />
      </div>
    </v-col>
    <v-col lg="6" md="6" cols="12">
      <div class="about-inner inner">
        <div class="section-title text-left">
          <h2 class="heading-title">Working Process</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim
            exercitationem impedit iure quia quo recusandae?
          </p>
        </div>
        <div class="rn-accordion mt--20">
          <Accordion />
        </div>

        <div class="about-button mt--50">
          <a class="rn-button-style--2 btn_solid" href="about.html"
            >See how it works</a
          >
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
