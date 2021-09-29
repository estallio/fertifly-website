export default {
  title: 'Products',
  name: 'products',
  type: 'document',
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
      title: 'Products',
      name: 'products',
      type: 'array',
      of: [ { type: 'product' } ],
    }
  ]
}
