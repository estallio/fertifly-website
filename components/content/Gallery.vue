<template>
  <div>
    <client-only>
      <CoolLightBox
        :items="items"
        :index="index"
        @close="index = null">
      </CoolLightBox>
    </client-only>

    <div class="images-wrapper">
      <div class="image-wrapper"
           v-for="(image, imageIndex) in images"
           :key="imageIndex"
      >
        <div
          class="image"
          @click="index = imageIndex"
          :style="{ background: `url(${getSanityBackgroundImageUrlThumb(image)}) center center / cover no-repeat, url(${ get(image, 'imageDoc.metadata.lqip') }) center center / cover no-repeat` }"
        >
        </div>
      </div>
    </div>

    <slot></slot>
  </div>
</template>

<script>
  import get from 'lodash/get'

  export default {
    props: ['images'],
    methods: {
      get: (...args) => {
        return get(...args);
      },
      getSanityBackgroundImageUrlThumb: function(sanityUrl) {
        try {
          return sanityUrl && this.$urlFor(sanityUrl).size(500).fit('max').url();
        } catch (ex) {
          return '';
        }
      },
      getSanityBackgroundImageUrl: function(sanityUrl) {
        try {
          return sanityUrl && this.$urlFor(sanityUrl).size(1500).fit('max').url();
        } catch (ex) {
          return '';
        }
      },
      getAltText: function(image) {
        return image && get(image, `altText[${this.$i18n.locale}].text`, '');
      },
    },
    computed: {
      items: function () {
        return this.images && this.images.map(image => ({
          src: this.getSanityBackgroundImageUrl(image),
          title: this.getAltText(image)
        }))
      }
    },
    data: function () {
      return {
        index: null
      };
    },
  };
</script>

<style scoped>
  .images-wrapper {
    display: flex;
    flex-wrap: wrap;
  }

  .image-wrapper {
    flex: 25%;
    max-width: 25%;

    padding: 10px;
  }

  .image {
    width: 100%;

    cursor: pointer;

    background-position: 50%;
    background-repeat: no-repeat;
    background-size: cover;

    padding-top: 100%;
  }

  @media screen and (max-width: 800px) {
    .image-wrapper {
      flex: 50%;
      max-width: 50%;
    }
  }

  @media screen and (max-width: 600px) {
    .image-wrapper {
      flex: 100%;
      max-width: 100%;
    }
  }
</style>
