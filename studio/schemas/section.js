export default {
  title: 'Section',
  name: 'section',
  type: 'object',
  __experimental_actions: ['update', 'publish', 'create'],
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
    {
      title: 'Content',
      name: 'content',
      type: 'array',
      of: [ { type: 'textImageContent' } ],
    }
  ]
}
