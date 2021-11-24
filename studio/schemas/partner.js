import { languages } from '../config/intl-input.json'

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
      initialValue: false
    },
    {
      title: 'Logo',
      name: 'image',
      type: 'image',
      validation: Rule => Rule.custom(blocks => {
        if (blocks?.asset) {
          return true;
        }

        return 'Add image asset';
      }),
    }
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    }
  }
}
