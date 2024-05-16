import { languages } from '../config/intl-input.json'

export default {
  title: 'Contact',
  name: 'contact',
  type: 'document',
  __experimental_actions: ['update', 'publish', 'create', 'delete'],
  fields: [
    {
      title: 'Phone',
      description: 'Like +43 123 456 789',
      name: 'phone',
      type: 'string'
    },
    {
      title: 'Email',
      description: 'Like info@email.com',
      name: 'email',
      type: 'string'
    },
    {
      title: 'Address',
      description: 'Multiline address field',
      name: 'address',
      type: 'simpleEditor',
    },
    {
      title: 'Contact Text',
      name: 'contactText',
      description: 'A short text above the contact form with general infos about contact or motivation.',
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
        de: { heading: '', text: '' },
        en: { heading: '', text: '' }
      },
      options: {
        i18n: true,
      },
    },
    {
      title: 'Contact Image',
      description: 'This image is displayed on the contact page.',
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
    // {
    //   title: 'Facebook',
    //   name: 'facebook',
    //   type: 'object',
    //   fields: [
    //     {
    //       title: 'Display Name',
    //       name: 'displayName',
    //       type: 'string',
    //     },
    //     {
    //       title: 'URL',
    //       name: 'link',
    //       type: 'url',
    //     },
    //   ],
    // },
    // {
    //   title: 'LinkedIn',
    //   name: 'linkedIn',
    //   type: 'object',
    //   fields: [
    //     {
    //       title: 'Display Name',
    //       name: 'displayName',
    //       type: 'string',
    //     },
    //     {
    //       title: 'URL',
    //       name: 'link',
    //       type: 'url',
    //     },
    //   ],
    // },
    // {
    //   title: 'Xing',
    //   name: 'xing',
    //   type: 'object',
    //   fields: [
    //     {
    //       title: 'Display Name',
    //       name: 'displayName',
    //       type: 'string',
    //     },
    //     {
    //       title: 'URL',
    //       name: 'link',
    //       type: 'url',
    //     },
    //   ],
    // },
    // {
    //   title: 'karriere.at',
    //   name: 'karriereAt',
    //   type: 'object',
    //   fields: [
    //     {
    //       title: 'Display Name',
    //       name: 'displayName',
    //       type: 'string',
    //     },
    //     {
    //       title: 'URL',
    //       name: 'link',
    //       type: 'url',
    //     },
    //   ],
    // },
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
