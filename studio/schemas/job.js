import sanityClient from 'part:@sanity/base/client';
import slugify from 'slugify';

const client = sanityClient.withConfig({ apiVersion: '2021-06-07' });

export default {
  title: 'Job',
  name: 'job',
  type: 'document',
  __experimental_actions: ['update', 'publish', 'create', 'delete'],
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Slug',
      name: 'slug',
      description: 'The URL in the address bar of the browser',
      type: 'slug',
      options: {
        source: (doc, { parent }) => `${parent?.title}`,
        slugify: (input) => {
          let slug = slugify(input, { lower: true, strict: true, locale: 'de'  })
          slug = slug.length > 100 ?
            slug.substring(0, 100) :
            slug;
          const query = '*[_type == "jobs"] | order(_updatedAt desc)[0]{ "jobsCount": count(jobs[slug.current == $slug]._key) }'
          const params = { slug }
          return client.fetch(query, params).then(result => {
            if (result?.jobsCount) {
              return `${slug}-1`;
            }
            return slug;
          })
        },
        isUnique: (slug, options) => {
          const params = { slug }
          const query = '*[_type == "jobs"] | order(_updatedAt desc)[0]{ "jobsCount": count(jobs[slug.current == $slug]) }'

          return client.fetch(query, params).then(result => {
            if (result?.jobsCount > 1) {
              return false;
            }
            return true;
          })
        }
      },
      validation: Rule => Rule.required().custom(slug => {
        if (slug?.current && slug?.current?.match(/^[A-Za-z0-9]+(?:-[A-Za-z0-9]+)*$/)) {
          if (slug.current.length > 100) {
            return 'Slug is allowed to has at most 100 characters';
          }

          return true;
        }

        return 'Slug must consist of alphanumeric values like abc123 etc. and "-" and no special chars like äö%(/ etc.';
      })
    },
    {
      title: 'Needed From',
      description: 'e.g. "Ab sofort" or "1. Oktober"',
      name: 'neededFrom',
      type: 'string',
    },
    {
      title: 'Employment Level',
      description: 'e.g. "Vollzeit" or "30h/Woche"',
      name: 'employmentLevel',
      type: 'string',
    },
    {
      title: 'Location',
      description: 'e.g. "Antiesenhofen"',
      name: 'location',
      type: 'string',
    },
    {
      title: 'Simple Task Description',
      name: 'simpleTaskDescription',
      type: 'text',
    },
    {
      title: 'Job offer',
      name: 'jobOffer',
      type: 'richEditor',
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'taskDescription',
    }
  }
}
