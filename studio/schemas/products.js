export default {
  title: 'Products',
  name: 'products',
  type: 'document',
  __experimental_actions: ['update', 'publish', 'create', 'delete'],
  fields: [
    {
      title: 'Heading Section',
      name: 'headingSection',
      type: 'object',
      fields: [
        {
          title: 'Heading',
          name: 'heading',
          type: 'string',
        },
        {
          title: 'Subheading',
          name: 'subheading',
          type: 'string',
        },
      ],
      initialValue: {
        de: { heading: '', subheading: '' },
        en: { heading: '', subheading: '' },
      },
      options: {
        i18n: true,
      },
    },
    {
      title: 'Products',
      name: 'products',
      type: 'array',
      of: [ { type: 'product' } ],
    }
  ]
}
