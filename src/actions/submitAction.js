import { createCustomer, updateCustomer, createAddress, createProperty } from '../graphql/mutations';
import { getCustomer } from '../graphql/queries';
import { create, update, get } from '../services/generic/index';
import { CUSTOMER_STATUS, LOAN_TYPE } from '../_constants';

export default async function ({ setSubmitting, values, status, setCustomerSubmited }) {
  const {
    id,
    otherPhoneNumber,
    phoneNumber,
    homeNumber,
    street,
    hamlet,
    village,
    district,
    province,
    lane,
    alley,
    city,
    imageUrls,
    userId,
    year,
    customerName,
    itemName,
    price,
    color,
    frameNumber,
    machineNumber,
    plateNumber,
    dateBorrow,
    datePay,
    cardNumber,
    properties,
    ...restValues
  } = values;
  const address = { homeNumber, street, hamlet, village, lane, alley, district, province, city };

  console.log('--onSubmit-->', values, status);
  // ! funny thing is onFileUpload -> set changed in fileUploaded but cannot get immediately, it rerender after done
  // let filesUploaded = (await onFileUpload()) || imagesUrlProps
  switch (status) {
    case CUSTOMER_STATUS.new:
      // address
      const {
        data: {
          createAddress: { id: customerAddressId },
        },
      } = await create(address, createAddress);

      // customer -> customerAddressId
      const customerRespond = await create(
        {
          ...restValues,
          phoneNumbers: [phoneNumber, otherPhoneNumber],
          dateBorrow,
          datePay,
          addressId: customerAddressId,
          // imageUrls: filesUploaded || [],
        },
        createCustomer
      );
      // student card & property -> propertyCustomerId
      await Promise.all(
        properties.map(async (item) => {
          const {
            cardNumber,
            universityName,
            gpa,
            graduationYear,
            loanType,
            imageUrls,
            userId,
            year,
            customerName,
            itemName,
            price,
            color,
            frameNumber,
            machineNumber,
            plateNumber,
            interest,
            fatherName,
            fatherPhone,
            motherName,
            motherPhone,
            description,
          } = item;
          if (loanType === LOAN_TYPE.giayTo) {
            // get result | studentCardRespond?.data?.createProperty?.id
            await create(
              {
                itemName,
                cardNumber,
                universityName,
                gpa,
                graduationYear,
                fatherName,
                fatherPhone,
                motherName,
                motherPhone,
                interest,
                loanType,
                dateBorrow,
                description,
                price,
                customerId: customerRespond.data.createCustomer.id,
              },
              createProperty
            );
          } else if (loanType === LOAN_TYPE.xe) {
            await create(
              {
                loanType,
                color,
                year,
                frameNumber,
                machineNumber,
                plateNumber,
                itemName,
                price,
                dateBorrow,
                description,
                interest,
                imageUrls,
                userId,
                customerName,
                customerId: customerRespond.data.createCustomer.id,
              },
              createProperty
            );
          }
        })
      );
      // after submit done, need to setData for customer for displaying message
      const result = await get(customerRespond.data.createCustomer.id, getCustomer);
      if (result?.data?.getCustomer) {
        setCustomerSubmited(result?.data?.getCustomer);
      }
      break;
    case CUSTOMER_STATUS.edit:
      await update(
        {
          ...values,
          id: id,
        },
        updateCustomer
      );
      break;
    default:
      break;
  }
  setSubmitting(false);
}
