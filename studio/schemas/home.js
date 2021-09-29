export default {
  title: 'Home',
  name: 'home',
  type: 'document',
  __experimental_actions: ['update', 'publish', 'create'],
  fields: [
    {
      title: 'Banner',
      name: 'banner',
      type: 'array',
      of: [ { type: 'slide' } ],
    },
    {
      title: 'Sections',
      name: 'sections',
      type: 'array',
      of: [ { type: 'section' } ],
    }
  ]
}
