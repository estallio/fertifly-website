export default {
  title: 'Job',
  name: 'job',
  type: 'document',
  __experimental_actions: ['update', 'publish', 'create', 'delete'],
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Needed From',
      description: 'e.g. "Ab sofort" or "1. Oktober"',
      name: 'neededFrom',
      type: 'string',
    },
    {
      title: 'Employment Level',
      description: 'e.g. "Vollzeit" or "30h/Woche"',
      name: 'employmentLevel',
      type: 'string',
    },
    {
      title: 'Location',
      description: 'e.g. "Antiesenhofen"',
      name: 'location',
      type: 'string',
    },
    {
      title: 'Simple Task Description',
      name: 'simpleTaskDescription',
      type: 'text',
    },
    {
      title: 'Job offer',
      name: 'jobOffer',
      type: 'richEditor',
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'taskDescription',
    }
  }
}
