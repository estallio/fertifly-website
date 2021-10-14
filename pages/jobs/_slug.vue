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
          Sende uns ein Bewerbungsschreiben und deinen Lebenslauf per Email an <b>office@ecofly.at</b> und wir melden uns bei dir.
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
              <h2 class='heading-title'>{{ sanityContent.title }}</h2>
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
            class="job-entry mt--60 mt_sm--50 mt_lg--50"
          >
            <div class="list-style-inner">
              <h3 class="fontWeight500">{{ sanityContent.title }}</h3>

              <ul class="job-details-bar">
                <li>
                  <span><font-awesome-icon icon="map-marker-alt" />{{ sanityContent.location }}</span>
                </li>
                <li>
                  <span><font-awesome-icon icon="clock" />{{ sanityContent.employmentLevel }}</span>
                </li>
                <li>
                  <span><font-awesome-icon icon="calendar" />{{ sanityContent.neededFrom }}</span>
                </li>
              </ul>

              <!-- Start Blog Details Area  -->
              <v-row>
                <v-col cols='12'>
                  <div class='inner-wrapper'>
                    <div class='inner'>
                      <SanityContent class="text-justified" :blocks="sanityContent.jobOffer" :serializers="serializers" />
                    </div>
                  </div>
                </v-col>
              </v-row>
              <!-- End Blog Details Area  -->

              <button class="rn-button-style--2 btn_solid btn-size-sm mt--10" @click="dialog = true">
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
  import { generateGROQ } from '../../queries/job'
  import ListItem from '../../components/content/ListItem'
  import List from '../../components/content/List'
  import Strong from '../../components/content/Strong'
  import Underline from '../../components/content/Underline'
  import StrikeThrough from '../../components/content/StrikeThrough'
  import Emphasis from '../../components/content/Emphasis'
  import Code from '../../components/content/Code'
  import Link from '../../components/content/Link'
  import File from '../../components/content/File'
  import Image from '../../components/content/Image'
  import Gallery from '../../components/content/Gallery'
  import DownloadButton from '../../components/content/DownloadButton'
  import LinkButton from '../../components/content/LinkButton'

  export default {
    data() {
      return {
        dialog: false,
        onlyGermanAlert: this.$i18n.locale !== 'de' && Cookies.get('languageDialogDismissed') !== 'true',
      }
    },
    async asyncData({ $sanity, $preview, store, params }) {
      let includeDrafts = false;

      if ($preview) {
        includeDrafts = true;
      }

      const sanityContent = await $sanity.fetch(generateGROQ(includeDrafts), { slug: params.slug })

      store.commit('STORE_CONTACT_INFO', sanityContent.contactInfo)

      return { sanityContent: sanityContent.content.job }
    },
    computed: {
      breadcrumbs: function() {
        return [
          {
            text: this.$t('index.title'),
            to: '/',
            disabled: false
          },
          {
            text: this.$t('jobs.title'),
            to: '/jobs',
            disabled: true
          },
          {
            text: 'Ausschreibung',
            to: '',
            disabled: true
          }
        ];
      },
      serializers() {
        return {
          listItem: ListItem,
          list: List,
          marks: {
            strong: Strong,
            underline: Underline,
            'strike-through': StrikeThrough,
            em: Emphasis,
            code: Code,
            link: Link,
            file: File,
          },
          types: {
            image: Image,
            gallery: Gallery,
            downloadButton: DownloadButton,
            linkButton: LinkButton,
          },
        }
      }
    },
    head() {
      return {
        htmlAttrs: {
          lang: 'de'
        },
        link: [
          {
            rel: 'canonical',
            href: config.hostname + '/de/jobs/' + this.sanityContent.slug.current,
          },
          {
            hid: 'i18n-alt-en',
            rel: 'alternate',
            href: config.hostname + '/en/jobs' + this.sanityContent.slug.current,
            hreflang: 'de'
          }
        ]
      }
    },
    nuxtI18n: {
      paths: {
        en: '/jobs/:slug',
        de: '/jobs/:slug'
      }
    },
    methods: {
      setDialogDismissedCookie () {
        Cookies.set('languageDialogDismissed', 'true', { expires: 2 })
      },
    }
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
