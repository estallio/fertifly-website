<template>
  <v-row align="start" class="row--35 justify-center">

    <v-dialog v-model="successDialog" width="500" elevation="3" style="z-index: 104;">
      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          {{ $t('contact.form.request.success') }}
        </v-card-title>

        <v-card-text style="padding-top: 24px;">
          {{ $t('contact.form.request.thanks') }}
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions style="padding-bottom: 20px;">
          <v-spacer></v-spacer>

          <button
            style="margin-left: 10px;"
            class="rn-button-style--2 btn_solid btn-size-sm"
            @click="successDialog = false"
          >
            {{ $t('contact.form.request.close') }}
          </button>

        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog v-model="errorDialog" width="500" elevation="3" style="z-index: 104;">
      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          {{ $t('contact.form.request.error') }}
        </v-card-title>

        <v-card-text style="padding-top: 24px;">
          {{ $t('contact.form.request.errorText') }}
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions style="padding-bottom: 20px;">
          <v-spacer></v-spacer>

          <button
            style="margin-left: 10px;"
            class="rn-button-style--2 btn_solid btn-size-sm"
            @click="errorDialog = false"
          >
            {{ $t('contact.form.request.close') }}
          </button>

        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-col cols="12" md="6" order="2" order-md="1">
      <div class="section-title text-left mb--50 mb_sm--30 mb_md--30">
        <h2 class="heading-title">{{ get(contactInfo, `contactText[${$i18n.locale}].heading`, '') }}</h2>
        <SanityContent class="text-justified description" :blocks="get(contactInfo, `contactText[${$i18n.locale}].text`, [])" :serializers="serializers" />
      </div>
      <div class="form-wrapper">
        <client-only>
          <noscript>
            <p style="color: red; padding-bottom: 20px">
              {{ $t('contact.form.noscript') }}
            </p>
          </noscript>
        </client-only>

        <ValidationObserver v-slot="{ handleSubmit }">
          <form @submit.prevent="handleSubmit(onSubmit)">
            <ValidationProvider
              :name="$t('contact.form.name')"
              rules="required"
              v-slot="{ errors }"
            >
              <label>
                <input
                  type="text"
                  name="name"
                  v-model="formData.name"
                  :placeholder="$t('contact.form.namePlacehoder') + ' *'"
                />
                <span class="inpur-error">{{ errors[0] }}</span>
              </label>
            </ValidationProvider>

            <ValidationProvider
              :name="$t('contact.form.email')"
              rules="required|email"
              v-slot="{ errors }"
            >
              <label>
                <input
                  type="text"
                  name="email"
                  v-model="formData.email"
                  :placeholder="$t('contact.form.emailPlaceholder') + ' *'"
                />
                <span class="inpur-error">{{ errors[0] }}</span>
              </label>
            </ValidationProvider>

            <ValidationProvider
              :name="$t('contact.form.subject')"
              v-slot="{ errors }"
            >
              <label>
                <input
                  type="text"
                  name="subject"
                  v-model="formData.subject"
                  :placeholder="$t('contact.form.subjectPlaceholder')"
                />
                <span class="inpur-error">{{ errors[0] }}</span>
              </label>
            </ValidationProvider>

            <ValidationProvider
              :name="$t('contact.form.message')"
              rules="required"
              v-slot="{ errors }"
            >
              <label>
                <textarea
                  name="message"
                  v-model="formData.message"
                  :placeholder="$t('contact.form.messagePlaceholder') + ' *'"
                ></textarea>
                <span class="inpur-error">{{ errors[0] }}</span>
              </label>
            </ValidationProvider>

            <ValidationProvider
              :name="$t('contact.form.consentProtection')"
              :rules="{ required: { allowFalse: false } }"
              v-slot="{ errors }"
            >
              <label>
                <input
                  type="checkbox"
                  name="consent"
                  id="consent"
                  v-model="formData.consent"
                  style="display: unset; width: auto; height: auto;"
                />
                <label style="display: unset; width: auto; height: auto;" for="consent">
                  {{ $t('contact.form.consentFirstPart') }}
                  <nuxt-link :to='localePath("privacy")' style="text-decoration: underline; color: #006C33">{{ $t('contact.form.consentProtection') }}</nuxt-link>
                  {{ $t('contact.form.consentSecondPart') }}
                </label>
                <span class="inpur-error">{{ errors[0] }}</span>
              </label>
            </ValidationProvider>

            <input
              v-model="formData.hConsent"
              type="checkbox"
              name="h-consent"
              id="h-consent"
              style="display:none"
              tabindex="-1"
              autocomplete="off"
            />

            <button
              class="rn-button-style--2 btn_solid submit-button"
              type="submit"
              :disabled="loading"
            >
              <span v-if="!loading">{{ $t('contact.form.submitLabel') }}</span>
              <v-progress-circular
                v-else
                indeterminate
                color="primary"
              ></v-progress-circular>
            </button>
          </form>
        </ValidationObserver>
      </div>
    </v-col>

    <v-col cols="12" md="6" order="1" order-md="2" align-self="center">
      <div class="pt--10 pb--10 pb_sm--50 pb_md--50 thumbnail flex-lg flex-lg-column justify-lg-center">
        <img class="w-100"
             style="box-shadow: none"
             :src="getImage(contactInfo.image)"
             :alt="getAltText(contactInfo.image)"
             :width="100"
             :height="100 / getImageHeight(contactInfo.imageDoc)"
        />
      </div>
    </v-col>

  </v-row>
</template>

<script>
  import get from 'lodash/get'

  import ListItem from '../content/ListItem'
  import List from '../content/List'
  import Strong from '../content/Strong'
  import Underline from '../content/Underline'
  import StrikeThrough from '../content/StrikeThrough'
  import Emphasis from '../content/Emphasis'
  import Code from '../content/Code'
  import Link from '../content/Link'
  import File from '../content/File'
  import Image from '../content/Image'
  import Gallery from '../content/Gallery'
  import DownloadButton from '../content/DownloadButton'
  import LinkButton from '../content/LinkButton'

  import Botpoison from "@botpoison/browser"

  const FORMSPARK_ACTION_URL = "https://submit-form.com/EdFRMhJb";

  export default {
    data() {
      return {
        formData: {
          name: "",
          email: "",
          subject: "",
          message: "",
          consent: null,
          hConsent: null,
        },
        botpoison: null,
        loading: false,
        errorDialog: false,
        successDialog: false,
      };
    },
    created() {
      this.botpoison = new Botpoison({
        publicKey: "pk_d46d6ff6-08df-414d-9b2d-a982f82cfb5a",
      });
    },
    computed: {
      contactInfo: function() {
        return this.$store.state.contactInfo;
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
    methods: {
      async onSubmit() {
        this.loading = true;

        try {
          const { solution } = await this.botpoison.challenge();

          await fetch(FORMSPARK_ACTION_URL, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify({
              name: this.formData.name,
              email: this.formData.email,
              subject: this.formData.subject,
              message: this.formData.message,
              consent: this.formData.consent,
              'h-consent': this.formData.hConsent,
              _botpoison: solution,
            }),
          });

          this.successDialog = true;

          this.message = null;
        } catch (error) {
          this.errorDialog = true;
        } finally {
          this.loading = false;
        }
      },
      getAltText: function(image) {
        return image && get(image, `altText[${this.$i18n.locale}].text`, '');
      },
      get: (...args) => {
        return get(...args);
      },
      getImage: function(sanityImageUrl) {
        try {
          return sanityImageUrl && this.$urlFor(sanityImageUrl).size(500).fit('max').url();
        } catch (ex) {
          return '';
        }
      },
      getImageHeight: function(imageDoc) {
        return imageDoc && this.get(imageDoc, 'metadata.dimensions.aspectRatio')
      }
    },
  };
</script>

<style scoped>
  .rn-button-style--2.submit-button {
    width: 140px !important;
    height: 55px !important;
    padding: 10px 10px !important;
  }
  .rn-button-style--2.submit-button:disabled {
    color: rgba(0,0,0,0.1) !important;
    background-color: #ffffff !important;
    border: 2px solid rgba(0,0,0,0.1) !important;
    animation: none !important;
    transition: none !important;
  }
  .rn-button-style--2.submit-button:disabled:hover {
    transition: none !important;
    animation: none !important;
  }
  textarea {
    line-height: 27px;
    padding-top: 12px;
    padding-bottom: 12px;
  }
</style>
