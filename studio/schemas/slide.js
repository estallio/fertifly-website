import { BiSlideshow } from 'react-icons/bi';

export default {
  title: 'Slide',
  name: 'slide',
  type: 'object',
  icon: BiSlideshow,
  __experimental_actions: ['update', 'publish', 'create'],
  fields: [
    {
      title: 'Slide Text',
      name: 'text',
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
        }
      ],
      options: {
        i18n: true,
      },
    },
    {
      title: 'Background Image',
      name: 'backgroundImage',
      type: 'image',
    },
  ],
  preview: {
    select: {
      title: 'text.de.heading',
      subtitle: 'text.de.subheading',
      media: 'backgroundImage',
    },
  },
}
