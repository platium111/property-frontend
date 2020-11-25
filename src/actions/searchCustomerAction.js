import { listCustomersAndProperties } from '../graphql/customQuery';
import { list } from '../services/generic';
import { tranformDbData } from '../_utils';
import { LOAN_TYPE } from '../_constants';

export const searchCustomerAction = async (searchText, updateStateFn) => {
  const filter = searchText ? { firstName: { contains: searchText.toLowerCase() } } : null;
  const result = await list(filter, listCustomersAndProperties);
  const customers = result?.data?.listCustomers?.items || [];
  console.log('fetch list customer data', customers);
  const transformDataToTable = customers.map((customer) => {
    const {
      id,
      firstName,
      middleName,
      lastName,
      phoneNumbers,
      dateOfBirth,
      address,
      dateBorrow,
      datePay,
      properties,
      identityCardNo,
    } = customer;

    const transformAddress = tranformDbData(address, 'address')
      ?.filter((item) => !!item)
      .join(', ');
    const transformLoanTypeSummary = properties?.items?.reduce(
      (totalObj, currentProperty) => {
        if (currentProperty.loanType === LOAN_TYPE.xe) {
          return {
            ...totalObj,
            [LOAN_TYPE.xe]: Number(totalObj[LOAN_TYPE.xe]) + 1,
          };
        } else {
          return {
            ...totalObj,
            [LOAN_TYPE.giayTo]: Number(totalObj[LOAN_TYPE.giayTo]) + 1,
          };
        }
      },
      { [LOAN_TYPE.xe]: 0, [LOAN_TYPE.giayTo]: 0 }
    );
    console.log('loantypesum', transformLoanTypeSummary);
    return {
      id,
      name: `${firstName} ${middleName} ${lastName}`,
      phoneNumbers,
      dateOfBirth,
      address: transformAddress,
      loanTypeSummary: `Xe : ${transformLoanTypeSummary?.xe} | Giấy tờ: ${transformLoanTypeSummary?.giayTo}`,
      dateBorrow,
      datePay,
      identityCardNo,
      originalData: customer,
    };
  });

  if (updateStateFn) {
    updateStateFn(transformDataToTable);
  }
  return transformDataToTable;
};
