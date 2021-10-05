import React from 'react'
import { BsImage } from 'react-icons/bs';
import richText from './richText';
import { languages } from '../config/intl-input.json'

export default {
  name: 'richEditor',
  title: 'richEditor',
  type: 'array',
  of: [
    richText(),
    {
      type: 'image',
      icon: BsImage,
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
    {
      type: 'gallery',
    },
    {
      type: 'linkButton',
    },
    {
      type: 'downloadButton',
    },
  ]
}

export function richEditorToPlainText(blocks = []) {
  return blocks
  .map(block => {
    if (block._type === 'block' && block.children) {
      return block.children.map(child => child.text).join('');
    }

    return '';
  })
  .join('\n\n');
}
