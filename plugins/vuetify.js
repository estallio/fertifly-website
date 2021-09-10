import Vue from 'vue'
import Vuetify from 'vuetify/lib'

import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css'
import '@fortawesome/fontawesome-free/css/all.css'
import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import '~/assets/scss/main.scss'

Vue.use(Vuetify)

export default ctx => {
  const vuetify = new Vuetify({
    theme: {
      themes: {
        light: {
          primary: '#f9004d',
          success: '#3EB75E',
          accent: '#FF7F5C',
          teal: '#26B0A1',
          warning: '#FF8F3C',
          error: '#FF585A',
          cyan: '#42D3D5',
        },
      },
    },
    icons: {
      iconfont: 'mdi',
    },
  })

  ctx.app.vuetify = vuetify
  ctx.$vuetify = vuetify.framework
}
