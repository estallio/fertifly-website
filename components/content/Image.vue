<template>
  <div class='thumbnail'>
    <img
      class="w-100"
      style="margin: 50px auto; box-shadow: none"
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
         return sanityImageUrl && this.$urlFor(sanityImageUrl).size(500).fit('max');
       },
       getImageHeight: function(imageDoc) {
         return imageDoc && imageDoc.metadata.dimensions.aspectRatio
       }
     },
  }
</script>

<style>
</style>
