import React from 'react';
import { useTable } from 'react-table';
import Styles from './index.style';
// import dataTable from "./data";
import columnsTable from './columns';
import { Typography } from 'antd';
import { listCustomersAndProperties } from '../../graphql/customQuery';
import { list } from '../../services/generic';
import { useState } from 'react';
import { tranformDbData } from '../../_utils';
import { LOAN_TYPE } from '../../_constants';

const { Title } = Typography;

export default function CustomerTable(props) {
  const [dataTable, setDataTable] = useState([]);
  const data = React.useMemo(() => dataTable, [dataTable]);
  const columns = React.useMemo(() => columnsTable, []);
  const tableInstance = useTable({ columns, data });
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = tableInstance;

  React.useEffect(() => {
    const fetchData = async () => {
      const result = await list(null, listCustomersAndProperties);
      debugger;
      const customers = result?.data?.listCustomers?.items || [];
      console.log('fetch list customer data', customers);
      const transformDataToTable = customers.map((customer) => {
        const {
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
        debugger;
        const transformAddress = tranformDbData(address, 'address')
          ?.filter((item) => !!item)
          .join(', ');
        const transformLoanTypeSummary =
          properties.items &&
          properties.items.reduce(
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
          name: `${firstName} ${middleName} ${lastName}`,
          phoneNumbers,
          dateOfBirth,
          address: transformAddress,
          loanTypeSummary: `Xe : ${transformLoanTypeSummary.xe} | Giấy tờ: ${transformLoanTypeSummary.giayTo}`,
          dateBorrow,
          datePay,
          identityCardNo,
        };
      });
      setDataTable(transformDataToTable);
    };
    fetchData();
  }, []);

  return (
    <div>
      <Title
        style={{
          margin: '2px auto',
          textAlign: 'center',
          marginBottom: '20px',
        }}
      >
        Bảng khách hàng
      </Title>
      <Styles>
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((group) => (
              <tr {...group.getHeaderGroupProps()}>
                {group.headers.map((column) => (
                  <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row, i) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </Styles>
    </div>
  );
}
