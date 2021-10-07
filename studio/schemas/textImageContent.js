import { GrTextWrap } from 'react-icons/gr'
import { languages } from '../config/intl-input.json';

export default {
  title: 'Text & Image Content',
  name: 'textImageContent',
  type: 'object',
  icon: GrTextWrap,
  __experimental_actions: ['update', 'publish', 'create', 'delete'],
  fields: [
    {
      title: 'Text Block',
      name: 'textBlock',
      type: 'object',
      fields: [
        {
          title: 'Text',
          name: 'text',
          type: 'simpleEditor',
        }
      ],
      initialValue: {
        de: { text: [] },
        en: { text: [] }
      },
      options: {
        i18n: true,
      },
    },
    {
      title: 'Image',
      name: 'image',
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
    },
    {
      title: 'Image Left',
      description: 'Locate image left from text (default right)',
      name: 'imageLocatedLeft',
      type: 'boolean',
      initialValue: false,
    },
    {
      title: 'Image Above',
      description: 'Locate image above the text on small devices (default below)',
      name: 'smImageAboveText',
      type: 'boolean',
      initialValue: false,
    },
    {
      title: 'Show Image half of content',
      description: 'At default, images are shown in about 1:2 ratio. Small/Big images may require 1:1 like the process section image.',
      name: 'showImageHalf',
      type: 'boolean',
      initialValue: false,
    },
    {
      title: 'Add Facts and Figures Section',
      name: 'hasFactsAndFigures',
      type: 'boolean',
      initialValue: false,
    },
    {
      title: 'Facts and Figures',
      name: 'factsAndFigures',
      description: 'Append a facts and figures section to this Content Section.',
      type: 'array',
      of: [ { type: 'fact' } ],
      hidden: ({ parent }) => !parent?.hasFactsAndFigures
    }
  ],
  preview: {
    select: {
      title: 'textBlock.de.text',
      media: 'image',
    },
  },
}
