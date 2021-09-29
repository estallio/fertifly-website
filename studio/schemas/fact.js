export default {
  title: 'Fact',
  name: 'fact',
  type: 'object',
  __experimental_actions: ['update', 'publish', 'create'],
  fields: [
    {
      title: 'Number',
      name: 'number',
      type: 'number',
    },
    {
      title: 'Unit',
      name: 'unit',
      type: 'string',
    },
    {
      title: 'Fact Text',
      name: 'text',
      type: 'object',
      fields: [
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
  ],
  preview: {
    select: {
      number: 'number',
      unit: 'unit',
      text: 'text.de.text',
    },
    prepare(selection) {
      const { number, unit, text } = selection;
      return {
        title: number + ' ' + unit,
        subtitle: text,
      }
    }
  },
}
