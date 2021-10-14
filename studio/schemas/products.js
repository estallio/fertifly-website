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
    },
    {
      title: 'Search Engine Parameters',
      type: 'object',
      name: 'seo',
      fields: [
        {
          title: 'Title',
          description: 'Title of page, typically shown at headline in Google search results, meaningful title of page or description of page and important keywords, max. 50 characters. E.g. "Nachhaltige Lebensmittel aus Soldatefliegen"',
          name: 'title',
          type: 'string',
        },
        {
          title: 'Description',
          description: 'Description of page content, typically the text under the headline in Google search results, max. 160 characters',
          name: 'description',
          type: 'text',
        },
      ],
      initialValue: {
        de: { title: '', description: '' },
        en: { title: '', description: '' }
      },
      options: {
        i18n: true,
      },
    }
  ]
}
