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
import imprint from './imprint'
import team from './team'
import privacy from './privacy'
import contact from './contact'
import partner from './partner'
import partners from './partners'
import job from './job'
import jobs from './jobs'

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
    textImageContent,
    imprint,
    team,
    privacy,
    contact,
    partner,
    partners,
    jobs,
    job
  ])
});
