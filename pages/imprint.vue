<template>
  <div>

    <!-- Start Breadcrump Area  -->
    <div class="breadcrumb-area rn-bg-color ptb--120 bg_image bg_image--pattern">
      <v-container>
        <v-row>
          <v-col lg="12">
            <div class="breadcrumb-inner pt--100 pt_sm--40 pt_md--50">
              <h1 class="heading-title">{{ $t('imprint.title') }}</h1>
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

    <!-- Start Blog Details Area  -->
    <div class="rn-blog-details pt--110 pb--70 bg_color--1">
      <v-container>
        <v-row>
          <v-col cols="12">
            <div class="inner-wrapper">
              <div class="inner">
                <p>{{ $t('imprint.name') }}</p>
                <p>{{ $t('imprint.address') }}</p>
                <p>{{ $t('imprint.location') }}</p>
                <p>{{ $t('imprint.companyBookNumber') }}</p>
                <p>{{ $t('imprint.competentCourt') }}</p>
                <p>{{ $t('imprint.UID') }}</p>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <!-- End Blog Details Area  -->

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
          text: this.$t('imprint.title'),
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
      en: '/imprint',
      de: '/impressum'
    }
  }
}
</script>
