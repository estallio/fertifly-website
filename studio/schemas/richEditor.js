import React from 'react'
import { BsImage } from 'react-icons/bs';
import richText from './richText';

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
          type: 'string',
          description: 'Description of the image for screenreaders like Google to know what\'s on the picture',
          validation: Rule => Rule.required(),
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
