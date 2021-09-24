<template>

  <!-- Start 404 Page  -->
  <div class="error-page-inner">
    <v-container>
      <v-row>
        <v-col cols="12">
          <div class="inner">
            <h1 v-if="error.statusCode === 404" class="heading-title">{{ $t('errors.404.heading') }}</h1>
            <h1 v-else class="heading-title">{{ $t('errors.other.heading') }}</h1>
            
            <h3 v-if="error.statusCode === 404" class="sub-title">{{ $t('errors.404.subheading') }}</h3>
            <h3 v-else class="sub-title">{{ $t('errors.other.subheading') }}</h3>
            
            <span v-if="error.statusCode === 404">{{ $t('errors.404.description') }}</span>
            <span v-else>{{ $t('errors.other.description') }}</span>

            <div class="error-button">
              <nuxt-link class="rn-button-style--2 btn_solid" :to="localePath('index')">{{ $t('errors.backToHomepage') }}</nuxt-link>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
  <!-- End 404 Page  -->

</template>

<script>
  export default {
    props: ['error'],
    layout: 'errorLayout'
  }
</script>