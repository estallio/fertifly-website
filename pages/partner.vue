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
              <h2 class="heading-title">Partner</h2>
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

    <!-- Start Brand Area -->
    <div class="rn-brand-area brand-separation">
      <v-container>
        <Brand />
      </v-container>
    </div>
    <!-- End Brand Area -->
    <Footer />
  </div>
</template>

<script>
  import { mapState } from 'vuex'
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
        en: '/partner',
        de: '/partner'
      }
    }
  };
</script>
