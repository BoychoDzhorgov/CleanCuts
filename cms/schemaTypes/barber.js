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
    }),
    defineField({
      name: 'job',
      title: 'Job',
      type: 'string',
      description: 'Наименование на длъжност',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Снимка на бръснар',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
})
