import en from 'vee-validate/dist/locale/en'

import footer from './components/footer'
import header from './components/header'

import index from './pages/index'
import products from './pages/products'
import contact from './pages/contact'
import partners from './pages/partners'
import team from './pages/team'
import about from './pages/about'
import privacy from './pages/privacy';
import jobs from './pages/jobs'
import imprint from './pages/imprint'

export default {
  footer,
  header,
  index,
  products,
  contact,
  partners,
  team,
  about,
  privacy,
  jobs,
  imprint,
  validation: en.messages,
  errors: {
    404: {
      heading: '404',
      subheading: 'Page not found',
      description:
        'The page you are looking for could not be found. If this is an error on our part, please write us a message.',
    },
    other: {
      heading: 'Error',
      subheading: 'An error has occurred',
      description:
        'An error occurred while processing the request. Please write us how the error occurred.',
    },
    backToHomepage: 'Continue to home page',
  },
}
