import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Наименование на услугата',
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'string',
      description: 'Цена на услугата',
    }),
    // defineField({
    //   name: 'title',
    //   title: 'Title',
    //   type: 'string',
    //   description: 'Наименование на услугата',
    // }),
  ],
})
