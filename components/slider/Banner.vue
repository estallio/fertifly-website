<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <div class="inner text-center">
          <slot name="heading-title"></slot>
          <slot name="description"></slot>
          <div class="slide-btn">
            <router-link
              class="rn-button-style--2 btn-primary-color"
              to="/contact"
              >Contact Us</router-link
            >
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
