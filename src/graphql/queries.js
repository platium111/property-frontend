/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const propertiesForCustomer = /* GraphQL */ `
  query PropertiesForCustomer(
    $customerId: ID!
    $limit: Int
    $nextToken: String
  ) {
    propertiesForCustomer(
      customerId: $customerId
      limit: $limit
      nextToken: $nextToken
    ) {
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
        fatherName
        motherName
        motherPhone
        fatherPhone
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getProperty = /* GraphQL */ `
  query GetProperty($id: ID!) {
    getProperty(id: $id) {
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
      fatherName
      motherName
      motherPhone
      fatherPhone
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
        fatherName
        motherName
        motherPhone
        fatherPhone
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCustomer = /* GraphQL */ `
  query GetCustomer($id: ID!) {
    getCustomer(id: $id) {
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
      addressId
      identityCardNo
      issueDate
      note
      createdAt
      customerImages
      dateBorrow
      borrowPurpose
      datePay
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
          fatherName
          motherName
          motherPhone
          fatherPhone
          createdAt
          updatedAt
        }
        nextToken
      }
      contracts {
        items {
          id
          customerId
          loanStatus
          createdAt
          updatedAt
        }
        nextToken
      }
      updatedAt
    }
  }
`;
export const listCustomers = /* GraphQL */ `
  query ListCustomers(
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
        addressId
        identityCardNo
        issueDate
        note
        createdAt
        customerImages
        dateBorrow
        borrowPurpose
        datePay
        properties {
          nextToken
        }
        contracts {
          nextToken
        }
        updatedAt
      }
      nextToken
    }
  }
`;
export const getContract = /* GraphQL */ `
  query GetContract($id: ID!) {
    getContract(id: $id) {
      id
      customerId
      loanStatus
      createdAt
      updatedAt
    }
  }
`;
export const listContracts = /* GraphQL */ `
  query ListContracts(
    $filter: ModelContractFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listContracts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        customerId
        loanStatus
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getAddress = /* GraphQL */ `
  query GetAddress($id: ID!) {
    getAddress(id: $id) {
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
  }
`;
export const listAddresss = /* GraphQL */ `
  query ListAddresss(
    $filter: ModelAddressFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAddresss(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const listCustomerByCreatedAt = /* GraphQL */ `
  query ListCustomerByCreatedAt(
    $createdAt: AWSDateTime
    $sortDirection: ModelSortDirection
    $filter: ModelCustomerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCustomerByCreatedAt(
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
        addressId
        identityCardNo
        issueDate
        note
        createdAt
        customerImages
        dateBorrow
        borrowPurpose
        datePay
        properties {
          nextToken
        }
        contracts {
          nextToken
        }
        updatedAt
      }
      nextToken
    }
  }
`;
