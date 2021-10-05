import { BsPersonFill } from 'react-icons/bs'
import { languages } from '../config/intl-input.json'

export default {
  title: 'Testimonial',
  name: 'testimonial',
  type: 'object',
  icon: BsPersonFill,
  __experimental_actions: ['update', 'publish', 'create', 'delete'],
  fields: [
    {
      title: 'Cite',
      name: 'cite',
      type: 'object',
      fields: [
        {
          title: 'Cite',
          description: 'What did the person or company say?',
          name: 'text',
          type: 'text',
        },
      ],
      initialValue: {
        de: { text: ''},
        en: { text: ''}
      },
      options: {
        i18n: true,
      },
    },
    {
      title: 'Cite from',
      description: 'Person or Company like "Max Mustermann" if person or "Purea Austria" if company',
      name: 'citeFrom',
      type: 'string',
    },
    {
      title: 'Affiliation',
      name: 'affiliation',
      type: 'object',
      fields: [
        {
          title: 'Affiliation',
          description: 'Relation like "CEO Purea Austria" if person or "Handelspartner" if company',
          name: 'text',
          type: 'string',
        },
      ],
      initialValue: {
        de: { text: ''},
        en: { text: ''}
      },
      options: {
        i18n: true,
      },
    },
    {
      title: 'Image from Person or Company Logo',
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
      cite: 'cite.de.text',
      affiliation: 'affiliation.de.text',
      citeFrom: 'citeFrom',
      image: 'image'
    },
    prepare(selection) {
      const { image, citeFrom, affiliation, cite } = selection;
      return {
        title: affiliation + ' - ' + citeFrom,
        subtitle: cite,
        media: image
      }
    }
  },
}
