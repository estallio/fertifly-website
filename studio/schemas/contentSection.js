export default {
  title: 'Content Section',
  name: 'contentSection',
  type: 'object',
  __experimental_actions: ['update', 'publish', 'create', 'delete'],
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
      type: 'richEditor',
    },
  ],
  options: {
    i18n: true,
  },
  preview: {
    select: {
      title: 'de.heading',
      subtitle: 'de.subheading',
    },
  },
}
