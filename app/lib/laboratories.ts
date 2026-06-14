import { groq } from 'next-sanity'
import type { FulfillmentLaboratory } from '../data/artworks'
import { isSanityConfigured, sanityClient } from './sanity'

const laboratoriesQuery = groq`
  *[_type == "laboratory" && active != false] | order(region asc, name asc) {
    name,
    region,
    country,
    email,
    website,
    preferredPaper,
    printProfile,
    productionNotes,
    active
  }
`

export async function getActiveLaboratories() {
  if (!isSanityConfigured) {
    return [] as FulfillmentLaboratory[]
  }

  try {
    return await sanityClient.fetch<FulfillmentLaboratory[]>(laboratoriesQuery, {}, {
      next: { revalidate: 60 },
    })
  } catch {
    return [] as FulfillmentLaboratory[]
  }
}
