import {
  type Artwork,
  type ArtworkPrintSize,
  type FulfillmentLaboratory,
  type FulfillmentRegion,
} from '../data/artworks'
import { formatPrice } from './money'

export type ProductionStatus =
  | 'Pending Payment'
  | 'Paid'
  | 'Production Pending'
  | 'Sent To Laboratory'
  | 'Printing'
  | 'Quality Check'
  | 'Ready To Ship'
  | 'Shipped'
  | 'Delivered'
  | 'Cancelled'

export type PaymentStatus = 'Pending Payment' | 'Paid' | 'Refunded' | 'Failed'

export type ShippingAddress = {
  line1: string
  line2?: string
  city: string
  state?: string
  postalCode: string
  country: string
}

export type PrintOrderInput = {
  customerName: string
  customerEmail: string
  customerPhone?: string
  shippingAddress: ShippingAddress
  artwork: Artwork
  selectedSize: ArtworkPrintSize
  quantity?: number
  shippingMethod?: string
  specialNotes?: string
  laboratories?: FulfillmentLaboratory[]
  studioEmail?: string
}

export type CertificateData = {
  artworkTitle: string
  artist: string
  year: string
  editionNumber: number
  editionSize: number
  paper: string
  printDimensions: string
  orderNumber: string
  qrReference?: string
  signatureRequired: boolean
}

export type ProductionOrder = {
  orderNumber: string
  orderDate: string
  customerName: string
  customerEmail: string
  customerPhone?: string
  shippingAddress: ShippingAddress
  country: string
  region: FulfillmentRegion
  artworkTitle: string
  artworkSlug: string
  editionNumber: number
  editionSize: number
  selectedSize: ArtworkPrintSize
  paper: string
  quantity: number
  price: number
  paymentStatus: PaymentStatus
  productionStatus: ProductionStatus
  laboratory?: FulfillmentLaboratory
  recipients: {
    studio?: string
    laboratory?: string
  }
  certificateData: CertificateData
  signedPrint: boolean
  signedCertificate: boolean
  shipping: {
    method?: string
    packagingType?: ArtworkPrintSize['packagingType']
    weight?: number
    courier?: string
    trackingNumber?: string
  }
  productionNotes?: string
  packagingNotes?: string
  specialNotes?: string
}

const europeCountries = new Set([
  'spain',
  'france',
  'germany',
  'italy',
  'netherlands',
  'portugal',
  'belgium',
  'austria',
  'ireland',
  'denmark',
  'sweden',
  'norway',
  'finland',
  'switzerland',
  'poland',
  'greece',
])

const usaCountries = new Set(['united states', 'usa', 'us', 'united states of america'])

const asiaCountries = new Set([
  'thailand',
  'malaysia',
  'singapore',
  'japan',
  'south korea',
  'korea',
  'indonesia',
  'philippines',
  'vietnam',
  'hong kong',
  'taiwan',
])

const australiaCountries = new Set(['australia', 'new zealand'])

function normalizeCountry(country: string) {
  return country.trim().toLowerCase()
}

export function getFulfillmentRegion(country: string): FulfillmentRegion {
  const normalized = normalizeCountry(country)

  if (europeCountries.has(normalized)) {
    return 'Europe'
  }

  if (usaCountries.has(normalized)) {
    return 'USA'
  }

  if (asiaCountries.has(normalized)) {
    return 'Asia'
  }

  if (australiaCountries.has(normalized)) {
    return 'Australia'
  }

  return 'Manual'
}

export function selectLaboratory(
  region: FulfillmentRegion,
  laboratories: FulfillmentLaboratory[] = [],
  artwork?: Artwork
) {
  const artworkLab = artwork?.print?.preferredLaboratory

  if (artworkLab?.active !== false && artworkLab?.region === region) {
    return artworkLab
  }

  return laboratories.find((lab) => lab.active !== false && lab.region === region)
}

export function getRemainingEditionCount(artwork: Artwork) {
  const editionSize = artwork.print?.editionSize || 0
  const printsSold = artwork.print?.printsSold || 0

  return Math.max(editionSize - printsSold, 0)
}

export function getNextEditionNumber(artwork: Artwork) {
  return (artwork.print?.printsSold || 0) + 1
}

export function canAssignEdition(artwork: Artwork, quantity = 1) {
  return Boolean(artwork.print?.enabled && getRemainingEditionCount(artwork) >= quantity)
}

export function generateOrderNumber(date = new Date()) {
  const datePart = date.toISOString().slice(0, 10).replace(/-/g, '')
  const randomPart = Math.random().toString(36).slice(2, 7).toUpperCase()

  return `AR-${datePart}-${randomPart}`
}

export function formatPrintDimensions(size: ArtworkPrintSize) {
  return `${size.width} x ${size.height} ${size.unit || 'cm'}`
}

export function createCertificateData(params: {
  artwork: Artwork
  selectedSize: ArtworkPrintSize
  editionNumber: number
  orderNumber: string
}): CertificateData {
  const { artwork, selectedSize, editionNumber, orderNumber } = params
  const editionSize = artwork.print?.editionSize || 0

  return {
    artworkTitle: artwork.title,
    artist: 'Awal Radzi',
    year: artwork.year,
    editionNumber,
    editionSize,
    paper: selectedSize.paper || artwork.print?.preferredPaper || artwork.print?.paper || '',
    printDimensions: formatPrintDimensions(selectedSize),
    orderNumber,
    qrReference: '',
    signatureRequired: artwork.print?.signedCertificate ?? artwork.print?.certificate ?? true,
  }
}

export function createProductionOrder(input: PrintOrderInput): ProductionOrder {
  const quantity = input.quantity || 1

  if (!canAssignEdition(input.artwork, quantity)) {
    throw new Error('Print edition is sold out or not enabled.')
  }

  const region = getFulfillmentRegion(input.shippingAddress.country)
  const laboratory = selectLaboratory(region, input.laboratories, input.artwork)
  const orderNumber = generateOrderNumber()
  const editionNumber = getNextEditionNumber(input.artwork)
  const paper =
    input.selectedSize.paper ||
    input.artwork.print?.preferredPaper ||
    laboratory?.preferredPaper ||
    input.artwork.print?.paper ||
    ''
  const certificateData = createCertificateData({
    artwork: input.artwork,
    selectedSize: {
      ...input.selectedSize,
      paper,
    },
    editionNumber,
    orderNumber,
  })

  return {
    orderNumber,
    orderDate: new Date().toISOString(),
    customerName: input.customerName,
    customerEmail: input.customerEmail,
    customerPhone: input.customerPhone,
    shippingAddress: input.shippingAddress,
    country: input.shippingAddress.country,
    region,
    artworkTitle: input.artwork.title,
    artworkSlug: input.artwork.slug,
    editionNumber,
    editionSize: input.artwork.print?.editionSize || 0,
    selectedSize: {
      ...input.selectedSize,
      paper,
    },
    paper,
    quantity,
    price: input.selectedSize.price * quantity,
    paymentStatus: 'Paid',
    productionStatus: laboratory?.email ? 'Sent To Laboratory' : 'Production Pending',
    laboratory,
    recipients: {
      studio: input.studioEmail,
      laboratory: input.artwork.print?.laboratoryEmail || laboratory?.email,
    },
    certificateData,
    signedPrint: input.artwork.print?.signed ?? true,
    signedCertificate: input.artwork.print?.signedCertificate ?? true,
    shipping: {
      method: input.shippingMethod,
      packagingType: input.selectedSize.packagingType,
      weight: input.selectedSize.shippingWeight || input.artwork.print?.shippingWeight,
    },
    productionNotes: [input.artwork.print?.productionNotes, laboratory?.productionNotes]
      .filter(Boolean)
      .join('\n'),
    packagingNotes: input.artwork.print?.packagingNotes,
    specialNotes: input.specialNotes,
  }
}

export function createProductionEmail(order: ProductionOrder) {
  const address = [
    order.shippingAddress.line1,
    order.shippingAddress.line2,
    order.shippingAddress.city,
    order.shippingAddress.state,
    order.shippingAddress.postalCode,
    order.shippingAddress.country,
  ]
    .filter(Boolean)
    .join('\n')

  const body = [
    'FINE ART PRINT PRODUCTION ORDER',
    '',
    `Order Number: ${order.orderNumber}`,
    `Status: ${order.productionStatus}`,
    '',
    'Customer',
    `Name: ${order.customerName}`,
    `Email: ${order.customerEmail}`,
    `Phone: ${order.customerPhone || 'Not provided'}`,
    '',
    'Artwork',
    `Title: ${order.artworkTitle}`,
    `Edition: ${order.editionNumber} / ${order.editionSize}`,
    `Size: ${formatPrintDimensions(order.selectedSize)}`,
    `Paper: ${order.paper}`,
    `Master File: ${order.selectedSize.masterFile || 'Use artwork master file'}`,
    `Price: ${formatPrice(order.price)}`,
    '',
    'Certificate',
    `Required: ${order.certificateData.signatureRequired ? 'Yes' : 'No'}`,
    `Signed Print: ${order.signedPrint ? 'Yes' : 'No'}`,
    `Signed Certificate: ${order.signedCertificate ? 'Yes' : 'No'}`,
    '',
    'Shipping',
    `Packaging: ${order.shipping.packagingType || 'Confirm with studio'}`,
    `Weight: ${order.shipping.weight ? `${order.shipping.weight} kg` : 'Not specified'}`,
    `Method: ${order.shipping.method || 'Not selected'}`,
    '',
    'Shipping Address',
    address,
    '',
    'Production Notes',
    order.productionNotes || 'None',
    '',
    'Packaging Notes',
    order.packagingNotes || 'None',
    '',
    'Special Notes',
    order.specialNotes || 'None',
  ].join('\n')

  return {
    subject: `Production Order ${order.orderNumber} - ${order.artworkTitle}`,
    body,
    recipients: {
      studio: order.recipients.studio,
      laboratory: order.recipients.laboratory,
    },
  }
}
