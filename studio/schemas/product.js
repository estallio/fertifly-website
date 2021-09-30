import { FaProductHunt } from 'react-icons/fa'

export default {
  title: 'Product',
  name: 'product',
  type: 'object',
  icon: FaProductHunt,
  __experimental_actions: ['update', 'publish', 'create', 'delete'],
  fields: [
    {
      title: 'Text',
      name: 'text',
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
      options: {
        i18n: true,
      },
    },
    {
      title: 'Image',
      name: 'image',
      type: 'image',
    },
  ],
  preview: {
    select: {
      title: 'text.de.heading',
      subtitle: 'text.de.text',
      media: 'image',
    },
  },
}
