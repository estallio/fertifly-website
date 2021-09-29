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
import products from './products'
import richEditor from './richEditor'
import section from './section'
import simpleEditor from './simpleEditor'
import slide from './slide'
import testimonial from './testimonial'
import textImageContent from './textImageContent'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    about,
    contentSection,
    downloadButton,
    fact,
    gallery,
    home,
    linkButton,
    product,
    products,
    richEditor,
    section,
    simpleEditor,
    slide,
    testimonial,
    textImageContent
  ])
});
