<template>
  <div>
    <!-- Start Header Area -->
    <Header />
    <!-- End Header Area -->

    <!-- Start Breadcrump Area  -->
    <div
      class="breadcrumb-area rn-bg-color ptb--120 bg_image bg_image--pattern"
    >
      <v-container>
        <v-row>
          <v-col lg="12">
            <div class="breadcrumb-inner pt--100 pt_sm--40 pt_md--50">
              <h2 class="heading-title">About</h2>
              <ul class="page-list">
                <li v-for="(item, i) in breadcrumbs" :key="i">
                  <router-link :to="item.to" :disabled="item.disabled">{{
                    item.text
                    }}</router-link>
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
            <h2 class="heading-title">Skilled Team</h2>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration.
            </p>
          </div>
        </v-col>
      </v-row>
      <Team />
    </v-container>
  </div>
  <!-- End team Area  -->
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  data() {
    return {
      breadcrumbs: [
        {
          text: "Home",
          to: "/",
          disabled: false,
        },
        {
          text: "Partner",
          to: "",
          disabled: true,
        },
      ],
    };
  },
  computed: {
    availableLocales () {
      return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
    },
    ...mapState({
      posts: (state) => {
        return state.posts
      },
    }),
  },
  nuxtI18n: {
    paths: {
      en: '/team',
      de: '/team'
    }
  }
}
</script>
