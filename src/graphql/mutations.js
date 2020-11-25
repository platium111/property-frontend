/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const propertiesForCustomer = /* GraphQL */ `
  mutation PropertiesForCustomer(
    $contractId: ID!
    $limit: Int
    $nextToken: String
  ) {
    propertiesForCustomer(
      contractId: $contractId
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
export const batchUpdateCustomerWithChildren = /* GraphQL */ `
  mutation BatchUpdateCustomerWithChildren(
    $input: CustomerInputData
    $nextToken: String
  ) {
    batchUpdateCustomerWithChildren(input: $input, nextToken: $nextToken) {
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
export const createProperty = /* GraphQL */ `
  mutation CreateProperty(
    $input: CreatePropertyInput!
    $condition: ModelPropertyConditionInput
  ) {
    createProperty(input: $input, condition: $condition) {
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
export const updateProperty = /* GraphQL */ `
  mutation UpdateProperty(
    $input: UpdatePropertyInput!
    $condition: ModelPropertyConditionInput
  ) {
    updateProperty(input: $input, condition: $condition) {
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
export const deleteProperty = /* GraphQL */ `
  mutation DeleteProperty(
    $input: DeletePropertyInput!
    $condition: ModelPropertyConditionInput
  ) {
    deleteProperty(input: $input, condition: $condition) {
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
export const createRepayment = /* GraphQL */ `
  mutation CreateRepayment(
    $input: CreateRepaymentInput!
    $condition: ModelRepaymentConditionInput
  ) {
    createRepayment(input: $input, condition: $condition) {
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
export const updateRepayment = /* GraphQL */ `
  mutation UpdateRepayment(
    $input: UpdateRepaymentInput!
    $condition: ModelRepaymentConditionInput
  ) {
    updateRepayment(input: $input, condition: $condition) {
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
export const deleteRepayment = /* GraphQL */ `
  mutation DeleteRepayment(
    $input: DeleteRepaymentInput!
    $condition: ModelRepaymentConditionInput
  ) {
    deleteRepayment(input: $input, condition: $condition) {
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
export const createCustomer = /* GraphQL */ `
  mutation CreateCustomer(
    $input: CreateCustomerInput!
    $condition: ModelCustomerConditionInput
  ) {
    createCustomer(input: $input, condition: $condition) {
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
export const updateCustomer = /* GraphQL */ `
  mutation UpdateCustomer(
    $input: UpdateCustomerInput!
    $condition: ModelCustomerConditionInput
  ) {
    updateCustomer(input: $input, condition: $condition) {
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
export const deleteCustomer = /* GraphQL */ `
  mutation DeleteCustomer(
    $input: DeleteCustomerInput!
    $condition: ModelCustomerConditionInput
  ) {
    deleteCustomer(input: $input, condition: $condition) {
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
export const createContract = /* GraphQL */ `
  mutation CreateContract(
    $input: CreateContractInput!
    $condition: ModelContractConditionInput
  ) {
    createContract(input: $input, condition: $condition) {
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
export const updateContract = /* GraphQL */ `
  mutation UpdateContract(
    $input: UpdateContractInput!
    $condition: ModelContractConditionInput
  ) {
    updateContract(input: $input, condition: $condition) {
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
export const deleteContract = /* GraphQL */ `
  mutation DeleteContract(
    $input: DeleteContractInput!
    $condition: ModelContractConditionInput
  ) {
    deleteContract(input: $input, condition: $condition) {
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
export const createAddress = /* GraphQL */ `
  mutation CreateAddress(
    $input: CreateAddressInput!
    $condition: ModelAddressConditionInput
  ) {
    createAddress(input: $input, condition: $condition) {
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
export const updateAddress = /* GraphQL */ `
  mutation UpdateAddress(
    $input: UpdateAddressInput!
    $condition: ModelAddressConditionInput
  ) {
    updateAddress(input: $input, condition: $condition) {
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
export const deleteAddress = /* GraphQL */ `
  mutation DeleteAddress(
    $input: DeleteAddressInput!
    $condition: ModelAddressConditionInput
  ) {
    deleteAddress(input: $input, condition: $condition) {
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
