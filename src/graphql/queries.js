/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
      cardNumber
      universityName
      gpa
      graduationYear
      interest
      fatherName
      motherName
      motherPhone
      fatherPhone
      contract {
        id
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
        loanStatus
        createdAt
        repayments {
          nextToken
        }
        dateBorrow
        datePay
        borrowPurpose
        note
        properties {
          nextToken
        }
        updatedAt
      }
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
        cardNumber
        universityName
        gpa
        graduationYear
        interest
        fatherName
        motherName
        motherPhone
        fatherPhone
        contract {
          id
          loanStatus
          createdAt
          dateBorrow
          datePay
          borrowPurpose
          note
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getRepayment = /* GraphQL */ `
  query GetRepayment($id: ID!) {
    getRepayment(id: $id) {
      id
      contract {
        id
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
        loanStatus
        createdAt
        repayments {
          nextToken
        }
        dateBorrow
        datePay
        borrowPurpose
        note
        properties {
          nextToken
        }
        updatedAt
      }
      fromDate
      toDate
      totalInterestAmount
      otherMoney
      customerPayAmount
      isPaid
      note
      createdAt
      updatedAt
    }
  }
`;
export const listRepayments = /* GraphQL */ `
  query ListRepayments(
    $filter: ModelRepaymentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRepayments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        contract {
          id
          loanStatus
          createdAt
          dateBorrow
          datePay
          borrowPurpose
          note
          updatedAt
        }
        fromDate
        toDate
        totalInterestAmount
        otherMoney
        customerPayAmount
        isPaid
        note
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
      identityCardNo
      issueDate
      createdAt
      customerImages
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
        identityCardNo
        issueDate
        createdAt
        customerImages
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
      customer {
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
        customerImages
        contracts {
          nextToken
        }
        updatedAt
      }
      loanStatus
      createdAt
      repayments {
        items {
          id
          fromDate
          toDate
          totalInterestAmount
          otherMoney
          customerPayAmount
          isPaid
          note
          createdAt
          updatedAt
        }
        nextToken
      }
      dateBorrow
      datePay
      borrowPurpose
      note
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
        loanStatus
        createdAt
        repayments {
          nextToken
        }
        dateBorrow
        datePay
        borrowPurpose
        note
        properties {
          nextToken
        }
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
      customer {
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
        customerImages
        contracts {
          nextToken
        }
        updatedAt
      }
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
      nextToken
    }
  }
`;
