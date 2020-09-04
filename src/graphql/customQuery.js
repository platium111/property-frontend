export const searchListProperty = `
query searchListProperty($searchQuery: String) {
  listPropertys(filter: { itemName: { beginsWith: $searchQuery } }) {
    items {
      id
      description
      imageUrls
      type
      userId
      year
      customerName
      itemName
      modal
      price
    }
  }
}
`;
