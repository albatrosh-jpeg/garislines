import { defineField, defineType } from 'sanity'

const productionStatuses = [
  { title: 'Pending Payment', value: 'Pending Payment' },
  { title: 'Paid', value: 'Paid' },
  { title: 'Production Pending', value: 'Production Pending' },
  { title: 'Sent To Laboratory', value: 'Sent To Laboratory' },
  { title: 'Printing', value: 'Printing' },
  { title: 'Quality Check', value: 'Quality Check' },
  { title: 'Ready To Ship', value: 'Ready To Ship' },
  { title: 'Shipped', value: 'Shipped' },
  { title: 'Delivered', value: 'Delivered' },
  { title: 'Cancelled', value: 'Cancelled' },
]

export const orderType = defineType({
  name: 'order',
  title: 'Order',
  type: 'document',
  fields: [
    defineField({
      name: 'orderNumber',
      title: 'Order number',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'orderDate',
      title: 'Date',
      type: 'datetime',
    }),
    defineField({
      name: 'customerName',
      title: 'Customer name',
      type: 'string',
    }),
    defineField({
      name: 'customerEmail',
      title: 'Customer email',
      type: 'string',
    }),
    defineField({
      name: 'customerPhone',
      title: 'Customer phone',
      type: 'string',
    }),
    defineField({
      name: 'shippingAddress',
      title: 'Shipping address',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'country',
      title: 'Country',
      type: 'string',
    }),
    defineField({
      name: 'region',
      title: 'Region',
      type: 'string',
      options: {
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
      name: 'artwork',
      title: 'Artwork',
      type: 'reference',
      to: [{ type: 'artwork' }],
    }),
    defineField({
      name: 'selectedPrintSize',
      title: 'Selected print size',
      type: 'object',
      fields: [
        defineField({ name: 'label', title: 'Label', type: 'string' }),
        defineField({ name: 'width', title: 'Width', type: 'number' }),
        defineField({ name: 'height', title: 'Height', type: 'number' }),
        defineField({ name: 'unit', title: 'Unit', type: 'string' }),
        defineField({ name: 'paper', title: 'Paper', type: 'string' }),
        defineField({ name: 'masterFile', title: 'Master file reference', type: 'string' }),
        defineField({ name: 'shippingWeight', title: 'Shipping weight', type: 'number' }),
        defineField({ name: 'packagingType', title: 'Packaging type', type: 'string' }),
      ],
    }),
    defineField({
      name: 'editionNumber',
      title: 'Edition number',
      type: 'number',
    }),
    defineField({
      name: 'editionSize',
      title: 'Edition size',
      type: 'number',
    }),
    defineField({
      name: 'quantity',
      title: 'Quantity',
      type: 'number',
      initialValue: 1,
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'number',
    }),
    defineField({
      name: 'laboratory',
      title: 'Laboratory',
      type: 'reference',
      to: [{ type: 'laboratory' }],
    }),
    defineField({
      name: 'laboratoryEmail',
      title: 'Laboratory email',
      type: 'string',
    }),
    defineField({
      name: 'paymentStatus',
      title: 'Payment status',
      type: 'string',
      initialValue: 'Pending Payment',
      options: {
        layout: 'radio',
        list: [
          { title: 'Pending Payment', value: 'Pending Payment' },
          { title: 'Paid', value: 'Paid' },
          { title: 'Refunded', value: 'Refunded' },
          { title: 'Failed', value: 'Failed' },
        ],
      },
    }),
    defineField({
      name: 'productionStatus',
      title: 'Production status',
      type: 'string',
      initialValue: 'Pending Payment',
      options: {
        layout: 'dropdown',
        list: productionStatuses,
      },
    }),
    defineField({
      name: 'shipping',
      title: 'Shipping',
      type: 'object',
      fields: [
        defineField({
          name: 'method',
          title: 'Method',
          type: 'string',
        }),
        defineField({
          name: 'packagingType',
          title: 'Tube / Flat Box',
          type: 'string',
          options: {
            list: [
              { title: 'Tube', value: 'tube' },
              { title: 'Flat Box', value: 'flat-box' },
            ],
          },
        }),
        defineField({
          name: 'weight',
          title: 'Weight',
          type: 'number',
        }),
        defineField({
          name: 'courier',
          title: 'Courier',
          type: 'string',
        }),
        defineField({
          name: 'trackingNumber',
          title: 'Tracking number',
          type: 'string',
        }),
      ],
    }),
    defineField({
      name: 'certificateData',
      title: 'Certificate data',
      type: 'object',
      fields: [
        defineField({ name: 'artworkTitle', title: 'Artwork title', type: 'string' }),
        defineField({ name: 'artist', title: 'Artist', type: 'string' }),
        defineField({ name: 'year', title: 'Year', type: 'string' }),
        defineField({ name: 'editionNumber', title: 'Edition number', type: 'number' }),
        defineField({ name: 'editionSize', title: 'Edition size', type: 'number' }),
        defineField({ name: 'paper', title: 'Paper', type: 'string' }),
        defineField({ name: 'printDimensions', title: 'Print dimensions', type: 'string' }),
        defineField({ name: 'orderNumber', title: 'Order number', type: 'string' }),
        defineField({ name: 'qrReference', title: 'QR reference', type: 'string' }),
        defineField({ name: 'signatureRequired', title: 'Signature required', type: 'boolean' }),
      ],
    }),
    defineField({
      name: 'internalNotes',
      title: 'Internal notes',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'specialNotes',
      title: 'Special notes',
      type: 'text',
      rows: 3,
    }),
  ],
  preview: {
    select: {
      title: 'orderNumber',
      customer: 'customerName',
      status: 'productionStatus',
    },
    prepare({
      title,
      customer,
      status,
    }: {
      title?: string
      customer?: string
      status?: string
    }) {
      return {
        title: title || 'Order',
        subtitle: [customer, status].filter(Boolean).join(' - '),
      }
    },
  },
})
