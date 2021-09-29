<template>
  <v-row>
    <v-col cols="12">
      <!-- Start Tab Content  -->
      <div class="rn-testimonial-content">
        <client-only>
        <v-tabs-items v-model="tab">
          <v-tab-item v-for="item in testimonialContent" :key="item.id">
            <v-card flat v-for="(item, i) in item.content" :key="i">
              <v-card-text>
                <div class="inner">
                  <p>
                    {{ item.description }}
                  </p>
                </div>
                <div class="author-info">
                  <h6>
                    <span>{{ item.name }}</span> -
                    {{ item.designation }}
                  </h6>
                </div>
              </v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs-items>
        </client-only>
        <client-only #placeholder>
          <v-card flat>
            <v-card-text>
              <div class="inner">
                <p>
                  {{ testimonialContent[0].content[0].description }}
                </p>
              </div>
              <div class="author-info">
                <h6>
                  <span>{{ testimonialContent[0].content[0].name }}</span> -
                  {{ testimonialContent[0].content[0].designation }}
                </h6>
              </div>
            </v-card-text>
          </v-card>
        </client-only>
        <!-- End .v-tabs-items -->
        <v-tabs class="z-index-2" v-model="tab" centered hide-slider center-active>
          <v-tab v-for="item in testimonialContent" :key="item.id">
            <div class="thumb">
              <img :src="require(`../../assets/images/client/${item.imageName}`)" alt="testimonial image" />
            </div>
          </v-tab>
        </v-tabs>
        <!-- End .v-tabs -->
      </div>
      <!-- End .rn-testimonial-content -->
    </v-col>
  </v-row>
</template>

<script>
  export default {
    data() {
      return {
        tab: null,
        testimonialContent: this.$t('index.testimonialSection.content')
      };
    },
  };
</script>

<style>
  .z-index-2 {
    position: relative;
    z-index: 2;
  }
</style>
