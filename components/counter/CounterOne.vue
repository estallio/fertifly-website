<template>
  <v-row>
    <!-- Start Single Counterup  -->
    <v-col
      lg="4"
      md="4"
      sm="4"
      cols="12"
      v-for="(counter, i) in counterUpContent"
      :key="i"
    >
      <div class="rn-counterup counterup_style--1">
        <h5 class="counter count">
          <client-only>
            <VisibilitySensor @change="onChange">
              <countTo
                :endVal="status ? counter.endVal : 0"
                :autoplay="countUp"
                :duration="3000"
              ></countTo>
            </VisibilitySensor>
          </client-only>
          <client-only #placeholder>{{ counter.endVal }}</client-only>
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
        countUp: true,
        status: false,
        counterUpContent: [
          {
            endVal: 992,
            desc: `The standard chunk of Lorem Ipsum used since the 1500s is reproduced
            below for those.`,
          },
          {
            endVal: 575,
            desc: `The standard chunk of Lorem Ipsum used since the 1500s is reproduced
            below for those.`,
          },
          {
            endVal: 69,
            desc: `The standard chunk of Lorem Ipsum used since the 1500s is reproduced
            below for those.`,
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
