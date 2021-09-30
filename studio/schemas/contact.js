export default {
  title: 'Contact',
  name: 'contact',
  type: 'document',
  __experimental_actions: ['update', 'publish', 'create'],
  fields: [
    {
      title: 'Phone',
      name: 'phone',
      type: 'string',
    },
    {
      title: 'Email',
      name: 'email',
      type: 'string',
    },
    {
      title: 'Address',
      name: 'address',
      type: 'simpleEditor',
    },
    {
      title: 'Contact Image',
      name: 'Image',
      type: 'image',
    },
    {
        title: 'Contact Text',
        name: 'contactText',
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
