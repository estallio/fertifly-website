import React from 'react'
import client from 'part:@sanity/base/client'
import urlBuilder from '@sanity/image-url'

const urlFor = source => urlBuilder(client).image(source)

export const galleryPreview = ({ value = {} }) => {
  return (
    <div style={{ marginTop: 5 }}>
      {value?.images?.filter(img => img.asset /* mystery image element with only key specified is sorted out here */).map(image => {
          return (
            <div
              key={image._key}
              style={{ display: 'inline-block' }}
            >
              <img
                src={urlFor(image)
                  .height(100)
                  .url()}
                style={{ marginLeft: 5, marginRight: 5, height: 100 }}
              />
          </div>
        );}
      )}
    </div>
  )
}
