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
      name: 'logo',
      type: 'image',
      fields: [
        {
          title: 'Alt Text',
          name: 'altText',
          type: 'object',
          fields: [
            {
              title: 'Text',
              name: 'text',
              description: 'Description of the image for screenreaders like Google to know what\'s on the picture',
              type: 'string',
            }
          ],
          initialValue: {
            de: { text: '' },
            en: { text: '' }
          },
          validation: Rule => Rule.custom(blocks => {
            if (languages.every(lang => blocks?.[lang]?.text)) {
              return true;
            }

            return 'Add descriptive texts in the Image Details Section for every language';
          }),
          options: {
            i18n: true,
          },
        },
      ],
    }
  ],
  preview: {
    select: {
      title: 'name',
      media: 'logo',
    }
  }
}
