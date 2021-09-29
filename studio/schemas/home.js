export default {
  title: 'Home',
  name: 'home',
  type: 'document',
  __experimental_actions: ['update', 'publish', 'create'],
  fields: [
    {
      title: 'Banner',
      name: 'banner',
      type: 'array',
      of: [ { type: 'slide' } ],
    },
    {
      title: 'Sections',
      name: 'sections',
      type: 'array',
      of: [ { type: 'section' } ],
    },
    {
      title: 'To Products Section',
      name: 'productsSection',
      type: 'object',
      fields: [
        {
          title: 'To Products Text',
          name: 'productsText',
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
              type: 'string',
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
