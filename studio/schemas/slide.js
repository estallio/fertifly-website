import { BiSlideshow } from 'react-icons/bi';
import { languages } from '../config/intl-input.json'

export default {
  title: 'Slide',
  name: 'slide',
  type: 'object',
  icon: BiSlideshow,
  __experimental_actions: ['update', 'publish', 'create', 'delete'],
  fields: [
    {
      title: 'Slide Text',
      name: 'text',
      type: 'object',
      fields: [
        {
          title: 'Heading',
          name: 'heading',
          type: 'string',
        },
        {
          title: 'Subheading',
          name: 'subheading',
          type: 'text',
        }
      ],
      initialValue: {
        de: { heading: '', subheading: '' },
        en: { heading: '', subheading: '' }
      },
      options: {
        i18n: true,
      },
    },
    {
      title: 'Background Image',
      name: 'backgroundImage',
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

            return Rule.warning('Add descriptive texts in the Image Details Section for every language');
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
      subtitle: 'text.de.subheading',
      media: 'backgroundImage',
    },
  },
}
