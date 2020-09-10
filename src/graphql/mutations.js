/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createProperty = /* GraphQL */ `
  mutation CreateProperty(
    $input: CreatePropertyInput!
    $condition: ModelPropertyConditionInput
  ) {
    createProperty(input: $input, condition: $condition) {
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
export const updateProperty = /* GraphQL */ `
  mutation UpdateProperty(
    $input: UpdatePropertyInput!
    $condition: ModelPropertyConditionInput
  ) {
    updateProperty(input: $input, condition: $condition) {
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
export const deleteProperty = /* GraphQL */ `
  mutation DeleteProperty(
    $input: DeletePropertyInput!
    $condition: ModelPropertyConditionInput
  ) {
    deleteProperty(input: $input, condition: $condition) {
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
export const createStudentCard = /* GraphQL */ `
  mutation CreateStudentCard(
    $input: CreateStudentCardInput!
    $condition: ModelStudentCardConditionInput
  ) {
    createStudentCard(input: $input, condition: $condition) {
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
export const updateStudentCard = /* GraphQL */ `
  mutation UpdateStudentCard(
    $input: UpdateStudentCardInput!
    $condition: ModelStudentCardConditionInput
  ) {
    updateStudentCard(input: $input, condition: $condition) {
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
export const deleteStudentCard = /* GraphQL */ `
  mutation DeleteStudentCard(
    $input: DeleteStudentCardInput!
    $condition: ModelStudentCardConditionInput
  ) {
    deleteStudentCard(input: $input, condition: $condition) {
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
export const createAddress = /* GraphQL */ `
  mutation CreateAddress(
    $input: CreateAddressInput!
    $condition: ModelAddressConditionInput
  ) {
    createAddress(input: $input, condition: $condition) {
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
export const updateAddress = /* GraphQL */ `
  mutation UpdateAddress(
    $input: UpdateAddressInput!
    $condition: ModelAddressConditionInput
  ) {
    updateAddress(input: $input, condition: $condition) {
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
export const deleteAddress = /* GraphQL */ `
  mutation DeleteAddress(
    $input: DeleteAddressInput!
    $condition: ModelAddressConditionInput
  ) {
    deleteAddress(input: $input, condition: $condition) {
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
