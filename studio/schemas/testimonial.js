import { BsPersonFill } from 'react-icons/bs'

export default {
  title: 'Testimonial',
  name: 'testimonial',
  type: 'object',
  icon: BsPersonFill,
  __experimental_actions: ['update', 'publish', 'create'],
  fields: [
    {
      title: 'Cite',
      name: 'cite',
      type: 'object',
      fields: [
        {
          title: 'Cite',
          name: 'cite',
          type: 'string',
        },
      ],
      options: {
        i18n: true,
      },
    },
    {
      title: 'Affiliation',
      name: 'affiliation',
      type: 'string',
    },
    {
      title: 'Person',
      name: 'person',
      type: 'string',
    },
    {
      title: 'Image from Person or Logo',
      name: 'image',
      type: 'image',
    },
  ],
  preview: {
    select: {
      cite: 'cite.de.cite',
      affiliation: 'affiliation',
      person: 'person',
      image: 'image'
    },
    prepare(selection) {
      const { image, person, affiliation, cite } = selection;
      return {
        title: affiliation + ' - ' + person,
        subtitle: cite,
        media: image
      }
    }
  },
}
