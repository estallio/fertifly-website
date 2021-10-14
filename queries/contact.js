import { groq } from '@nuxtjs/sanity'

export const generateGROQ = (includeDrafts = false) => {
  return addContactInfo('[]', includeDrafts);
}

const addContactInfo = (content, includeDrafts = false) => {
  if (includeDrafts) {
    return groq`{
      'content' : ${content},
      'contactInfo': *[_type == 'contact'][0] | order(_updatedAt desc)[0] {...,'imageDoc': image.asset->}
    }`;
  }

  return groq`{
    'content': ${content},
    'contactInfo': *[_type == 'contact' && !(_id in path("drafts.**"))] | order(_updatedAt desc)[0] {...,'imageDoc': image.asset->}
  }`;
};
