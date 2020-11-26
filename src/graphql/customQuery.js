export const searchListProperty = `
  query searchListProperty($searchQuery: String) {
    listPropertys(filter: { itemName: { beginsWith: $searchQuery } }) {
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
        dateBorrow
        frameNumber
        machineNumber
        plateNumber
      }
    }
  }
`;
export const listCustomersAndProperties = /* GraphQL */ `
  query listCustomersAndProperties($filter: ModelCustomerFilterInput, $limit: Int, $nextToken: String) {
    listCustomers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        firstName
        lastName
        middleName
        phoneNumbers
        dateOfBirth
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
        identityCardNo
        issueDate
        createdAt
        contracts {
          items {
            id
            loanStatus
            createdAt
            dateBorrow
            datePay
            borrowPurpose
            note
            updatedAt
            properties {
              items {
                cardNumber
                color
                createdAt
                customerName
                dateBorrow
                description
                fatherPhone
                fatherName
                frameNumber
                gpa
                graduationYear
                id
                imageUrls
                interest
                itemName
                loanType
                machineNumber
                motherName
                motherPhone
                plateNumber
                price
                universityName
                updatedAt
                userId
                year
              }
            }
          }
          nextToken
        }
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCustomizeCustomer = /* GraphQL */ `
  query GetCustomer($id: ID!) {
    getCustomer(id: $id) {
      id
      firstName
      lastName
      middleName
      phoneNumbers
      dateOfBirth
      identityCardNo
      issueDate
      createdAt
      customerImages
      address {
        id
        alley
        city
        district
        hamlet
        homeNumber
        lane
        province
        street
        village
        customer {
          id
          firstName
          lastName
          middleName
          phoneNumbers
          dateOfBirth
          identityCardNo
          issueDate
          createdAt
          customerImages
          updatedAt
        }
        createdAt
        updatedAt
      }
      contracts {
        items {
          id
          loanStatus
          createdAt
          dateBorrow
          datePay
          borrowPurpose
          note
          updatedAt
          properties {
            items {
              cardNumber
              color
              createdAt
              customerName
              dateBorrow
              description
              fatherPhone
              fatherName
              frameNumber
              gpa
              graduationYear
              id
              imageUrls
              interest
              itemName
              loanType
              machineNumber
              motherName
              motherPhone
              plateNumber
              price
              universityName
              updatedAt
              userId
              year
            }
          }
        }
        nextToken
      }
      updatedAt
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
        phoneNumbers
        dateOfBirth
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
        contracts {
          items {
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
                fatherName
                motherName
                motherPhone
                fatherPhone
              }
            }
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
`;
