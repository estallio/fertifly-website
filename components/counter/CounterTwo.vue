<template>
  <v-row class="mt--10">
    <!-- Start Single Counterup  -->
    <v-col md="3" sm="3" v-for="(counter, i) in counterUpContent" :key="i">
      <div class="rn-counterup counterup_style--2">
        <h5 class="counter count">
          <VisibilitySensor @change="onChange">
            <countTo
              :endVal="status ? counter.endVal : 0"
              :autoplay="countUp"
              :duration="3000"
            ></countTo>
          </VisibilitySensor>
        </h5>
        <h4 class="description">
          {{ counter.desc }}
        </h4>
      </div>
    </v-col>
    <!-- Start Single Counterup  -->
  </v-row>
</template>

<script>
  export default {
    data() {
      return {
        countUp: true,
        status: false,
        counterUpContent: [
          {
            endVal: 660,
            desc: `HAPPY CLIENTS`,
          },
          {
            endVal: 894,
            desc: `STORES`,
          },
          {
            endVal: 500,
            desc: `AWWARDS`,
          },
          {
            endVal: 640,
            desc: `AWESOME FEATURE`,
          },
        ],
      };
    },
    methods: {
      onChange(isVisible) {
        if (isVisible) {
          this.status = true;
        }
      },
    },
  };
</script>
