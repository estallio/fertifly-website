<template>
  <v-row align="start" class="row--35 justify-center">

    <v-col cols="12" md="6" order="2" order-md="1">
      <div class="section-title text-left mb--50 mb_sm--30 mb_md--30">
        <h2 class="heading-title">{{ get(contactInfo, `contactText[${$i18n.locale}].heading`, '') }}</h2>
        <SanityContent class="text-justified description" :blocks="get(contactInfo, `contactText[${$i18n.locale}].text`, [])" :serializers="serializers" />
      </div>
      <div class="form-wrapper">
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
                  rules="required|email"
                  v-model="formData.email"
                  :placeholder="$t('contact.form.emailPlaceholder') + ' *'"
                />
                <span class="inpur-error">{{ errors[0] }}</span>
              </label>
            </ValidationProvider>

            <ValidationProvider
              :name="$t('contact.form.subject')"
              rules="required"
              v-slot="{ errors }"
            >
              <label>
                <input
                  type="text"
                  name="subject"
                  v-model="formData.subject"
                  :placeholder="$t('contact.form.subjectPlaceholder') + ' *'"
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
              rules="required"
              v-slot="{ errors }"
            >
              <label>
                <input type="checkbox" name="consent" id="consent" style="display: unset; width: auto; height: auto;" />
                <label style="display: unset; width: auto; height: auto;" for="consent">
                  {{ $t('contact.form.consentFirstPart') }}
                  <nuxt-link :to='localePath("privacy")' style="text-decoration: underline; color: #006C33">{{ $t('contact.form.consentProtection') }}</nuxt-link>
                  {{ $t('contact.form.consentSecondPart') }}
                </label>
                <span class="inpur-error">{{ errors[0] }}</span>
              </label>
            </ValidationProvider>

            <button
              class="rn-button-style--2 btn_solid"
              type="submit"
              value="submit"
            >
              {{ $t('contact.form.submitLabel') }}
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

  export default {
    data() {
      return {
        formData: {
          name: "",
          email: "",
          subject: "",
          message: "",
        },
      };
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
      onSubmit() {
        console.log(this.formData);
      },
      getAltText: function(image) {
        return image && get(image, `altText[${this.$i18n.locale}].text`, '');
      },
      get: (...args) => {
        return get(...args);
      },
      getImage: function(sanityImageUrl) {
        return sanityImageUrl && this.$urlFor(sanityImageUrl).size(500).fit('max').url();
      },
      getImageHeight: function(imageDoc) {
        return imageDoc && imageDoc.metadata.dimensions.aspectRatio
      }
    },
  };
</script>
