export default {
  title: 'Partners',
  name: 'partners',
  type: 'document',
  __experimental_actions: ['update', 'publish', 'create', 'delete'],
  fields: [
    {
      title: 'Partners',
      name: 'partners',
      type: 'array',
      of: [ { type: 'partner' } ],
    }
  ]
}
