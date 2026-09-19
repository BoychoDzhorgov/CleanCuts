import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'footer',
  title: 'Footer',
  type: 'document',

  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Име на секцията от фуутъра',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'firstLine',
      title: 'First Line',
      type: 'string',
      description: 'Първи ред текст',
    }),

    defineField({
      name: 'secondLine',
      title: 'Second Line',
      type: 'string',
      description: 'Втори ред текст',
    }),
    defineField({
      name: 'thirdLine',
      title: 'Third Line',
      type: 'string',
      description: 'Трети ред текст',
    }),
  ],

  preview: {
    select: {
      title: 'title',
    //   subtitle: 'price',
    },
  },
})