# AWAL RADZI

Public artist website for contemporary abstract painter Awal Radzi.

## Current Direction

The public experience is built around one name only: **AWAL RADZI**.

The site is intentionally austere: sparse navigation, large paintings, restrained
typography and a quiet archive structure. The visual direction is closer to a
contemporary artist portfolio than to a commercial landing page.

## Implemented Structure

- `app/page.tsx`: visual entry point and selected works.
- `app/data/artworks.ts`: editable inventory of paintings, metadata and image paths.
- `app/components/Header.tsx`: minimal global navigation.
- `app/components/Footer.tsx`: restrained footer links.
- `app/components/ArtworkFrame.tsx`: reusable painting frame with placeholder support.
- `app/obra/[slug]/page.tsx`: individual painting page.
- `app/colecciones/page.tsx`: paintings archive.
- `app/exposiciones/page.tsx`: exhibitions archive.
- `app/sobre-la-artista/page.tsx`: artist page.
- `app/contacto/page.tsx`: studio inquiries.

## Commercial Intent

The site does not implement ecommerce or checkout yet. It is prepared for:

- original artwork inquiries
- future print editions
- exhibitions
- commissions for interiors, hospitality and commercial spaces

## Next Steps

1. Rename public routes to the final English architecture:
   `/paintings`, `/paintings/[slug]`, `/commissions`, `/exhibitions`, `/about`, `/contact`.
2. Add an `Art In Spaces` section using selected mockups.
3. Add availability states for original works without turning the site into ecommerce.
4. Add detail photography and studio documentation.
5. Add a future prints structure only when editions are ready.

## Development

```bash
npm install
npm run dev
npm run build
```

## Sanity CMS

Create a Sanity project and add these variables to `.env.local`:

```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2026-06-13
```

Start the website and open the CMS at:

```text
http://localhost:3000/studio
```

To add a new artwork:

1. Open `Studio`.
2. Create `Artwork`.
3. Add title, slug, year, medium, size, description, main image and optional mockup image.
4. Set availability: `available`, `sold`, or `private collection`.
5. Enable `Show in paintings` to place it in the public paintings gallery.
6. Enable `Show in shop`, choose `original`, `print`, or `object`, and optionally add a private price note.
7. Use `Order / featured position` to control display order. Lower numbers appear first.

If Sanity is not configured or has no artworks yet, the site uses the local fallback artwork list.
