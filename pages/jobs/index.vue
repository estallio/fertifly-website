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
          Sende uns ein Bewerbungsschreiben und deinen Lebenslauf per Email an office@ecofly.at und wir melden uns bei dir.
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions style="padding-bottom: 20px;">
          <v-spacer></v-spacer>

          <a href="mailto:office@ecofly.at" class="rn-button-style--2 btn_solid btn-size-sm">
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
                  <nuxt-link :to='localePath(item.to)'>{{ item.text }}</nuxt-link>
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
                  <span><font-awesome-icon icon="map-marker-alt" />{{ singleList.location }}</span>
                </li>
                <li>
                  <span><font-awesome-icon icon="clock" />{{ singleList.type }}</span>
                </li>
                <li>
                  <span><font-awesome-icon icon="calendar" />{{ singleList.date }}</span>
                </li>
              </ul>

              <p>
                <b>Aufgaben:&nbsp;&nbsp;</b>{{ singleList.task }}
              </p>

              <nuxt-link to='slug' style="color: inherit; text-decoration: underline">Mehr erfahren...</nuxt-link>

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
    }
  },
  async asyncData ({ app, params, store, payload }) {
    if (payload?.routeParams) {
      await store.dispatch('i18n/setRouteParams', payload.routeParams);
    }

    return payload
  },
  head() {
    // TODO: tooltip bei englisch, dass diese seite nur in deutsch verfügbar ist
    return {
      link: [
        {
          rel: 'canonical',
          href: config.hostname + '/de/jobs'
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
  }
}
</script>

<style>
.job-entry {
  /*margin-top: 60px;*/
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
