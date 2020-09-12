export const searchListProperty = `
  query searchListProperty($searchQuery: String) {
    listPropertys(filter: { itemName: { beginsWith: $searchQuery } }) {
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
        dateBorrow
        frameNumber
        machineNumber
        plateNumber
      }
    }
  }
`

export const searchListCustomer = `
  query searchListCustomers($searchQuery: String) {
    listCustomers(filter: { firstName: { beginsWith: $searchQuery } }) {
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
        }
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
          }
        }
        studentInfo {
          id
          cardNumber
          universityName
          gpa
          graduationYear
        }
        loanType
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
`
