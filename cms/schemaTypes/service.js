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
      description: 'Име на услугата',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'price',
      title: 'Price',
      type: 'string',
      description: 'Цена на услугата',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'bookingUrl',
      title: 'Booking URL',
      type: 'url',
      description: 'Fresha booking link за тази услуга',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
      description: 'Ред на показване на услугата',
    }),
  ],

  preview: {
    select: {
      title: 'title',
      subtitle: 'price',
    },
  },
})