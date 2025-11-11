import React from 'react'
import { BsDownload } from 'react-icons/bs';

export default {
  name: 'downloadButton',
  title: 'Download button',
  type: 'object',
  icon: BsDownload,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'file',
      title: 'File',
      type: 'file',
    }
  ],
  preview: {
    select: {
      title: 'title'
    },
  }
};
