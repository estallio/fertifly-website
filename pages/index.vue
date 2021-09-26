<template>
  <div>
    <!-- Start Slider Area -->
    <SliderTwo/>
    <!-- End Slider Area -->

    <!-- Start Area -->
    <div>
      <v-container>

        <!-- Start First Section Heading -->
        <v-row class="mt_sm--50 mt_md--70 mt--75">
          <v-col lg="12">
            <div class="section-title section-title--3 text-center">
              <h2 class="heading-title">{{ $t('index.introductionSection.heading') }}</h2>
              <p>{{ $t('index.introductionSection.subheading') }}</p>
            </div>
          </v-col>
        </v-row>
        <!-- End First Section Heading -->

        <!-- Start First Content  -->
        <v-row class="mt_sm--10 mt_md--20 mt--40">
          <v-col cols="12">
            <v-row class="sercice-details-content align-items-center justify-center">

              <!-- Start Column -->
              <v-col lg="5" md="5" cols="9" sm="7" class="flex-lg">
                <div class="pb_sm--20 pt_sm--15 pb_md--25 pt_md--25 thumbnail flex-lg flex-lg-column justify-lg-center">
                  <img
                    class="w-100"
                    src="../assets/images/about/futtermittel-insekten.jpeg"
                    alt="Service Images"
                  />
                </div>
              </v-col>
              <!-- End Column -->

              <!-- Start Column -->
              <v-col lg="7" md="7" cols="12">
                <div class="flex-column justify-center d-flex fill-height">
                  <p>{{ $t('index.introductionSection.content') }}</p>
                </div>
              </v-col>
              <!-- End Column -->

            </v-row>
          </v-col>
        </v-row>
        <!-- End First Content  -->

        <v-row class="mt_sm--70 mt_md--90 mt--120">
          <v-col lg="12">
            <div class="section-title section-title--3 text-center">
              <h2 class="heading-title">{{ $t('index.globalWarmingSection.heading') }}</h2>
              <p>{{ $t('index.globalWarmingSection.subheading') }}</p>
            </div>
          </v-col>
        </v-row>

        <!-- Start Single Content  -->
        <v-row class="mt_sm--10 mt_md--20 mt--40 justify-center">

          <!-- Start Column -->
          <v-col lg="5" md="5" cols="9" sm="7" class="flex-lg" order-md="2">
            <div class="pb_sm--20 pt_sm--15 pb_md--25 pt_md--25 thumbnail flex-lg flex-lg-column justify-lg-center">
              <img
                class="w-100"
                src="../assets/images/about/umwelt.jpg"
                alt="About Images"
              />
            </div>
          </v-col>
          <!-- End Column -->

          <!-- Start Column -->
          <v-col lg="7" md="7" cols="12" order-md="1">
            <div class="flex-column justify-center d-flex fill-height">
              <p>{{ $t('index.globalWarmingSection.content') }}</p>
            </div>
          </v-col>
          <!-- End Column -->

        </v-row>
        <!-- End Single Content  -->

        <!-- Start Counterup Area  -->
        <div class="rn-counterup-area mt_sm--35 mt_md--45 mt--70">
          <v-container>
            <h3 class="heading-title text-center mb-0">{{ $t('index.factsAndFiguresHeading') }}</h3>
            <CounterOben/>
          </v-container>
        </div>
        <!-- End Counterup Area  -->

        <v-row class="mt_sm--90 mt_md--110 mt--140">
          <v-col lg="12">
            <div class="section-title section-title--3 text-center">
              <h2 class="heading-title">{{ $t('index.solutionSection.heading') }}</h2>
              <p>{{ $t('index.solutionSection.subheading') }}</p>
            </div>
          </v-col>
        </v-row>

        <!-- Start Single Content  -->
        <v-row class="mt_sm--10 mt_md--20 mt--40 justify-center">

          <v-col lg="7" md="7" cols="12" order="1" order-md="2">
            <div class="flex-column justify-center d-flex fill-height">
              <p>{{ $t('index.solutionSection.content') }}</p>
              <h4 class="title">{{ $t('index.solutionSection.advantages') }}</h4>
              <ul class="liststyle bullet">
                <li v-for="(item, i) in this.$t('index.solutionSection.bulletPoints')" :key="i">{{ item }}</li>
              </ul>
            </div>
          </v-col>

          <v-col lg="5" md="5" cols="7" class="flex-lg" order="2" order-md="1">
            <div class="pb_sm--20 pt_sm--15 pb_md--25 pt_md--25 thumbnail flex-lg flex-lg-column justify-lg-center">
              <img
                class="w-100"
                src="../assets/images/about/hermetia.jpg"
                alt="About Images"
              />
            </div>
          </v-col>

        </v-row>
        <!-- End Single Content  -->

        <!-- Start Counterup Area  -->
        <div class="rn-counterup-area mt_sm--35 mt_md--45 mt--70">
          <v-container>
            <h3 class="heading-title text-center mb-0">{{ $t('index.factsAndFiguresHeading') }}</h3>
            <CounterUnten/>
          </v-container>
        </div>
        <!-- End Counterup Area  -->

        <v-row class="mt_sm--90 mt_md--120 mt--140">
          <v-col lg="12">
            <div class="section-title section-title--3 text-center">
              <h2 class="heading-title">{{ $t('index.processSection.heading') }}</h2>
              <p>{{ $t('index.processSection.subheading') }}</p>
            </div>
          </v-col>
        </v-row>

        <!-- Start Single Content  -->
        <v-row class="mt_sm--10 mt_md--20 mt--40 justify-center">

          <v-col cols="10" md="9" lg="6" order-md="1" class="flex-lg">
            <div class="pt--25 pb--25 thumbnail flex-lg flex-lg-column justify-lg-center" @click="index=0">
              <img
                class="w-100"
                style="box-shadow: none"
                src="../assets/images/about/prozess.jpeg"
                alt="Service Images"
              />
            </div>
          </v-col>

          <v-col cols="12" lg="6" order-md="2">
            <div class="flex-column justify-center d-flex fill-height">
              <p>{{ $t('index.processSection.content') }}</p>
            </div>
          </v-col>

        </v-row>
        <!-- End Single Content  -->

        <client-only>
          <CoolLightBox
            :items="processItems"
            :index="index"
            @close="index=null"
          >
          </CoolLightBox>
        </client-only>
      </v-container>
    </div>

    <!-- Start Finding us Area  -->
    <div class="rn-finding-us-area rn-finding-us mt_sm--60 mt_md--75 mt--120">
      <div class="inner">
        <div class="content-wrapper" style="flex-direction: column">
          <div class="content">
            <div :class="{'container': $vuetify.breakpoint.smAndUp}">
              <h4 class="theme-gradient">{{ $t('index.productSection.heading') }}</h4>
              <p>{{ $t('index.productSection.subheading') }}</p>
              <nuxt-link :to="localePath('products')" class="rn-btn btn-white">{{ $t('index.productSection.linkText') }}</nuxt-link>
            </div>
          </div>
        </div>

        <div class="thumbnail">
          <div class="image">
            <img
              src="../assets/images/about/mehl.jpeg"
              alt="Finding Images"
            />
          </div>
        </div>

      </div>
    </div>
    <!-- End Finding us Area  -->

    <!-- Start Testimonial Area  -->
    <div class="rn-testimonial-area rn-section-gap mt_sm--50 mt_md--70 mt--70">
      <v-container>
        <Testimonial/>
      </v-container>
    </div>
    <!-- Start Testimonial Area  -->

  </div>
</template>
<script>
  export default {
    data () {
      return {
        index: null,
        processItems: [
          require('../assets/images/about/prozess.jpeg')
        ]
      }
    }
  }
</script>
