import React from 'react';
import { useRowSelect, useTable } from 'react-table';
import { StyledButtonGroupInRow } from '../_foundation/styles/index.style';
import { StyledTable } from './index.style';
// import dataTable from "./data";
import { Form, Formik } from 'formik';
import FieldButton from '../Button';
import columnsTable from './columns';
import { Typography } from 'antd';
import { listCustomersAndProperties } from '../../graphql/customQuery';
import { list } from '../../services/generic';
import { useState } from 'react';
import { tranformDbData } from '../../_utils';
import { LOAN_TYPE } from '../../_constants';
import Customer from '../../forms/CustomerManagement/Customer';
import { remove } from '../../services/generic';
import { deleteCustomer } from '../../graphql/mutations';
const { Title } = Typography;

export default function CustomerTable({ searchText }) {
  const [customerSelected, setCustomerSelected] = useState();
  const [dataTable, setDataTable] = useState([]);
  const data = React.useMemo(() => dataTable, [dataTable]);
  const columns = React.useMemo(() => columnsTable, []);
  const tableInstance = useTable({ columns, data }, useRowSelect, (hooks) => {
    hooks.visibleColumns.push((columns) => [
      ...columns,
      {
        Header: 'Sửa/Xóa',
        id: 'actions',
        accessor: 'actions',
        Cell: ({ row, data, ...restProps }) => {
          const {
            original: { originalData },
          } = row;

          function onEdit() {
            setCustomerSelected(originalData);
          }

          async function onDelete() {
            // change data in local table and api
            const { id: customerId } = originalData;
            const newDataTable = data.filter((item) => item.id !== customerId);

            setDataTable(newDataTable);
            await remove({ id: customerId }, deleteCustomer);
          }
          return (
            <>
              <Formik>
                {(props) => {
                  return (
                    <Form>
                      <StyledButtonGroupInRow>
                        {/* <Link to="/edit-customer"> */}
                        <FieldButton type="primary" name="edit" icon="EditOutlined" onClick={onEdit} />
                        {/* </Link> */}
                        <FieldButton type="primary" danger name="delete" icon="ScissorOutlined" onClick={onDelete} />
                      </StyledButtonGroupInRow>
                    </Form>
                  );
                }}
              </Formik>
            </>
          );
        },
      },
    ]);
  });
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = tableInstance;

  React.useEffect(() => {
    const fetchData = async () => {
      const result = await list({ firstName: { contains: searchText } }, listCustomersAndProperties);
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
          id,
          name: `${firstName} ${middleName} ${lastName}`,
          phoneNumbers,
          dateOfBirth,
          address: transformAddress,
          loanTypeSummary: `Xe : ${transformLoanTypeSummary.xe} | Giấy tờ: ${transformLoanTypeSummary.giayTo}`,
          dateBorrow,
          datePay,
          identityCardNo,
          originalData: customer,
        };
      });
      setDataTable(transformDataToTable);
    };
    fetchData();
  }, [searchText]);

  console.log('customerSelected', customerSelected);
  return (
    // <Router>
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
      <StyledTable>
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
      </StyledTable>
      <Customer {...customerSelected} />
    </div>
  );
}
