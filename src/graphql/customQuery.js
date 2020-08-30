export const searchListProperty = `
  query SearchListProperty($searchQuery: String) {
    searchListProperty(filter: { itemName: { contains: $searchQuery } }) {
      items {
        itemName
        description
      }
    }
  }
`;
