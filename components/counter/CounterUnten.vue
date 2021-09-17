<template>
  <v-row class="justify-center">
    <!-- Start Single Counterup  -->
    <v-col
      lg="4"
      md="6"
      sm="6"
      cols="12"
      v-for="(counter, i) in counterUpContent"
      :key="i"
    >
      <div class="rn-counterup counterup_style--1">
        <h5 class="counter count">
          <client-only>
            <VisibilitySensor @change="onChange($event, i)">
              <countTo
                :endVal="visible[i] ? counter.endVal : 0"
                :autoplay="true"
                :duration="3000"
              ></countTo>
            </VisibilitySensor>
          </client-only>
          <client-only #placeholder>{{ counter.endVal }}</client-only>
          <span>{{ counter.unit }}</span>
        </h5>
        <p class="description">
          {{ counter.desc }}
        </p>
      </div>
    </v-col>
    <!-- Start Single Counterup  -->
  </v-row>
</template>

<script>
  export default {
    data() {
      return {
        visible: [],
        counterUpContent: this.$t('index.hermetiaCounterUpNumbers'),
      };
    },
    methods: {
      onChange(isVisible, i) {
        if (isVisible) {
          this.visible[i] = true;
          this.visible = [...this.visible];
        }
      },
    },
  };
</script>
