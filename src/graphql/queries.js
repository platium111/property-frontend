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
        loanStatus
        createdAt
        updatedAt
        repayments {
          nextToken
        }
        dateBorrow
        datePay
        borrowPurpose
        note
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
          updatedAt
          customerImages
        }
        properties {
          nextToken
        }
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
          updatedAt
          dateBorrow
          datePay
          borrowPurpose
          note
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
        loanStatus
        createdAt
        updatedAt
        repayments {
          nextToken
        }
        dateBorrow
        datePay
        borrowPurpose
        note
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
          updatedAt
          customerImages
        }
        properties {
          nextToken
        }
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
          updatedAt
          dateBorrow
          datePay
          borrowPurpose
          note
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
      identityCardNo
      issueDate
      createdAt
      updatedAt
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
          updatedAt
          customerImages
        }
        createdAt
        updatedAt
      }
      contracts {
        items {
          id
          loanStatus
          createdAt
          updatedAt
          dateBorrow
          datePay
          borrowPurpose
          note
        }
        nextToken
      }
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
        identityCardNo
        issueDate
        createdAt
        updatedAt
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
          createdAt
          updatedAt
        }
        contracts {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getContract = /* GraphQL */ `
  query GetContract($id: ID!) {
    getContract(id: $id) {
      id
      loanStatus
      createdAt
      updatedAt
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
        updatedAt
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
          createdAt
          updatedAt
        }
        contracts {
          nextToken
        }
      }
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
        loanStatus
        createdAt
        updatedAt
        repayments {
          nextToken
        }
        dateBorrow
        datePay
        borrowPurpose
        note
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
          updatedAt
          customerImages
        }
        properties {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getAddress = /* GraphQL */ `
  query GetAddress($id: ID!) {
    getAddress(id: $id) {
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
        updatedAt
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
          createdAt
          updatedAt
        }
        contracts {
          nextToken
        }
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
          updatedAt
          customerImages
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
