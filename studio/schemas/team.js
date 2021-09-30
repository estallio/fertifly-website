export default {
  title: 'Team',
  name: 'team',
  type: 'document',
  __experimental_actions: ['update', 'publish', 'create'],
  fields: [
    {
      title: 'Sections',
      name: 'sections',
      type: 'array',
      of: [ { type: 'contentSection' } ],
    }
  ]
}
