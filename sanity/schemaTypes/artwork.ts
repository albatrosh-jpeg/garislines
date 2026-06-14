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
      description: 'Interior or in-space image for this exact artwork.',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'detailImages',
      title: 'Detail images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
      description: 'Optional close-ups or surface details for this artwork.',
    }),
    defineField({
      name: 'studioImages',
      title: 'Studio images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
      description: 'Optional studio or process images related to this artwork.',
    }),
    defineField({
      name: 'original',
      title: 'Original',
      type: 'object',
      fields: [
        defineField({
          name: 'available',
          title: 'Available',
          type: 'boolean',
          initialValue: true,
        }),
        defineField({
          name: 'sold',
          title: 'Sold',
          type: 'boolean',
          initialValue: false,
        }),
      ],
    }),
    defineField({
      name: 'print',
      title: 'Print settings',
      type: 'object',
      fields: [
        defineField({
          name: 'enabled',
          title: 'Enable prints',
          type: 'boolean',
          initialValue: false,
        }),
        defineField({
          name: 'price',
          title: 'Base price',
          type: 'number',
          description: 'Fallback price used when no size-specific price is selected.',
        }),
        defineField({
          name: 'editionSize',
          title: 'Edition size',
          type: 'number',
        }),
        defineField({
          name: 'printsSold',
          title: 'Prints sold',
          type: 'number',
          initialValue: 0,
        }),
        defineField({
          name: 'paper',
          title: 'Paper',
          type: 'string',
        }),
        defineField({
          name: 'signed',
          title: 'Signed',
          type: 'boolean',
          initialValue: true,
        }),
        defineField({
          name: 'certificate',
          title: 'Certificate included',
          type: 'boolean',
          initialValue: true,
        }),
        defineField({
          name: 'shippingWeight',
          title: 'Shipping weight',
          type: 'number',
          description: 'Weight in kilograms, ready for future shipping integrations.',
        }),
        defineField({
          name: 'masterPrintFile',
          title: 'Master print file',
          type: 'file',
          description: 'Production-ready print file for the edition.',
        }),
        defineField({
          name: 'sizes',
          title: 'Available sizes',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'label',
                  title: 'Label',
                  type: 'string',
                }),
                defineField({
                  name: 'width',
                  title: 'Width',
                  type: 'number',
                }),
                defineField({
                  name: 'height',
                  title: 'Height',
                  type: 'number',
                }),
                defineField({
                  name: 'price',
                  title: 'Price',
                  type: 'number',
                }),
              ],
              preview: {
                select: {
                  title: 'label',
                  price: 'price',
                },
                prepare({ title, price }) {
                  return {
                    title: title || 'Print size',
                    subtitle: price ? `€${price}` : undefined,
                  }
                },
              },
            },
          ],
        }),
      ],
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
