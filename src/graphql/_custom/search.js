import gql from 'graphql-tag'

export const searchListProperty = gql`
  query($searchQuery: String) {
    listPropertys(filter: { itemName: { contains: $searchQuery } }) {
      items {
        itemName
        description
      }
    }
  }
`;

export const listPropertys = gql`
  query {
    listPropertys {
      items {
        itemName
        description
      }
    }
  }
`;
