import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'barber',
  title: 'Barber',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'Име на бръснар',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'position',
      title: 'Position',
      type: 'string',
      description: 'Наименование на длъжност',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'photo',
      title: 'Photo',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Снимка на бръснар',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
      description: 'Ред на показване на бръснаря',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'photo',
    },
  },
})
