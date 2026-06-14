# Fine Art Print Fulfilment

The site is prepared for a future payment webhook without coupling the public gallery UI to a checkout provider.

## Confirmed Payment Flow

1. A customer buys a Fine Art Print through Stripe, Shopify, or another provider.
2. The payment webhook fetches the artwork and selected print size from Sanity.
3. `createProductionOrder()` assigns the next edition number from `print.printsSold + 1`.
4. `createSanityOrderDocument()` prepares the Order document for Sanity.
5. `createPrintsSoldPatch()` prepares the increment for `print.printsSold`.
6. `createProductionEmail()` generates the studio/laboratory production sheet.
7. The Order enters `Production Pending` or `Sent To Laboratory`.

## Regional Laboratory Routing

`getFulfillmentRegion()` maps the shipping country to:

- Europe
- USA
- Asia
- Australia
- Manual

`selectLaboratory()` chooses an active lab for that region. If no active laboratory exists, the order stays on manual studio fulfilment.

## Sanity Studio

Studio editors can manage:

- Artworks and print settings
- Print sizes, papers, files, weight and packaging
- Laboratories by region
- Orders, production status, tracking and certificate data

No public UI changes are required when new laboratories, print sizes or papers are added.
