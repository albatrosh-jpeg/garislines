import { defineField, defineType } from 'sanity'

export const artworkType = defineType({
  name: 'artwork',
  title: 'Artwork',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'year',
      title: 'Year',
      type: 'string',
    }),
    defineField({
      name: 'medium',
      title: 'Medium',
      type: 'string',
    }),
    defineField({
      name: 'size',
      title: 'Size',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'mockupImage',
      title: 'Mockup image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'availabilityStatus',
      title: 'Availability status',
      type: 'string',
      initialValue: 'available',
      options: {
        layout: 'radio',
        list: [
          { title: 'Available', value: 'available' },
          { title: 'Sold', value: 'sold' },
          { title: 'Private collection', value: 'private-collection' },
        ],
      },
    }),
    defineField({
      name: 'showInPaintings',
      title: 'Show in paintings',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'showInShop',
      title: 'Show in shop',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'shopCategory',
      title: 'Shop category',
      type: 'string',
      initialValue: 'original',
      options: {
        layout: 'radio',
        list: [
          { title: 'Original', value: 'original' },
          { title: 'Print', value: 'print' },
          { title: 'Object', value: 'object' },
        ],
      },
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'string',
      description: 'Optional. Leave empty to keep price private.',
    }),
    defineField({
      name: 'order',
      title: 'Order / featured position',
      type: 'number',
      description: 'Lower numbers appear first.',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'year',
      media: 'mainImage',
    },
  },
})
