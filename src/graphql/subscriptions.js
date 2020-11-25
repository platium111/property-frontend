/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateProperty = /* GraphQL */ `
  subscription OnCreateProperty {
    onCreateProperty {
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
export const onUpdateProperty = /* GraphQL */ `
  subscription OnUpdateProperty {
    onUpdateProperty {
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
export const onDeleteProperty = /* GraphQL */ `
  subscription OnDeleteProperty {
    onDeleteProperty {
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
export const onCreateRepayment = /* GraphQL */ `
  subscription OnCreateRepayment {
    onCreateRepayment {
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
export const onUpdateRepayment = /* GraphQL */ `
  subscription OnUpdateRepayment {
    onUpdateRepayment {
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
export const onDeleteRepayment = /* GraphQL */ `
  subscription OnDeleteRepayment {
    onDeleteRepayment {
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
export const onCreateCustomer = /* GraphQL */ `
  subscription OnCreateCustomer {
    onCreateCustomer {
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
export const onUpdateCustomer = /* GraphQL */ `
  subscription OnUpdateCustomer {
    onUpdateCustomer {
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
export const onDeleteCustomer = /* GraphQL */ `
  subscription OnDeleteCustomer {
    onDeleteCustomer {
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
export const onCreateContract = /* GraphQL */ `
  subscription OnCreateContract {
    onCreateContract {
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
export const onUpdateContract = /* GraphQL */ `
  subscription OnUpdateContract {
    onUpdateContract {
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
export const onDeleteContract = /* GraphQL */ `
  subscription OnDeleteContract {
    onDeleteContract {
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
export const onCreateAddress = /* GraphQL */ `
  subscription OnCreateAddress {
    onCreateAddress {
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
export const onUpdateAddress = /* GraphQL */ `
  subscription OnUpdateAddress {
    onUpdateAddress {
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
export const onDeleteAddress = /* GraphQL */ `
  subscription OnDeleteAddress {
    onDeleteAddress {
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
