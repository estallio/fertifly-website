import { groq } from '@nuxtjs/sanity'

export const generateGROQ = (includeDrafts = false) => {
  if (includeDrafts) {
    return addContactInfo(groq`*[_type == 'jobs'] | order(_updatedAt desc)[0]${projections}`, includeDrafts);
  }

  return addContactInfo(groq`*[_type == 'about' && !(_id in path("drafts.**"))] | order(_updatedAt desc)[0]${projections}`, includeDrafts);
}

const projections = `
{
  ...,
  contentSections[]{
    ...,
    de{
      ...,
      content[]{
        ...,
        _type == 'downloadButton' => {
          'fileUrl': file.asset->url
        },
        _type == 'linkButton' => {
          'linkUrl': url
        },
        _type == 'gallery' => {
          images[]{
            ...,
            'imageDoc': asset->
          }
        },
        _type == 'image' => {
          ...,
          'imageDoc': asset->
        },
        _type == 'block' => {
          ...,
          markDefs[] {
            ...,
            _type == 'link' => {
              'linkUrl': url
            },
            _type == 'file' => {
              'fileUrl': asset->url
            },
          }
        }
      }
    },
    en{
      ...,
      content[]{
        ...,
        _type == 'downloadButton' => {
          'fileUrl': file.asset->url
        },
        _type == 'linkButton' => {
          'linkUrl': url
        },
        _type == 'gallery' => {
          images[]{
            ...,
            'imageDoc': asset->
          }
        },
        _type == 'image' => {
          ...,
          'imageDoc': asset->
        },
        _type == 'block' => {
          ...,
          markDefs[] {
            ...,
            _type == 'link' => {
              'linkUrl': url
            },
            _type == 'file' => {
              'fileUrl': asset->url
            },
          }
        }
      }
    }
  }
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
