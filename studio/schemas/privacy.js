export default {
  title: 'Privacy',
  name: 'privacy',
  type: 'document',
  __experimental_actions: ['update', 'publish', 'create', 'delete'],
  fields: [
    {
      title: 'Content Sections',
      name: 'contentSections',
      type: 'array',
      of: [ { type: 'contentSection' } ],
    }
  ]
}
