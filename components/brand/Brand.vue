<template>
  <ul class="brand-style-2">
    <li v-for="(brand, i) in partners" :key="i" :class="brand.fullWidth ? 'two' : ''">
      <a :href="brand.link" target="_blank" rel="noreferrer">
        <img :src="getImage(brand.image)"
             :alt="brand.name"
             :width="100"
             :height="100 / getImageHeight(brand.imageDoc)" />
      </a>
    </li>
  </ul>
</template>

<script>
  import get from 'lodash/get'

  export default {
    props: ['partners'],
    methods: {
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
