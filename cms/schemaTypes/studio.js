import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'studio',
  title: 'Studio',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Първа част от името (Studio)',
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      description: 'Името на студиото (Clean Cutz 1)'
    }),
    defineField({
      name: 'barber',
      title: 'Barber',
      type: 'array',
      of: [{type: 'reference', to: {type: 'barber'}}],
      description: 'Избор на бръснар',
    }),
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    },
  },
})
