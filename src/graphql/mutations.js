/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createProperty = /* GraphQL */ `
  mutation CreateProperty(
    $input: CreatePropertyInput!
    $condition: ModelPropertyConditionInput
  ) {
    createProperty(input: $input, condition: $condition) {
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
export const updateProperty = /* GraphQL */ `
  mutation UpdateProperty(
    $input: UpdatePropertyInput!
    $condition: ModelPropertyConditionInput
  ) {
    updateProperty(input: $input, condition: $condition) {
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
export const deleteProperty = /* GraphQL */ `
  mutation DeleteProperty(
    $input: DeletePropertyInput!
    $condition: ModelPropertyConditionInput
  ) {
    deleteProperty(input: $input, condition: $condition) {
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
