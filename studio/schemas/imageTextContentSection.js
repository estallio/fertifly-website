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
      description: 'A big Heading Section introducing the next section. Like "Global Warming..."',
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
      initialValue: {
        de: { heading: '', subheading: '' },
        en: { heading: '', subheading: '' },
      },
      options: {
        i18n: true,
      },
    },
    {
      title: 'Content',
      name: 'content',
      description: 'List of Content Sections, each consisting of an image and a text block.',
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
