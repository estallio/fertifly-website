import React from 'react'
import { BsImages } from 'react-icons/bs';

import { galleryPreview } from './galleryPreview';
import { languages } from '../config/intl-input.json'

export default {
  name: 'gallery',
  title: 'Gallery',
  type: 'object',
  icon: BsImages,
  preview: {
    select: {
      images: 'images'
    },
    component: galleryPreview
  },
  fields: [
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        {
          name: 'image',
          title: 'Image',
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
      ]
    }
  ]
};
