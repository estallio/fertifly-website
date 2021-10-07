<template>
  <div>

    <!-- Start Breadcrump Area  -->
    <div class="breadcrumb-area rn-bg-color ptb--120 bg_image bg_image--pattern">
      <v-container>
        <v-row>
          <v-col lg="12">
            <div class="breadcrumb-inner pt--100 pt_sm--40 pt_md--50">
              <h1 class="heading-title">{{ $t('partner.title') }}</h1>
              <ul class="page-list">
                <li v-for="(item, i) in breadcrumbs" :key="i">
                  <nuxt-link :aria-label="item.text" :alt="item.text" :to="localePath(item.to)">{{ item.text }}</nuxt-link>
                </li>
              </ul>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <!-- End Breadcrump Area  -->

    <v-container>
      <v-row class="mt_sm--70 mt_md--90 mt--120">
        <v-col lg="12">
          <div class="section-title section-title--3 text-center">
            <h2 class="heading-title">{{ $t('partner.heading') }}</h2>
            <p>{{ $t('partner.subheading') }}</p>
          </div>
        </v-col>
      </v-row>
    </v-container>

    <!-- Start Brand Area -->
    <div class="rn-brand-area brand-separation">
      <v-container>
        <Brand />
      </v-container>
    </div>
    <!-- End Brand Area -->


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
          text: this.$t('partner.title'),
          to: '',
          disabled: true,
        },
      ],
    };
  },
  computed: {
    availableLocales () {
      return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
    },
  },
  nuxtI18n: {
    paths: {
      en: '/partner',
      de: '/partner'
    }
  }
};
</script>
