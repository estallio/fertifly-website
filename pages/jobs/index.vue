<template>
  <div>

    <v-alert
      v-model="onlyGermanAlert"
      type="info"
      dismissible
      elevation="2"
      color="#444"
      @input="this.setDialogDismissedCookie"
      style="position: absolute; z-index: 103; width: 80%; left: 50%; margin-left: -40%; top: 20px;"
    >
      The Jobs pages are only available in German.
    </v-alert>

    <v-dialog v-model="dialog" width="500" elevation="3" style="z-index: 104;">
      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          Bewerbungsprozess
        </v-card-title>

        <v-card-text style="padding-top: 24px;">
          Sende uns ein Bewerbungsschreiben und deinen Lebenslauf per Email an <b>{{ email }}</b> und wir melden uns bei dir.
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions style="padding-bottom: 20px;">
          <v-spacer></v-spacer>

          <a :href="'mailto:' + email" class="rn-button-style--2 btn_solid btn-size-sm">
            Email schreiben
          </a>

          <button
            style="margin-left: 10px;"
            class="rn-button-style--2 btn_solid btn-size-sm"
            @click="dialog = false"
          >
            Schließen
          </button>

        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- Start Breadcrump Area  -->
    <div class='breadcrumb-area rn-bg-color ptb--120 bg_image bg_image--pattern'>
      <v-container>
        <v-row>
          <v-col lg='12'>
            <div class='breadcrumb-inner pt--100 pt_sm--40 pt_md--50'>
              <h1 class='heading-title'>{{ $t('jobs.title') }}</h1>
              <ul class='page-list'>
                <li v-for='(item, i) in breadcrumbs' :key='i'>
                  <nuxt-link :aria-label="item.text" :alt="item.text" :to="localePath(item.to)">{{ item.text }}</nuxt-link>
                </li>
              </ul>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <!-- End Breadcrump Area  -->

    <!-- Start List Style  -->
    <div class="rn-list-style mt--50 mt_sm--30 mt_lg--40">
      <v-container>
        <v-row class='justify-center'>
          <!-- Start Single List Style  -->
          <v-col
            cols="12"
            lg="7"
            v-for="(singleList, i) in listItemContent"
            :key="i"
            :class="singleList.class"
            class="job-entry mt--60 mt_sm--50 mt_lg--50"
          >
            <div class="list-style-inner">
              <h3 class="fontWeight500">{{ singleList.title }}</h3>

              <ul class="job-details-bar">
                <li>
                  <span><font-awesome-icon icon="map-marker-alt" /><span>{{ singleList.location }}</span></span>
                </li>
                <li>
                  <span><font-awesome-icon icon="clock" /><span>{{ singleList.type }}</span></span>
                </li>
                <li>
                  <span><font-awesome-icon icon="calendar" /><span>{{ singleList.date }}</span></span>
                </li>
              </ul>

              <p class="text-justified">
                <b>Aufgaben:&nbsp;&nbsp;</b>{{ singleList.task }}
              </p>

              <nuxt-link :to="localePath(`/jobs/${singleList.slug}`)" style="color: inherit; text-decoration: underline">Mehr erfahren...</nuxt-link>

              <button style="margin-left: 20px" class="rn-button-style--2 btn_solid btn-size-sm" @click="dialog = true">
                Jetzt bewerben!
              </button>
            </div>
          </v-col>
          <!-- End Single List Style  -->
        </v-row>
      </v-container>
    </div>
    <!-- End List Style  -->

  </div>
</template>

<script>
  import Cookies from 'js-cookie'
  import config from '../../config'
  import { generateGROQ } from '../../queries/jobs'
  import get from 'lodash/get'

  export default {
    data() {
      return {
        dialog: false,
        onlyGermanAlert: this.$i18n.locale !== 'de' && Cookies.get('languageDialogDismissed') !== 'true',
        breadcrumbs: [
          {
            text: this.$t('index.title'),
            to: '/',
            disabled: false
          },
          {
            text: this.$t('jobs.title'),
            to: '',
            disabled: true
          }
        ],
        /*
        listItemContent: [
          {
            title: "Lagerarbeiter/in",
            task: 'Begleitung von Projekten in Bezug auf Hardware- und Systemanbindungen im Bereich der MES-Systemlandschaft inkl. Support der ERP-Systeme',
            location: 'Antiesenhofen',
            date: 'ab sofort',
            type: 'Vollzeit',
          },
          {
            title: "Arbeiter für den Bereich Möbelzusammenbau Business Jet (m/w/d)",
            task: 'Dies und das, vielleicht auch jenes, hauptsache nicht zu viel.',
            location: 'Antiesenhofen',
            date: 'ab 17.12.2021',
            type: 'Teilzeit',
          },
          {
            title: "(Fach-)Arbeiter/in Betonsanierung /Brückenbau",
            task: 'Schlafen',
            location: 'Salzburg',
            date: 'ab August',
            type: '38,5h',
          },
        ],
        */
      }
    },
    computed: {
      listItemContent: function() {
        return this.sanityContent.jobs.map(job => ({
          type: job.employmentLevel,
          location: job.location,
          date: job.neededFrom,
          task: job.simpleTaskDescription,
          title: job.title,
          slug: job.slug.current
        }));
      },
      email: function() {
        return this.$store.state.contactInfo.email;
      }
    },
    async asyncData({ $sanity, $preview, store }) {
      let includeDrafts = false;

      if ($preview) {
        includeDrafts = true;
      }

      const sanityContent = await $sanity.fetch(generateGROQ(includeDrafts))

      store.commit('STORE_CONTACT_INFO', sanityContent.contactInfo)

      return { sanityContent: sanityContent.content }
    },
    head() {
      return {
        htmlAttrs: {
          lang: 'de'
        },
        link: [
          {
            rel: 'canonical',
            href: config.hostname + '/de/jobs',
            hid: 'i18n-can'
          },
          {
            hid: 'i18n-alt-en',
            rel: 'alternate',
            href: config.hostname + '/en/jobs',
            hreflang: 'de'
          }
        ],
        title: get(this.sanityContent, `seo.title`, '') + config.ecoflyTitleAppendix,
        meta: [
          // hid is used as unique identifier. Do not use `vmid` for it as it will not work
          {
            hid: 'description',
            name: 'description',
            content: get(this.sanityContent, `seo.description`, ''),
          }
        ]
      }
    },
    nuxtI18n: {
      paths: {
        en: '/jobs',
        de: '/jobs'
      }
    },
    methods: {
      setDialogDismissedCookie () {
        Cookies.set('languageDialogDismissed', 'true', { expires: 2 })
      },
    },
  }
</script>

<style scoped>
.job-entry {
  /*margin-top: 60px;*/
}

.job-entry ul, ol {
  padding-left: 0;
  margin-bottom: 10px;
  margin-top: 5px;
}

.job-entry:first-child {
  margin-top: 10px !important;
}

.job-entry:last-child {
  margin-bottom: 70px;
}

.job-details-bar li {
  list-style: none;
}

@media only screen and (min-width: 500px) {
  .job-details-bar li {
    margin-left: 20px;

    display: inline;
  }
}

.job-details-bar li:first-child {
  margin-left: 0;
}

.job-details-bar li svg {
  margin-right: 5px;
}
</style>

<style>
  .svg-inline--fa {
    width: 0.75em;
  }

  .v-alert__icon {
    align-self: center;
  }

  .v-alert__dismissible {
    margin: 0 !important;
  }
</style>
