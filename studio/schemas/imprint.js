export default {
  title: 'Imprint',
  name: 'imprint',
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
