/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateProperty = /* GraphQL */ `
  subscription OnCreateProperty {
    onCreateProperty {
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
  }
`;
export const onUpdateProperty = /* GraphQL */ `
  subscription OnUpdateProperty {
    onUpdateProperty {
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
  }
`;
export const onDeleteProperty = /* GraphQL */ `
  subscription OnDeleteProperty {
    onDeleteProperty {
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
  }
`;
export const onCreateCustomer = /* GraphQL */ `
  subscription OnCreateCustomer {
    onCreateCustomer {
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
  }
`;
export const onUpdateCustomer = /* GraphQL */ `
  subscription OnUpdateCustomer {
    onUpdateCustomer {
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
  }
`;
export const onDeleteCustomer = /* GraphQL */ `
  subscription OnDeleteCustomer {
    onDeleteCustomer {
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
  }
`;
export const onCreateStudentCard = /* GraphQL */ `
  subscription OnCreateStudentCard {
    onCreateStudentCard {
      id
      cardNumber
      universityName
      gpa
      graduationYear
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateStudentCard = /* GraphQL */ `
  subscription OnUpdateStudentCard {
    onUpdateStudentCard {
      id
      cardNumber
      universityName
      gpa
      graduationYear
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteStudentCard = /* GraphQL */ `
  subscription OnDeleteStudentCard {
    onDeleteStudentCard {
      id
      cardNumber
      universityName
      gpa
      graduationYear
      createdAt
      updatedAt
    }
  }
`;
export const onCreateAddress = /* GraphQL */ `
  subscription OnCreateAddress {
    onCreateAddress {
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
  }
`;
export const onUpdateAddress = /* GraphQL */ `
  subscription OnUpdateAddress {
    onUpdateAddress {
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
  }
`;
export const onDeleteAddress = /* GraphQL */ `
  subscription OnDeleteAddress {
    onDeleteAddress {
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
  }
`;
