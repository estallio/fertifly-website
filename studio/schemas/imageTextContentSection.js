import { BsCardHeading } from 'react-icons/bs'

export default {
  title: 'Image and Text Content Section',
  name: 'imageTextContentSection',
  type: 'object',
  icon: BsCardHeading,
  __experimental_actions: ['update', 'publish', 'create', 'delete'],
  fields: [
    {
      title: 'Heading Fields',
      name: 'headingFields',
      type: 'object',
      fields: [
        {
          title: 'Heading',
          name: 'heading',
          type: 'string',
        },
        {
          title: 'Subheading',
          name: 'subheading',
          type: 'text',
        },
      ],
      options: {
        i18n: true,
      },
    },
    {
      title: 'Content',
      name: 'content',
      type: 'array',
      of: [ { type: 'textImageContent' } ],
    }
  ],
  preview: {
    select: {
      title: 'headingFields.de.heading',
      subtitle: 'headingFields.de.subheading'
    },
  },
}
