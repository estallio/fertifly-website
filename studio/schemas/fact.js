import { AiOutlineFieldNumber } from 'react-icons/ai'

export default {
  title: 'Fact',
  name: 'fact',
  type: 'object',
  icon: AiOutlineFieldNumber,
  __experimental_actions: ['update', 'publish', 'create', 'delete'],
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
          type: 'text',
        },
      ],
      initialValue: {
        de: { text: '' },
        en: { text: '' }
      },
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
