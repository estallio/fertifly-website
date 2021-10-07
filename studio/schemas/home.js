import { languages } from '../config/intl-input.json'

export default {
  title: 'Home',
  name: 'home',
  type: 'document',
  __experimental_actions: ['update', 'publish', 'create', 'delete'],
  fields: [
    {
      title: 'Banner',
      description: 'Content Slides - the first thing visitors see on the home page.',
      name: 'banner',
      type: 'array',
      of: [ { type: 'slide' } ],
    },
    {
      title: 'Content Sections',
      description: 'A Content Section has one big heading and several content sections consisting of an image and a text block.',
      name: 'contentSections',
      type: 'array',
      of: [ { type: 'imageTextContentSection' } ],
    },
    {
      title: '"To Products" Section',
      description: 'A section to motivate the users to navigate also to the products page.',
      name: 'toProductsSection',
      type: 'object',
      fields: [
        {
          title: 'To Products',
          description: 'Short text block consisting of heading and text about products.',
          name: 'toProductsHeading',
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
              type: 'text',
            },
            {
              title: 'Button Text',
              description: 'e.g. "Zu den Produkten"',
              name: 'buttonText',
              type: 'string',
            },
          ],
          initialValue: {
            de: { heading: '', text: '', buttonText: '' },
            en: { heading: '', text: '', buttonText: '' }
          },
          options: {
            i18n: true,
          },
        },
        {
          title: 'Background Image',
          description: 'The image behind the "To Products" block.',
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

                return 'Add descriptive texts in the Image Details Section for every language';
              }),
              options: {
                i18n: true,
              },
            },
          ],
        },
      ]
    },
    {
      title: 'Testimonials',
      description: 'What other people say about Ecofly.',
      name: 'testimonials',
      type: 'array',
      of: [ { type: 'testimonial' } ],
    },
    {
      title: 'Search Engine Parameters',
      type: 'object',
      name: 'seo',
      fields: [
        {
          title: 'Title',
          description: 'Title of page, typically shown at headline in Google search results, meaningful title of page or description of page and important keywords, max. 50 characters. E.g. "Nachhaltige Lebensmittel aus Soldatefliegen"',
          name: 'title',
          type: 'string',
        },
        {
          title: 'Description',
          description: 'Description of page content, typically the text under the headline in Google search results, max. 160 characters',
          name: 'description',
          type: 'text',
        },
      ],
      initialValue: {
        de: { title: '', description: '' },
        en: { title: '', description: '' }
      },
      options: {
        i18n: true,
      },
    }
  ]
}
