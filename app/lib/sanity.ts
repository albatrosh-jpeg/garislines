import { createClient } from 'next-sanity'

export const sanityProjectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
export const sanityDataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
export const sanityApiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2026-06-13'

export const isSanityConfigured = Boolean(
  sanityProjectId && sanityProjectId !== 'replace-with-project-id'
)

export const sanityClient = createClient({
  projectId: sanityProjectId || 'replace-with-project-id',
  dataset: sanityDataset,
  apiVersion: sanityApiVersion,
  useCdn: true,
})
