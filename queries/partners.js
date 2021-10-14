import { groq } from '@nuxtjs/sanity'

export const generateGROQ = (includeDrafts = false) => {
  if (includeDrafts) {
    return addContactInfo(groq`*[_type == 'partners'] | order(_updatedAt desc)[0]${projections}`, includeDrafts);
  }

  return addContactInfo(groq`*[_type == 'partners' && !(_id in path("drafts.**"))] | order(_updatedAt desc)[0]${projections}`, includeDrafts);
}

const projections = `
{
  ...,
  partners[]{
    ...,
    'imageDoc': image.asset->
  },
}`;

const addContactInfo = (content, includeDrafts = false) => {
  if (includeDrafts) {
    return groq`{
      'content' : ${content},
      'contactInfo': *[_type == 'contact'][0] | order(_updatedAt desc)
    }`;
  }

  return groq`{
    'content': ${content},
    'contactInfo': *[_type == 'contact' && !(_id in path("drafts.**"))] | order(_updatedAt desc)[0]
  }`;
};
