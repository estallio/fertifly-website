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
            <a href="tel:+057254365456">+057 254 365 456</a>
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
            <a href="mailto:office@ecofly.at">office@ecofly.at</a>
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
          <p>
            Riederstraße 15
          </p>
          <p>
            4980 Antiesenhofen
          </p>
        </div>
      </div>
    </v-col>
    <!-- End Single Address  -->
  </v-row>
</template>

<style>
  .rn-address {
    padding: 38px;
  }
</style>