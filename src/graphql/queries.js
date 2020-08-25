/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getProperty = /* GraphQL */ `
  query GetProperty($id: ID!) {
    getProperty(id: $id) {
      propertyId
      description
      imageUrls
      type
      userId
      year
      customerName
      itemName
      modal
      price
      createdAt
      updatedAt
    }
  }
`;
export const listPropertys = /* GraphQL */ `
  query ListPropertys(
    $filter: ModelPropertyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPropertys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        propertyId
        description
        imageUrls
        type
        userId
        year
        customerName
        itemName
        modal
        price
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
