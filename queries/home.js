import { groq } from '@nuxtjs/sanity'

export const generateGROQ = (includeDrafts = false) => {
  if (includeDrafts) {
    return groq`*[_type == 'home'] | order(_updatedAt desc)[0]${projections}`;
  }

  return groq`*[_type == 'home' && !(_id in path("drafts.**"))] | order(_updatedAt desc)[0]${projections}`;
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
