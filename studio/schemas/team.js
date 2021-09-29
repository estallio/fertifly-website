export default {
  title: 'Team',
  name: 'team',
  type: 'document',
  __experimental_actions: ['update', 'publish', 'create'],
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'object',
      options: {
        i18n: true,
        base: 'de',
        languages: ['de', 'en'],
      },
      fields: [
        {
          title: 'Name',
          name: 'name',
          type: 'string',
        }
      ]
    },
  ]
}
