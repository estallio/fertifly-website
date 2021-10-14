export default {
  title: 'Jobs',
  name: 'jobs',
  type: 'document',
  __experimental_actions: ['update', 'publish', 'create', 'delete'],
  fields: [
    {
      title: 'Jobs',
      name: 'jobs',
      type: 'array',
      of: [ { type: 'job' } ],
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
        title: '',
        description: '',
      },
    }
  ]
}
