export default {
  title: 'Partners',
  name: 'partners',
  type: 'document',
  __experimental_actions: ['update', 'publish', 'create'],
  fields: [
    {
      title: 'Partners',
      name: 'partners',
      type: 'array',
      of: [ { type: 'partner' } ],
    }
  ]
}
