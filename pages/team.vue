<template>
  <div>

    <!-- Start Breadcrump Area  -->
    <div class="breadcrumb-area rn-bg-color ptb--120 bg_image bg_image--pattern">
      <v-container>
        <v-row>
          <v-col lg="12">
            <div class="breadcrumb-inner pt--100 pt_sm--40 pt_md--50">
              <h1 class="heading-title">{{ $t('team.title') }}</h1>
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

  <!-- Start team Area  -->
  <div class="rn-team-area rn-section-gap bg_color--1">
    <v-container>

      <v-row>
        <v-col cols="12">
          <div class="section-title section-title--2 text-center mb--20">
            <h2 class="heading-title">{{ $t('team.heading') }}</h2>
            <p>{{ $t('team.subheading') }}</p>
          </div>
        </v-col>
      </v-row>

      <TeamTwo />

    </v-container>
  </div>
  <!-- End team Area  -->
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
          text: this.$t('team.title'),
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
      en: '/team',
      de: '/team'
    }
  }
}
</script>
