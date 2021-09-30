export default {
  title: 'Jobs',
  name: 'jobs',
  type: 'document',
  __experimental_actions: ['update', 'publish', 'create'],
  fields: [
    {
      title: 'Jobs',
      name: 'jobs',
      type: 'array',
      of: [ { type: 'job' } ],
    }
  ]
}
