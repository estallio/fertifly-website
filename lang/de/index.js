import de from 'vee-validate/dist/locale/de';

import footer from './components/footer';
import header from './components/header';

import index from './pages/index';
import products from './pages/products';
import contact from './pages/contact';

export default {
  footer,
  header,
  index,
  products,
  contact,
  validation: de.messages,
  errors: {
    404: {
      heading: '404',
      subheading: 'Seite nicht gefunden',
      description: 'Die gesuchte Seite konnte nicht gefunden werden. Sollte das ein Fehler unsererseits sein, schreiben Sie uns bitte eine Nachricht.',
    },
    other: {
      heading: 'Fehler',
      subheading: 'Ein Fehler ist aufgetreten',
      description: 'Bei der Bearbeitung der Anfrage ist ein Fehler aufgetreten. Bitte schreiben Sie uns, wie der Fehler zustandegekommen ist.',
    },
    backToHomepage: 'Weiter zur Startseite'
  }
};
