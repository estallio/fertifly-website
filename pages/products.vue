<template>
  <div>

    <!-- Start Breadcrump Area  -->
    <div class="breadcrumb-area rn-bg-color ptb--120 bg_image bg_image--pattern">
      <v-container>
        <v-row>
          <v-col lg="12">
            <div class="breadcrumb-inner pt--100 pt_sm--40 pt_md--50">
              <h1 class="heading-title">{{ $t('products.title') }}</h1>
              <ul class="page-list">
                <li v-for="(item, i) in breadcrumbs" :key="i">
                  <nuxt-link :to="localePath(item.to)">{{ item.text }}</nuxt-link>
                </li>
              </ul>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <!-- End Breadcrump Area  -->

    <div>
      <v-container>

        <!-- Start First Section Heading -->
        <v-row class="mt_sm--50 mt_md--70 mt--75">
          <v-col lg="12">
            <div class="section-title section-title--3 text-center">
              <h2 class="heading-title" v-html="$t('products.heading')"></h2>
              <p>{{ $t('products.subheading') }}</p>
            </div>
          </v-col>
        </v-row>
        <!-- End First Section Heading -->

        <!-- Start First Content  -->
        <v-row class="mt_sm--10 mt_md--20 mt--40">
          <v-col cols="12">
            <v-row class="sercice-details-content align-items-center justify-center">

              <!-- Start Column -->
              <v-col lg="5" md="5" cols="7" class="flex-lg">
                <div class="pb_sm--20 pt_sm--15 pb_md--25 pt_md--25 thumbnail flex-lg flex-lg-column justify-lg-center">
                  <img
                    class="w-100"
                    style="box-shadow: none"
                    src="../assets/images/products/bsfoil.png"
                    alt="Service Images"
                  />
                </div>
              </v-col>
              <!-- End Column -->

              <!-- Start Column -->
              <v-col lg="7" md="7" cols="12">
                <div class="flex-column justify-center d-flex fill-height">
                  <h2 class="heading-title">{{ $t('products.bsfOilSection.heading') }}</h2>
                  <p>{{ $t('products.bsfOilSection.content') }}</p>
                </div>
              </v-col>
              <!-- End Column -->

            </v-row>
          </v-col>
        </v-row>
        <!-- End First Content  -->

        <!-- Start First Content  -->
        <v-row class="mt_sm--10 mt_md--20 mt--40">
          <v-col cols="12">
            <v-row class="sercice-details-content align-items-center justify-center">

              <!-- Start Column -->
              <v-col lg="5" md="5" cols="7" class="flex-lg">
                <div class="pb_sm--20 pt_sm--15 pb_md--25 pt_md--25 thumbnail flex-lg flex-lg-column justify-lg-center">
                  <img
                    class="w-100"
                    style="box-shadow: none"
                    src="../assets/images/products/bsfprotein.png"
                    alt="Service Images"
                  />
                </div>
              </v-col>
              <!-- End Column -->

              <!-- Start Column -->
              <v-col lg="7" md="7" cols="12">
                <div class="flex-column justify-center d-flex fill-height">
                  <h2 class="heading-title">{{ $t('products.bsfProteinSection.heading') }}</h2>
                  <p>{{ $t('products.bsfProteinSection.content') }}</p>
                </div>
              </v-col>
              <!-- End Column -->

            </v-row>
          </v-col>
        </v-row>
        <!-- End First Content  -->

        <!-- Start First Content  -->
        <v-row class="mt_sm--10 mt_md--20 mt--40 pb_md--100 pb--80">
          <v-col cols="12">
            <v-row class="sercice-details-content align-items-center justify-center">

              <!-- Start Column -->
              <v-col lg="5" md="5" cols="7" class="flex-lg">
                <div class="pb_sm--20 pt_sm--15 pb_md--25 pt_md--25 thumbnail flex-lg flex-lg-column justify-lg-center">
                  <img
                    class="w-100"
                    style="box-shadow: none"
                    src="../assets/images/products/bsffertilizer.png"
                    alt="Service Images"
                  />
                </div>
              </v-col>
              <!-- End Column -->

              <!-- Start Column -->
              <v-col lg="7" md="7" cols="12">
                <div class="flex-column justify-center d-flex fill-height">
                  <h2 class="heading-title">{{ $t('products.bsfFertilizerSection.heading') }}</h2>
                  <p>{{ $t('products.bsfFertilizerSection.content') }}</p>
                </div>
              </v-col>
              <!-- End Column -->

            </v-row>
          </v-col>
        </v-row>
        <!-- End First Content  -->

      </v-container>
    </div>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        breadcrumbs: [
          {
            text: this.$t('index.title'),
            to: '/',
            disabled: false,
          },
          {
            text: this.$t('products.title'),
            to: '',
            disabled: true,
          },
        ],
      };
    },
    nuxtI18n: {
      paths: {
        en: '/products',
        de: '/produkte'
      }
    }
  };
</script>
