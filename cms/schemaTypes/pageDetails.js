import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'pageDetails',
  title: 'Page Details',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Основен текст',
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      description: 'Малък текст',
    }),
  ],
})