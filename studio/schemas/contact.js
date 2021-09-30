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
      type: 'string',
    },
    {
      title: 'Email',
      description: 'Like info@email.com',
      name: 'email',
      type: 'string',
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
      options: {
        i18n: true,
      },
    },
    {
      title: 'Contact Image',
      description: 'This image is displayed on the contact page.',
      name: 'Image',
      type: 'image',
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
