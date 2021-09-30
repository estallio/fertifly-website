export default {
  title: 'Partner',
  name: 'partner',
  type: 'document',
  __experimental_actions: ['update', 'publish', 'create', 'delete'],
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string',
    },
    {
      title: 'Link',
      description: 'URL to e.g. Homepage like https://www.example.com',
      name: 'link',
      type: 'string',
    },
    {
      title: 'Full Width',
      description: 'Partner is "special" and displayed in a single row on big screens.',
      name: 'fullWidth',
      type: 'boolean',
    },
    {
      title: 'Logo',
      name: 'logo',
      type: 'image',
    }
  ],
  preview: {
    select: {
      title: 'name',
      media: 'logo',
    }
  }
}
