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
      price
      color
      dateBorrow
      frameNumber
      machineNumber
      plateNumber
    }
  }
}
`;
