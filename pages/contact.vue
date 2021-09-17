<template>
  <div>
    <!-- Start Header Area -->
    <Header>
      <img slot="logo" src="../assets/images/logo/logo.png" />
    </Header>
    <!-- End Header Area -->

    <!-- Start Breadcrump Area  -->
    <div
      class="rn-page-title-area pt--120 pb--190 bg_image bg_image--17"
      data-black-overlay="5"
    >
      <v-container>
        <v-row>
          <v-col cols="12">
            <div class="rn-page-title text-center pt--100">
              <h2 class="heading-title theme-gradient">Cntact With Us</h2>
              <p>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text.
              </p>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <!-- End Breadcrump Area  -->

    <!-- Start Contact Address Area  -->
    <div class="rn-contact-address-area rn-section-gap bg_color--5">
      <v-container>
        <ContactAddress />
      </v-container>
    </div>
    <!-- End Contact Address Area  -->

    <!-- Start Contact Area  -->
    <div class="rn-contact-area rn-section-gap bg_color--1">
      <div class="contact-form--1">
        <v-container>
          <Contact>
            <img
              slot="contact-img"
              src="../assets/images/about/hermetia.jpg"
              alt="trydo"
            />
          </Contact>
        </v-container>
      </div>
    </div>
    <!-- End Contact Area  -->

    <!-- Start Brand Area -->
    <div class="rn-brand-area brand-separation rn-section-gap bg_color--5">
      <v-container>
        <Brand />
      </v-container>
    </div>
    <!-- End Brand Area -->
    <Footer />
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
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
      en: '/contact',
      de: '/kontakt'
    }
  }
}
</script>
