
export const searchListProperty = `
  query searchListProperty($searchQuery: String) {
    searchListProperty(filter: { itemName: { contains: $searchQuery } }) {
      items {
        itemName
        description
      }
    }
  }
`;

// export const listPropertys = /* GraphQL */ `
//   query ListPropertys(
//     $filter: ModelPropertyFilterInput
//     $limit: Int
//     $nextToken: String
//   ) {
//     listPropertys(filter: $filter, limit: $limit, nextToken: $nextToken) {
//       items {
//         id
//         description
//         imageUrls
//         type
//         userId
//         year
//         customerName
//         itemName
//         modal
//         price
//         createdAt
//         updatedAt
//       }
//       nextToken
//     }
//   }
// `;
