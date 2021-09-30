import { GrTextWrap } from 'react-icons/gr'

export default {
  title: 'Text & Image Content',
  name: 'textImageContent',
  type: 'object',
  icon: GrTextWrap,
  __experimental_actions: ['update', 'publish', 'create', 'delete'],
  fields: [
    {
      title: 'Text Block',
      name: 'textBlock',
      type: 'object',
      fields: [
        {
          title: 'Text',
          name: 'text',
          type: 'simpleEditor',
        }
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
    {
      title: 'Image Left',
      description: 'Locate image left from text (default right)',
      name: 'imageLocatedLeft',
      type: 'boolean',
    },
    {
      title: 'Image Above',
      description: 'Locate image above the text on small devices (default below)',
      name: 'smImageAboveText',
      type: 'boolean',
    },
    {
      title: 'Add Facts and Figures Section',
      name: 'hasFactsAndFigures',
      type: 'boolean',
    },
    {
      title: 'Facts and Figures',
      name: 'factsAndFigures',
      description: 'Append a facts and figures section to this Content Section.',
      type: 'array',
      of: [ { type: 'fact' } ],
      hidden: ({ parent }) => !parent?.hasFactsAndFigures
    }
  ],
  preview: {
    select: {
      title: 'textSection.de.text',
      media: 'image',
    },
  },
}
