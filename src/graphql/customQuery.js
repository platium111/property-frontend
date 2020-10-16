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
`
export const listCustomersAndProperties = /* GraphQL */ `
  query listCustomersAndProperties(
    $filter: ModelCustomerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCustomers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        firstName
        lastName
        middleName
        fatherName
        motherName
        phoneNumbers
        dateOfBirth
        motherPhone
        fatherPhone
        address {
          id
          homeNumber
          street
          hamlet
          village
          lane
          alley
          district
          province
          city
          createdAt
          updatedAt
        }
        addressId
        dateBorrow
        borrowPurpose
        datePay
        identityCardNo
        issueDate
        note
        createdAt
        customerImages
        properties {
          items {
            id
            loanType
            description
            imageUrls
            userId
            year
            customerName
            itemName
            price
            color
            frameNumber
            machineNumber
            plateNumber
            dateBorrow
            customerId
            cardNumber
            universityName
            gpa
            graduationYear
            interest
          }
        }
        updatedAt
      }
      nextToken
    }
  }
`;


export const searchListCustomer = `
  query searchListCustomers($searchQuery: String) {
    listCustomers(filter: { firstName: { beginsWith: $searchQuery } }) {
      items {
        id
        firstName
        lastName
        middleName
        fatherName
        motherName
        phoneNumbers
        dateOfBirth
        motherPhone
        fatherPhone
        address {
          id
          homeNumber
          street
          hamlet
          village
          district
          province
          lane
          alley
        }
        properties {
          items {
            id
            description
            imageUrls
            loanType
            userId
            year
            customerName
            itemName
            price
            color
            frameNumber
            machineNumber
            plateNumber
            dateBorrow
          }
        }
        dateBorrow
        borrowPurpose
        datePay
        identityCardNo
        issueDate
        note
        customerImages
      }
    }
  }
`
