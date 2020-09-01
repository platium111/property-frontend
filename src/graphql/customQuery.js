
export const searchListProperty = `
query searchListProperty($searchQuery: String) {
  listPropertys(filter: { itemName: { eq: $searchQuery } }) {
    items {
      itemName
      description
    }
  }
}
`;
