export default {
  title: 'About us',
  name: 'about',
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
