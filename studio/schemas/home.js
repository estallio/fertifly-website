export default {
  title: 'Home',
  name: 'home',
  type: 'document',
  __experimental_actions: ['update', 'publish', 'create', 'delete'],
  fields: [
    {
      title: 'Banner',
      description: 'Content Slides - the first thing visitors see on the home page.',
      name: 'banner',
      type: 'array',
      of: [ { type: 'slide' } ],
    },
    {
      title: 'Content Sections',
      description: 'A Content Section has one big heading and several content sections consisting of an image and a text block.',
      name: 'contentSections',
      type: 'array',
      of: [ { type: 'imageTextContentSection' } ],
    },
    {
      title: '"To Products" Section',
      description: 'A section to motivate the users to navigate also to the products page.',
      name: 'toProductsSection',
      type: 'object',
      fields: [
        {
          title: 'To Products',
          description: 'Short text block consisting of heading and text about products.',
          name: 'toProductsHeading',
          type: 'object',
          fields: [
            {
              title: 'Heading',
              name: 'heading',
              type: 'string',
            },
            {
              title: 'Text',
              name: 'text',
              type: 'text',
            },
          ],
          options: {
            i18n: true,
          },
        },
        {
          title: 'Background Image',
          description: 'The image behind the "To Products" block.',
          name: 'backgroundImage',
          type: 'image',
        },
      ]
    },
    {
      title: 'Testimonials',
      description: 'What other people say about Ecofly.',
      name: 'testimonials',
      type: 'array',
      of: [ { type: 'testimonial' } ],
    }
  ]
}
