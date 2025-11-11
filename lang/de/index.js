import de from 'vee-validate/dist/locale/de'

import footer from './components/footer'
import header from './components/header'

import index from './pages/index'
import production from './pages/production'
import applications from './pages/applications'
import about from './pages/about'
import downloads from './pages/downloads'
import contact from './pages/contact'
import privacy from './pages/privacy';
import imprint from './pages/imprint'

export default {
  footer,
  header,
  index,
  production,
  contact,
  applications,
  about,
  privacy,
  imprint,
  downloads,
  validation: de.messages,
  errors: {
    404: {
      heading: '404',
      subheading: 'Seite nicht gefunden',
      description:
        'Die gesuchte Seite konnte nicht gefunden werden. Sollte das ein Fehler unsererseits sein, schreiben Sie uns bitte eine Nachricht.',
    },
    other: {
      heading: 'Fehler',
      subheading: 'Ein Fehler ist aufgetreten',
      description:
        'Bei der Bearbeitung der Anfrage ist ein Fehler aufgetreten. Bitte schreiben Sie uns, wie der Fehler zustandegekommen ist.',
    },
    backToHomepage: 'Weiter zur Startseite',
  },
}
