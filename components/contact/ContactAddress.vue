<template>
  <v-row class="mt_dec--40">
    <!-- Start Single Address  -->
    <v-col lg="4" md="6" sm="6" cols="12" class="mt--40">
      <div class="rn-address">
        <div class="icon">
          <font-awesome-icon icon="phone" />
        </div>
        <div class="inner">
          <h4 class="title">{{ $t('contact.phoneDescription') }}</h4>
          <p>
            <a :href="'tel:' + contactInfo.phone">{{ contactInfo.phone }}</a>
          </p>
        </div>
      </div>
    </v-col>
    <!-- End Single Address  -->

    <!-- Start Single Address  -->
    <v-col lg="4" md="6" sm="6" cols="12" class="mt--40">
      <div class="rn-address">
        <div class="icon">
          <font-awesome-icon icon="envelope" />
        </div>
        <div class="inner">
          <h4 class="title">{{ $t('contact.emailDescription') }}</h4>
          <p>
            <a :href="'mailto:' + contactInfo.email">{{ contactInfo.email }}</a>
          </p>
        </div>
      </div>
    </v-col>
    <!-- End Single Address  -->

    <!-- Start Single Address  -->
    <v-col lg="4" md="6" sm="6" cols="12" class="mt--40">
      <div class="rn-address">
        <div class="icon">
          <font-awesome-icon icon="map-marker-alt" />
        </div>
        <div class="inner">
          <h4 class="title">{{ $t('contact.addressDescription') }}</h4>
          <SanityContent class="text-justified" :blocks="contactInfo.address" :serializers="serializers" />
        </div>
      </div>
    </v-col>
    <!-- End Single Address  -->
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


<style scoped>
  .rn-address {
    padding: 38px;
  }

  .svg-inline--fa {
    display: inline-block;
    font-size: inherit;
    width: 1em;
    height: 1em;
    overflow: visible;
    vertical-align: -0.125em;
  }
</style>
