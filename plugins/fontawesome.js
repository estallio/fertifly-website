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
  faCalendar,
  faClock,
  faFileDownload,
  faLink,
  faInfoCircle,
  faTimesCircle,
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
library.add(faCalendar)
library.add(faClock)
library.add(faFileDownload)
library.add(faLink)
library.add(faInfoCircle)
library.add(faTimesCircle)

Vue.component('font-awesome-icon', FontAwesomeIcon)
