export default {
  title: 'Home',
  name: 'home',
  type: 'document',
  __experimental_actions: ['update', 'publish', 'create', 'delete'],
  fields: [
    {
      title: 'Banner',
      name: 'banner',
      type: 'array',
      of: [ { type: 'slide' } ],
    },
    {
      title: 'Content Sections',
      name: 'contentSections',
      type: 'array',
      of: [ { type: 'imageTextContentSection' } ],
    },
    {
      title: '"To Products" Section',
      name: 'toProductsSection',
      type: 'object',
      fields: [
        {
          title: '"To Products" Text',
          name: 'toProductsText',
          type: 'object',
          fields: [
            {
              title: 'Title',
              name: 'title',
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
          name: 'backgroundImage',
          type: 'image',
        },
      ]
    },
    {
      title: 'Testimonials',
      name: 'testimonials',
      type: 'array',
      of: [ { type: 'testimonial' } ],
    }
  ]
}
