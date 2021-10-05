export default {
  title: 'Partners',
  name: 'partners',
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
      title: 'Partners',
      name: 'partners',
      type: 'array',
      of: [ { type: 'partner' } ],
    }
  ]
}
