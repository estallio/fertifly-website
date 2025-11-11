import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';
import about from './about'
import contentSection from './contentSection'
import downloadButton from './downloadButton'
import fact from './fact'
import gallery from './gallery'
import home from './home'
import linkButton from './linkButton'
import product from './product'
import production from './production'
import downloads from './downloads'
import richEditor from './richEditor'
import imageTextContentSection from './imageTextContentSection'
import simpleEditor from './simpleEditor'
import slide from './slide'
import testimonial from './testimonial'
import textImageContent from './textImageContent'
import imprint from './imprint'
import applications from './applications'
import privacy from './privacy'
import contact from './contact'
import partner from './partner'
import job from './job'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    contentSection,
    downloadButton,
    fact,
    gallery,
    linkButton,
    product,
    richEditor,
    imageTextContentSection,
    simpleEditor,
    slide,
    testimonial,
    textImageContent,
    partner,
    job,

    home,
    production,
    applications,
    about,
    downloads,
    contact,
    imprint,
    privacy
  ])
});
