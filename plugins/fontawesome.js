import Vue from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { library } from '@fortawesome/fontawesome-svg-core'

import { faAngleUp, faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

library.add(faAngleUp)
library.add(faPhone)
library.add(faEnvelope)
library.add(faMapMarkerAlt)

Vue.component('font-awesome-icon', FontAwesomeIcon)
