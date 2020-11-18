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
export const onCreateRepayment = /* GraphQL */ `
  subscription OnCreateRepayment {
    onCreateRepayment {
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
export const onUpdateRepayment = /* GraphQL */ `
  subscription OnUpdateRepayment {
    onUpdateRepayment {
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
export const onDeleteRepayment = /* GraphQL */ `
  subscription OnDeleteRepayment {
    onDeleteRepayment {
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
export const onCreateCustomer = /* GraphQL */ `
  subscription OnCreateCustomer {
    onCreateCustomer {
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
export const onUpdateCustomer = /* GraphQL */ `
  subscription OnUpdateCustomer {
    onUpdateCustomer {
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
export const onDeleteCustomer = /* GraphQL */ `
  subscription OnDeleteCustomer {
    onDeleteCustomer {
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
export const onCreateContract = /* GraphQL */ `
  subscription OnCreateContract {
    onCreateContract {
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
export const onUpdateContract = /* GraphQL */ `
  subscription OnUpdateContract {
    onUpdateContract {
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
export const onDeleteContract = /* GraphQL */ `
  subscription OnDeleteContract {
    onDeleteContract {
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
export const onCreateAddress = /* GraphQL */ `
  subscription OnCreateAddress {
    onCreateAddress {
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
export const onUpdateAddress = /* GraphQL */ `
  subscription OnUpdateAddress {
    onUpdateAddress {
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
export const onDeleteAddress = /* GraphQL */ `
  subscription OnDeleteAddress {
    onDeleteAddress {
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
