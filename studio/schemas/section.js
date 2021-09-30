import { BsCardHeading } from 'react-icons/bs'

export default {
  title: 'Section',
  name: 'section',
  type: 'object',
  icon: BsCardHeading,
  __experimental_actions: ['update', 'publish', 'create'],
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
          type: 'string',
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
