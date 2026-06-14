import type { StructureResolver } from 'sanity/structure'

const orderList = (S: Parameters<StructureResolver>[0], title: string, status: string) =>
  S.documentList()
    .title(title)
    .schemaType('order')
    .filter('_type == "order" && productionStatus == $status')
    .params({ status })
    .defaultOrdering([{ field: 'orderDate', direction: 'desc' }])

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Garislines Studio')
    .items([
      S.listItem()
        .title('Orders')
        .child(
          S.list()
            .title('Orders')
            .items([
              S.listItem()
                .title('New Orders')
                .child(orderList(S, 'New Orders', 'Pending Payment')),
              S.listItem()
                .title('Production Pending')
                .child(orderList(S, 'Production Pending', 'Production Pending')),
              S.listItem()
                .title('Ready To Ship')
                .child(orderList(S, 'Ready To Ship', 'Ready To Ship')),
              S.listItem()
                .title('Completed')
                .child(orderList(S, 'Completed', 'Delivered')),
              S.divider(),
              S.documentTypeListItem('order').title('All Orders'),
            ])
        ),
      S.documentTypeListItem('artwork').title('Artworks'),
      S.documentTypeListItem('laboratory').title('Laboratories'),
    ])
