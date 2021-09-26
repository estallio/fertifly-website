<template>
  <div>

    <!-- Start Breadcrump Area  -->
    <div class='breadcrumb-area rn-bg-color ptb--120 bg_image bg_image--pattern'>
      <v-container>
        <v-row>
          <v-col lg='12'>
            <div class='breadcrumb-inner pt--100 pt_sm--40 pt_md--50'>
              <h1 class='heading-title'>{{ $t('about.title') }}</h1>
              <ul class='page-list'>
                <li v-for='(item, i) in breadcrumbs' :key='i'>
                  <nuxt-link :to='localePath(item.to)'>{{ item.text }}</nuxt-link>
                </li>
              </ul>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <!-- End Breadcrump Area  -->

    <div class='mb--75'>
      <v-container>

        <v-row class="mt_sm--70 mt_md--90 mt--120">
          <v-col lg="12">
            <div class="section-title section-title--3 text-center">
              <h2 class="heading-title">{{ $t('about.vision.heading') }}</h2>
              <p>{{ $t('about.vision.subheading') }}</p>
            </div>
          </v-col>
        </v-row>

        <!-- Start Blog Details Area  -->
        <v-row>
          <v-col cols='12'>
            <div class='inner-wrapper'>
              <div class='inner'>
                <p>{{ $t('about.vision.text') }}</p>
                <div class='thumbnail'>
                  <img
                    style="margin: 50px auto"
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRn-i0wNAuDvsC3PGgn0QAdSq8IBul3th9vN-NmjKGO3KBNM6G24whKMY5V6c0JOVhAU8&usqp=CAU'
                    alt='Blog Images'
                  />
                </div>
              </div>
            </div>
          </v-col>
        </v-row>
        <!-- End Blog Details Area  -->

        <v-row class="mt_sm--70 mt_md--90 mt--120">
          <v-col lg="12">
            <div class="section-title section-title--3 text-center">
              <h2 class="heading-title">{{ $t('about.beginning.heading') }}</h2>
              <p>{{ $t('about.beginning.subheading') }}</p>
            </div>
          </v-col>
        </v-row>

        <!-- Start Blog Details Area  -->
        <v-row>
          <v-col cols='12'>
            <div class='inner-wrapper'>
              <div class='inner'>
                <p>{{ $t('about.beginning.text') }}</p>
                <div class='thumbnail'>
                  <img
                    style="margin: 50px auto"
                    src='https://oekastatic.orf.at/mims/2021/36/03/crops/w=1280,q=90/1064377_bigpicture_376803_stra3.jpg?s=ee3024aa6f15ba950a460c48f351d0c24cb942de'
                    alt='Blog Images'
                  />
                </div>
              </div>
            </div>
          </v-col>
        </v-row>
        <!-- End Blog Details Area  -->

        <v-row class="mt_sm--70 mt_md--90 mt--120">
          <v-col lg="12">
            <div class="section-title section-title--3 text-center">
              <h2 class="heading-title">{{ $t('about.workNowadays.heading') }}</h2>
              <p>{{ $t('about.workNowadays.subheading') }}</p>
            </div>
          </v-col>
        </v-row>

        <!-- Start Blog Details Area  -->
        <v-row>
          <v-col cols='12'>
            <div class='inner-wrapper'>
              <div class='inner'>
                <p>{{ $t('about.workNowadays.text') }}</p>
                <div class='thumbnail'>
                  <img
                    style="margin: 50px auto"
                    src='https://www.deutschland.de/sites/default/files/styles/crop_page/public/media/image/work-and-travel-germany-jobs.jpg?h=55f18e7c&itok=i5d7MByo'
                    alt='Blog Images'
                  />
                </div>
              </div>
            </div>
          </v-col>
        </v-row>
        <!-- End Blog Details Area  -->

      </v-container>
      </div>
    <Footer />
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
          disabled: false
        },
        {
          text: this.$t('about.title'),
          to: '',
          disabled: true
        }
      ]
    }
  },
  computed: {
    availableLocales() {
      return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
    }
  },
  nuxtI18n: {
    paths: {
      en: '/about-us',
      de: '/ueber-uns'
    }
  }
}
</script>
