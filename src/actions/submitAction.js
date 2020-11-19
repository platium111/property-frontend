import {
  createCustomer,
  updateCustomer,
  createAddress,
  updateAddress,
  createProperty,
  updateProperty,
  createContract,
  batchUpdateCustomerWithChildren,
} from '../graphql/mutations';
import { getCustomer } from '../graphql/queries';
import { create, update, get } from '../services/generic/index';
import { CUSTOMER_STATUS, LOAN_TYPE } from '../_constants';
import _ from 'lodash';

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
    dateBorrow,
    datePay,
    borrowPurpose,
    note,
    properties,
    // customer data
    firstName,
    lastName,
    middleName,
    dateOfBirth,
    identityCardNo,
    issueDate,
  } = values;

  console.log('all values', values)
  // testing new feauture batch mutation
  // const mockCustomer = { id: '999999999', firstName: 'clark' };
  // const mockAddress = { id: '88888888', homeNumber: '36 fran street' };
  // const responseTest = await create({ customer: mockCustomer, address: mockAddress }, batchUpdateCustomerWithChildren);
  // console.log('clarkResponse', responseTest);

  // customer -> customerAddressId
  const customerRespond =
    actionType === CUSTOMER_STATUS.new
      ? await create(
          _.omitBy(
            {
              firstName,
              lastName,
              middleName,
              dateOfBirth,
              identityCardNo, // check
              issueDate, // check
              phoneNumbers: [phoneNumber, otherPhoneNumber],
              id,
            },
            _.isEmpty
          ),
          createCustomer
        )
      : await update(
          _.omitBy(
            {
              firstName,
              lastName,
              middleName,
              dateOfBirth,
              identityCardNo,
              issueDate,
              phoneNumbers: [phoneNumber, otherPhoneNumber],
              dateBorrow,
              datePay,
              id,
              // customerAddressId: customerAddressId,
            },
            _.isEmpty
          ),
          updateCustomer
        );
  // address
  const customerIdResponse = CUSTOMER_STATUS.new ? customerRespond?.data?.createCustomer?.id : customerRespond?.data?.updateCustomer?.id;
  const address = _.omitBy(
    {
      homeNumber,
      street,
      hamlet,
      village,
      lane,
      alley,
      district,
      province,
      city,
      id: values.addressId,
      addressCustomerId: customerIdResponse,
    },
    _.isUndefined
  );

  const addressActionResult =
    actionType === CUSTOMER_STATUS.new ? await create(address, createAddress) : await update(address, updateAddress);
  const customerAddressId =
    actionType === CUSTOMER_STATUS.new ? addressActionResult?.data?.createAddress?.id : addressActionResult?.data?.updateAddress?.id;
  // * need to update address Id to customer table
  if (customerAddressId) {
    await update(
      _.omitBy(
        {
          id: customerIdResponse,
          customerAddressId,
        },
        _.isEmpty
      ),
      updateCustomer
    );
  }
  const test = await get(customerRespond?.data?.createCustomer?.id, getCustomer);
  // contract
  const LOAN_STATUS = {
    DANG_VAY: 'DANG_VAY',
    DA_TRA: 'DA_TRA',
    QUA_HAN: 'QUA_HAN',
  };

  const contractResponse =
    actionType === CUSTOMER_STATUS.new
      ? await create(
          _.omitBy(
            { loanStatus: LOAN_STATUS.DANG_VAY, dateBorrow, datePay, borrowPurpose, note, contractCustomerId: customerIdResponse },
            _.isEmpty
          ),
          createContract
        )
      : null;
  const contractIdResponse =
    actionType === CUSTOMER_STATUS.new ? contractResponse?.data?.createContract?.id : contractResponse?.data?.updateContract?.id;
  // student card & property -> propertyCustomerId
  if (contractIdResponse) {
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
          id: propertyId,
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
                  propertyContractId: contractIdResponse,
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
                  propertyContractId: contractIdResponse,
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
                  propertyContractId: contractIdResponse,
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
                  propertyContractId: contractIdResponse,
                },
                updateProperty
              );
        }
      })
    );
  }

  // after submit done, need to setData for customer for displaying message
  const result = await get(customerIdResponse, getCustomer);
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
