import Vue from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { library } from '@fortawesome/fontawesome-svg-core'

import {
  faAngleUp,
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
  faLanguage,
  faChevronDown,
  faChevronUp,
} from '@fortawesome/free-solid-svg-icons'
import {
  faFacebookF,
  faLinkedinIn,
  faTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons'

library.add(faAngleUp)
library.add(faPhone)
library.add(faEnvelope)
library.add(faMapMarkerAlt)
library.add(faLanguage)
library.add(faChevronDown)
library.add(faChevronUp)
library.add(faFacebookF)
library.add(faLinkedinIn)
library.add(faTwitter)
library.add(faInstagram)

Vue.component('font-awesome-icon', FontAwesomeIcon)
