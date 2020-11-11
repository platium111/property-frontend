import React from 'react';
import { useRowSelect, useTable } from 'react-table';
import { StyledButtonGroupInRow } from '../_foundation/styles/index.style';
import { StyledTable } from './index.style';
import { Form, Formik } from 'formik';
import FieldButton from '../Button';
import columnsTable from './columns';
import { Typography } from 'antd';
import { useState } from 'react';
import Customer from '../../forms/CustomerManagement/Customer';
import { remove } from '../../services/generic';
import { deleteCustomer } from '../../graphql/mutations';
import { searchCustomerAction } from '../../actions';
import { CUSTOMER_STATUS } from '../../_constants';

const { Title } = Typography;

export default function CustomerTable({ searchText, setDisplayType, displayType }) {
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
            setCustomerSelected({ ...originalData, status: CUSTOMER_STATUS.edit });
            setDisplayType && setDisplayType('edit');
          }

          function onRepayment() {
            setDisplayType && setDisplayType('repayment');
          }

          function onPayItem() {
            return null;
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
                        <FieldButton type="primary" name="edit" icon="EditOutlined" onClick={onEdit} />
                        <FieldButton type="primary" name="repayment" icon="FileAddOutlined" onClick={onRepayment} />
                        <FieldButton
                          type="primary"
                          name="payItem"
                          icon="FileExcelOutlined"
                          onClick={onPayItem}
                          iconStyle={{ color: 'red' }}
                        />
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
    searchCustomerAction(searchText, setDataTable);
  }, [searchText]);

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
      {customerSelected && displayType === 'edit' && <Customer {...customerSelected} />}
    </div>
  );
}
