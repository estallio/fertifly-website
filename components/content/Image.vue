<template>
  <div class='thumbnail'>
    <img
      class="w-100"
      style="margin: 20px auto; box-shadow: none"
      :src="getImage({ asset })"
      :alt="altText"
      :width="100"
      :height="100 / getImageHeight(imageDoc)"
    />
  </div>
</template>

<script>
   import get from 'lodash/get'

   export default {
     props: ['imageDoc', 'asset', 'altText'],
     methods: {
       get: (...args) => {
         return get(...args);
       },
       getImage: function(sanityImageUrl) {
         try {
           return sanityImageUrl && this.$urlFor(sanityImageUrl).size(1000).fit('max').url();
         } catch (ex) {
           return '';
         }
       },
       getImageHeight: function(imageDoc) {
         return imageDoc && this.get(imageDoc, 'metadata.dimensions.aspectRatio')
       }
     },
  }
</script>

<style>
</style>
