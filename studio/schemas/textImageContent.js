export default {
  title: 'Text & Image Content',
  name: 'textImageContent',
  type: 'object',
  __experimental_actions: ['update', 'publish', 'create'],
  fields: [
    {
      title: 'Text',
      name: 'text',
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
      title: 'Image left sided (default right sided)',
      name: 'imageLeftSided',
      type: 'checkbox',
    },
    {
      title: 'Locate image left from text (default right)',
      name: 'imageLocatedLeft',
      type: 'boolean',
    },
    {
      title: 'Locate image above the text on small devices (default below)',
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
      type: 'array',
      of: [ { type: 'fact' } ],
      hidden: ({document}) => !document?.hasFactsAndFigures
    }
  ],
  preview: {
    select: {
      title: 'text.de.text',
      media: 'image',
    },
  },
}
