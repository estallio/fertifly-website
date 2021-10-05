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
      type: 'text',
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
          type: 'string',
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
      name: 'Image',
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
  ]
}
