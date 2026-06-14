import type { ProductionOrder } from './fulfillment'

export function createSanityOrderDocument(order: ProductionOrder) {
  return {
    _type: 'order',
    orderNumber: order.orderNumber,
    orderDate: order.orderDate,
    customerName: order.customerName,
    customerEmail: order.customerEmail,
    customerPhone: order.customerPhone,
    shippingAddress: [
      order.shippingAddress.line1,
      order.shippingAddress.line2,
      order.shippingAddress.city,
      order.shippingAddress.state,
      order.shippingAddress.postalCode,
      order.shippingAddress.country,
    ]
      .filter(Boolean)
      .join('\n'),
    country: order.country,
    region: order.region,
    selectedPrintSize: order.selectedSize,
    editionNumber: order.editionNumber,
    editionSize: order.editionSize,
    quantity: order.quantity,
    price: order.price,
    laboratoryEmail: order.recipients.laboratory,
    paymentStatus: order.paymentStatus,
    productionStatus: order.productionStatus,
    shipping: order.shipping,
    certificateData: order.certificateData,
    internalNotes: order.productionNotes,
    specialNotes: order.specialNotes,
  }
}

export function createPrintsSoldPatch(artworkId: string, quantity = 1) {
  return {
    id: artworkId,
    patch: {
      inc: {
        'print.printsSold': quantity,
      },
    },
  }
}

export function describeConfirmedPaymentWorkflow() {
  return [
    'Verify payment from Stripe, Shopify, or another provider.',
    'Fetch the artwork and selected print size from Sanity.',
    'Create a ProductionOrder with createProductionOrder().',
    'Create the Sanity order document with createSanityOrderDocument().',
    'Increment print.printsSold with createPrintsSoldPatch().',
    'Send the generated production email to the studio and laboratory when configured.',
    'Set productionStatus to Production Pending or Sent To Laboratory.',
  ]
}
