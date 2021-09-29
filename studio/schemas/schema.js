import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';

import slide from './slide'
import home from './home'
import fact from './fact'
import section from './section'
import simpleEditor from './simpleEditor'
import textImageContent from './textImageContent'
import testimonial from './testimonial'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    fact,
    home,
    section,
    simpleEditor,
    slide,
    textImageContent,
    testimonial
  ])
});
