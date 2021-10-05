<template>
  <v-row class="justify-center">
    <!-- Start Single Counterup  -->
    <v-col
      lg="4"
      md="6"
      sm="6"
      cols="12"
      v-for="(counter, i) in factsAndFigures"
      :key="i"
    >
      <div class="rn-counterup counterup_style--1">
        <h5 class="counter count">
          <client-only>
            <VisibilitySensor @change="onChange($event, i)">
              <countTo
                :endVal="visible[i] ? counter.number : 0"
                :autoplay="true"
                :duration="3000"
              ></countTo>
            </VisibilitySensor>
          </client-only>
          <client-only #placeholder>{{ counter.number }}</client-only>
          <span>{{ counter.unit }}</span>
        </h5>
        <p class="description">
          {{ get(counter, `text[${$i18n.locale}].text`, '') }}
        </p>
      </div>
    </v-col>
    <!-- Start Single Counterup  -->
  </v-row>
</template>

<script>
  import get from 'lodash/get'

  export default {
    props: ['factsAndFigures'],
    data() {
      return {
        visible: [],
      };
    },
    methods: {
      get: (...args) => {
        return get(...args);
      },
      onChange(isVisible, i) {
        if (isVisible) {
          this.visible[i] = true;
          this.visible = [...this.visible];
        }
      },
    },
  };
</script>
