<template>
  <footer class="footer-area footer-default">
    <div class="footer-wrapper">
      <v-row align="end" class="row--0">
        <v-col md="6" sm="12" cols="12">
          <div class="footer-left">
            <div class="inner">
              <span>{{ $t('footer.ifYouHaveQuestions') }}</span>
              <h2>
                {{ $t('footer.contact') }} <br />
                {{ $t('footer.us') }}
              </h2>
              <nuxt-link :to="localePath('contact')" class="rn-button-style--2">
                <span>{{ $t('footer.toContact') }}</span>
              </nuxt-link>
            </div>
          </div>
        </v-col>
        <!-- End .col -->
        <v-col md="6" sm="12" cols="12">
          <div class="footer-right" data-black-overlay="6">
            <v-row>
              <!-- Start Single Widget -->
              <v-col lg="6" sm="6" cols="12">
                <div class="footer-widget">
                  <h4>{{ $t('footer.quickNav') }}</h4>
                  <ul class="ft-link">
                    <li v-for="(navItem, i) in navList" :key="i">
                      <nuxt-link :to="localePath(navItem)">{{ $t(`footer.navigation.${navItem}`) }}</nuxt-link>
                    </li>
                  </ul>
                </div>
              </v-col>
              <!-- End Single Widget  -->
              <!-- Start Single Widget -->
              <v-col lg="6" sm="6" cols="12" class="mt_mobile--30">
                <div class="footer-widget">
                  <h4>Email</h4>
                  <ul class="ft-link">
                    <li v-for="(mail, i) in mailList" :key="i">
                      <a :href="`mailto:${mail}`">{{ mail }}</a>
                    </li>
                  </ul>

                  <div class="social-share-inner">
                    <ul
                      class="social-share social-style--2 d-flex justify-content-start liststyle mt--15"
                    >
                      <li v-for="(social, i) in socialList" :key="i">
                        <a :href="social.url" target="_blank">
                          <font-awesome-icon :icon="['fab', social.icon]" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </v-col>
              <!-- End Single Widget  -->

              <v-col lg="12">
                <div class="copyright-text">
                  <p>
                    Copyright © {{ new Date().getFullYear() }} Ecofly GmbH.
                    {{ $t('footer.allRightsReserved') }}
                  </p>
                  <p style="font-size: 12px !important; line-height: 15px !important;" v-html="$t('footer.patternAttribution')"></p>
                </div>
              </v-col>
            </v-row>
          </div>
        </v-col>
        <!-- End .col -->
      </v-row>
    </div>
  </footer>
</template>

<script>
  export default {
    computed: {
      mailList: function() {
        return [this.$store.state.contactInfo.email];
      }
    },
    data() {
      return {
        socialList: [
          /*
          {
            icon: "facebook-f",
            url: "https://www.facebook.com/",
          },
          {
            icon: "linkedin-in",
            url: "https://www.linkedin.com/",
          },
          {
            icon: "twitter",
            url: "https://twitter.com/",
          },
          {
            icon: "instagram",
            url: "https://www.instagram.com/",
          },
          */
        ],
        navList: [
          "jobs",
          "contact",
          "privacy",
          "imprint",
        ],
        // mailList: ["office@ecofly.at"],
      };
    },
  };
</script>
