import { createCustomer, updateCustomer, createAddress, updateAddress, createProperty, updateProperty } from '../graphql/mutations';
import { getCustomer } from '../graphql/queries';
import { create, update, get } from '../services/generic/index';
import { CUSTOMER_STATUS, LOAN_TYPE } from '../_constants';

async function createOrUpdateCustomer(values, actionType, setCustomerSubmited) {
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
    createdAt,
    updatedAt,
    addressId,
    ...restValues
  } = values;
  
  const address = { homeNumber, street, hamlet, village, lane, alley, district, province, city, id: values.addressId };
  // address
  const addressActionResult =
    actionType === CUSTOMER_STATUS.new ? await create(address, createAddress) : await update(address, updateAddress);
  const customerAddressId =
    actionType === CUSTOMER_STATUS.new ? addressActionResult?.data?.createAddress?.id : addressActionResult?.data?.updateAddress?.id;

  // customer -> customerAddressId
  const customerRespond =
    actionType === CUSTOMER_STATUS.new
      ? await create(
          {
            ...restValues,
            phoneNumbers: [phoneNumber, otherPhoneNumber],
            dateBorrow,
            datePay,
            addressId,
            id,
          },
          createCustomer
        )
      : await update(
          {
            ...restValues,
            phoneNumbers: [phoneNumber, otherPhoneNumber],
            dateBorrow,
            datePay,
            id,
            // createdAt
            addressId: customerAddressId,
          },
          updateCustomer
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
        id: propertyId
      } = item;
      if (loanType === LOAN_TYPE.giayTo) {
        // get result | studentCardRespond?.data?.createProperty?.id
        actionType === CUSTOMER_STATUS.new
          ? await create(
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
            )
          : await update(
              {
                id: propertyId,
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
                customerId: customerRespond.data.updateCustomer.id,
              },
              updateProperty
            );
      } else if (loanType === LOAN_TYPE.xe) {
        actionType === CUSTOMER_STATUS.new
          ? await create(
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
            )
          : await update(
              {
                id: propertyId,
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
                customerId: customerRespond.data.updateCustomer.id,
              },
              updateProperty
            );
      }
    })
  );
  // after submit done, need to setData for customer for displaying message
  const customerIdRespond =
    actionType === CUSTOMER_STATUS.new ? customerRespond.data.createCustomer.id : customerRespond.data.updateCustomer.id;
  const result = await get(customerIdRespond, getCustomer);
  if (result?.data?.getCustomer) {
    setCustomerSubmited(result?.data?.getCustomer);
  }
}

export const submitAction = async ({ setSubmitting, values, status, setCustomerSubmited }) => {
  // ! funny thing is onFileUpload -> set changed in fileUploaded but cannot get immediately, it rerender after done
  // let filesUploaded = (await onFileUpload()) || imagesUrlProps
  switch (status) {
    case CUSTOMER_STATUS.new:
      createOrUpdateCustomer(values, CUSTOMER_STATUS.new, setCustomerSubmited);
      break;
    case CUSTOMER_STATUS.edit:
      createOrUpdateCustomer(values, CUSTOMER_STATUS.edit, setCustomerSubmited);
      break;
    default:
      break;
  }
  setSubmitting(false);
};
