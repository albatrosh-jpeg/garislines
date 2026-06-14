import { defineField, defineType } from 'sanity'

export const laboratoryType = defineType({
  name: 'laboratory',
  title: 'Laboratory',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'region',
      title: 'Region',
      type: 'string',
      validation: (Rule) => Rule.required(),
      options: {
        layout: 'radio',
        list: [
          { title: 'Europe', value: 'Europe' },
          { title: 'USA', value: 'USA' },
          { title: 'Asia', value: 'Asia' },
          { title: 'Australia', value: 'Australia' },
          { title: 'Manual', value: 'Manual' },
        ],
      },
    }),
    defineField({
      name: 'country',
      title: 'Country',
      type: 'string',
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
    }),
    defineField({
      name: 'website',
      title: 'Website',
      type: 'url',
    }),
    defineField({
      name: 'preferredPaper',
      title: 'Preferred paper',
      type: 'string',
    }),
    defineField({
      name: 'printProfile',
      title: 'Print profile',
      type: 'string',
    }),
    defineField({
      name: 'productionNotes',
      title: 'Production notes',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'active',
      title: 'Active',
      type: 'boolean',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: 'name',
      region: 'region',
      country: 'country',
    },
    prepare({ title, region, country }: { title?: string; region?: string; country?: string }) {
      return {
        title: title || 'Laboratory',
        subtitle: [region, country].filter(Boolean).join(' - '),
      }
    },
  },
})
