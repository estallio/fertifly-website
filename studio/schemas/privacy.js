export default {
  title: 'Privacy',
  name: 'privacy',
  type: 'document',
  __experimental_actions: ['update', 'publish', 'create', 'delete'],
  fields: [
    {
      title: 'Sections',
      name: 'sections',
      type: 'array',
      of: [ { type: 'contentSection' } ],
    }
  ]
}
