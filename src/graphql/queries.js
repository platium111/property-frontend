/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getProperty = /* GraphQL */ `
  query GetProperty($id: ID!) {
    getProperty(id: $id) {
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
      frameNumber
      machineNumber
      plateNumber
      dateBorrow
      customer {
        id
        firstName
        lastName
        middleName
        fatherName
        motherName
        phoneNumber
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
          createdAt
          updatedAt
        }
        loanType
        propertyInfo {
          nextToken
        }
        studentInfo {
          id
          cardNumber
          universityName
          gpa
          graduationYear
          createdAt
          updatedAt
        }
        dateBorrow
        borrowPurpose
        datePay
        identityCardNo
        issueDate
        note
        customerImages
        createdAt
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
        description
        imageUrls
        type
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
        customer {
          id
          firstName
          lastName
          middleName
          fatherName
          motherName
          phoneNumber
          dateOfBirth
          motherPhone
          fatherPhone
          loanType
          dateBorrow
          borrowPurpose
          datePay
          identityCardNo
          issueDate
          note
          customerImages
          createdAt
          updatedAt
        }
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
      fatherName
      motherName
      phoneNumber
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
        customer {
          id
          firstName
          lastName
          middleName
          fatherName
          motherName
          phoneNumber
          dateOfBirth
          motherPhone
          fatherPhone
          loanType
          dateBorrow
          borrowPurpose
          datePay
          identityCardNo
          issueDate
          note
          customerImages
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      loanType
      propertyInfo {
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
          frameNumber
          machineNumber
          plateNumber
          dateBorrow
          createdAt
          updatedAt
        }
        nextToken
      }
      studentInfo {
        id
        cardNumber
        universityName
        gpa
        graduationYear
        customer {
          id
          firstName
          lastName
          middleName
          fatherName
          motherName
          phoneNumber
          dateOfBirth
          motherPhone
          fatherPhone
          loanType
          dateBorrow
          borrowPurpose
          datePay
          identityCardNo
          issueDate
          note
          customerImages
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      dateBorrow
      borrowPurpose
      datePay
      identityCardNo
      issueDate
      note
      customerImages
      createdAt
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
        fatherName
        motherName
        phoneNumber
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
          createdAt
          updatedAt
        }
        loanType
        propertyInfo {
          nextToken
        }
        studentInfo {
          id
          cardNumber
          universityName
          gpa
          graduationYear
          createdAt
          updatedAt
        }
        dateBorrow
        borrowPurpose
        datePay
        identityCardNo
        issueDate
        note
        customerImages
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getStudentCard = /* GraphQL */ `
  query GetStudentCard($id: ID!) {
    getStudentCard(id: $id) {
      id
      cardNumber
      universityName
      gpa
      graduationYear
      customer {
        id
        firstName
        lastName
        middleName
        fatherName
        motherName
        phoneNumber
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
          createdAt
          updatedAt
        }
        loanType
        propertyInfo {
          nextToken
        }
        studentInfo {
          id
          cardNumber
          universityName
          gpa
          graduationYear
          createdAt
          updatedAt
        }
        dateBorrow
        borrowPurpose
        datePay
        identityCardNo
        issueDate
        note
        customerImages
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listStudentCards = /* GraphQL */ `
  query ListStudentCards(
    $filter: ModelStudentCardFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStudentCards(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        cardNumber
        universityName
        gpa
        graduationYear
        customer {
          id
          firstName
          lastName
          middleName
          fatherName
          motherName
          phoneNumber
          dateOfBirth
          motherPhone
          fatherPhone
          loanType
          dateBorrow
          borrowPurpose
          datePay
          identityCardNo
          issueDate
          note
          customerImages
          createdAt
          updatedAt
        }
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
      district
      province
      lane
      alley
      customer {
        id
        firstName
        lastName
        middleName
        fatherName
        motherName
        phoneNumber
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
          createdAt
          updatedAt
        }
        loanType
        propertyInfo {
          nextToken
        }
        studentInfo {
          id
          cardNumber
          universityName
          gpa
          graduationYear
          createdAt
          updatedAt
        }
        dateBorrow
        borrowPurpose
        datePay
        identityCardNo
        issueDate
        note
        customerImages
        createdAt
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
        district
        province
        lane
        alley
        customer {
          id
          firstName
          lastName
          middleName
          fatherName
          motherName
          phoneNumber
          dateOfBirth
          motherPhone
          fatherPhone
          loanType
          dateBorrow
          borrowPurpose
          datePay
          identityCardNo
          issueDate
          note
          customerImages
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
