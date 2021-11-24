import { FaProductHunt } from 'react-icons/fa'
import { languages } from '../config/intl-input.json'

export default {
  title: 'Product',
  name: 'product',
  type: 'object',
  icon: FaProductHunt,
  __experimental_actions: ['update', 'publish', 'create', 'delete'],
  fields: [
    {
      title: 'Text',
      name: 'text',
      type: 'object',
      fields: [
        {
          title: 'Heading',
          name: 'heading',
          type: 'string',
        },
        {
          title: 'Text',
          name: 'text',
          type: 'simpleEditor',
        },
      ],
      initialValue: {
        de: { heading: '', text: null },
        en: { heading: '', text: null }
      },
      options: {
        i18n: true,
      },
    },
    {
      title: 'Image',
      name: 'image',
      type: 'image',
      validation: Rule => Rule.custom(blocks => {
        if (blocks?.asset) {
          return true;
        }

        return 'Add image asset';
      }),
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
    },
  ],
  preview: {
    select: {
      title: 'text.de.heading',
      subtitle: 'text.de.text',
      media: 'image',
    },
  },
}
