import { groq } from '@nuxtjs/sanity'

export const generateGROQ = (includeDrafts = false) => {
  if (includeDrafts) {
    return addContactInfo(groq`*[_type == 'home'] | order(_updatedAt desc)[0]${projections}`, includeDrafts);
  }

  return addContactInfo(groq`*[_type == 'home' && !(_id in path("drafts.**"))] | order(_updatedAt desc)[0]${projections}`, includeDrafts);
}

const projections = `
{
  ...,
  banner[]{
    ...,
    'backgroundImageDoc': backgroundImage.asset->
  },
  contentSections[]{
    ...,
    content[] {
      ...,
      'imageDoc': image.asset->
    }
  },
  testimonials[] {
    ...,
    'imageDoc': image.asset->
  },
  toProductsSection {
    ...,
    'backgroundImageDoc': backgroundImage.asset->
  }
}`;

const addContactInfo = (content, includeDrafts = false) => {
  if (includeDrafts) {
    return groq`{
      'content' : ${content},
      'contactInfo': *[_type == 'contact'][0]
    }`;
  }

  return groq`{
    'content': ${content},
    'contactInfo': *[_type == 'contact' && !(_id in path("drafts.**"))][0]
  }`;
};
