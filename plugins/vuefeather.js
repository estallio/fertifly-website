import Vue from 'vue'
import VueFeather from 'vue-feather';

// mysterious error: https://github.com/fengyuanchen/vue-feather/issues/3
if (typeof document !== "undefined") {
  Vue.component('vue-feather', VueFeather);
}
