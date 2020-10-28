import React, { useEffect } from 'react';
import { useTable, useRowSelect } from 'react-table';
import Styles from './index.style';
import initDataTable from './data';
import columnsTable from './columns';
import { Formik } from 'formik';
import { Typography } from 'antd';
import { StyledButtonGroupInRow } from '../../components/_foundation/styles/index.style';
import { FieldButton } from '../../components';
import { addOneDay } from './utils';

const { Title } = Typography;

const EditableCell = ({
  value: initialValue,
  row: { index, values },
  column: { id },
  updateMyData, // This is a custom function that we supplied to our table instance
  rows,
}) => {
  const newValues = Object.keys(values).reduce((newObj, currentKey) => {
    return values[currentKey] === '' ? { ...newObj, [currentKey]: 0 } : { ...newObj, [currentKey]: values[currentKey] };
  }, {});
  let { nhan, rut, banGiao, xuat, thu, lai, chi, chuyenKhoan, tienMat, doThucTe } = newValues;
  // We need to keep and update the state of the cell normally
  const [value, setValue] = React.useState(initialValue);

  const tienMatValue =
    parseFloat(nhan) +
    parseFloat(banGiao) +
    parseFloat(thu) +
    parseFloat(lai) -
    parseFloat(rut) -
    parseFloat(xuat) -
    parseFloat(chi) -
    parseFloat(chuyenKhoan);

  const doThucTeValue = parseFloat(rows[index - 1]?.values?.doThucTe) + parseFloat(xuat) - parseFloat(thu);
  const banGiaoValue = parseFloat(rows[index - 1]?.values?.tienMat);
  const ngayValue = addOneDay(rows[index - 1]?.values?.ngay);

  // update local values
  useEffect(() => {
    if (index !== 0) {
      switch (id) {
        case 'tienMat':
          setValue(tienMatValue);
          break;
        case 'doThucTe':
          setValue(doThucTeValue);
          break;
        case 'ngay':
          setValue(ngayValue);
          break;
        case 'banGiao':
          setValue(banGiaoValue);
          break;
        default:
          break;
      }
    }
  }, [updateMyData, doThucTeValue, index, tienMatValue, rows, id, nhan, rut, banGiao, xuat, thu, lai, chi, chuyenKhoan, tienMat, doThucTe]);

  // update to table value on tienMat and doThucTe because of not blur on these fields
  useEffect(() => {
    if (id === 'tienMat' && index !== 0) {
      updateMyData(index, id, tienMatValue);
    } else if (id === 'doThucTe' && index !== 0) {
      updateMyData(index, id, doThucTeValue);
    } else if (id === 'banGiao' && index !== 0) {
      updateMyData(index, id, banGiaoValue);
    }
  }, [value]);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  // We'll only update the external data when the input is blurred
  const onBlur = () => {
    updateMyData(index, id, value);
  };

  // If the initialValue is changed external, sync it up with our state
  React.useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  return (id !== 'tienMat' && id !== 'doThucTe' && id !== 'ngay' && id !== 'banGiao') || index === 0 ? (
    <input value={value} onChange={onChange} onBlur={onBlur} style={{ minWidth: 30, width: '100%', maxWidth: 200 }} />
  ) : (
    <p>{value}</p>
  );
};

const defaultColumn = {
  Cell: EditableCell,
};

export default function MonthReport(props) {
  // const data = React.useMemo(() => dataTable, []);
  const [dataTable, setDataTable] = React.useState(initDataTable);
  const data = React.useMemo(() => dataTable, [dataTable]);
  const columns = React.useMemo(() => columnsTable, []);

  const tableInstance = useTable({ columns, data, defaultColumn, updateMyData, myDataTable: data }, useRowSelect, (hooks) => {
    hooks.visibleColumns.push((columns) => [
      ...columns,
      {
        Header: 'Sửa/Xóa',
        id: 'actions',
        accessor: 'actions',
        Cell: ({ row, data, ...restProps }) => {
          async function onAdd() {
            // change data in local table and api
            const newDataTable = [
              ...data,
              {
                ngay: addOneDay(data[data.length - 1].ngay),
                nhan: '',
                rut: '',
                banGiao: '',
                xuat: '',
                thu: '',
                lai: '',
                chi: '',
                chuyenKhoan: '',
                tienMat: '',
                doThucTe: '',
              },
            ];
            setDataTable(newDataTable);
          }
          return (
            <>
              <Formik>
                {(props) => {
                  return (
                    <StyledButtonGroupInRow>
                      <FieldButton type="primary" name="add" icon="PlusOutlined" onClick={onAdd} />
                    </StyledButtonGroupInRow>
                  );
                }}
              </Formik>
            </>
          );
        },
      },
    ]);
  });
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow, footerGroups } = tableInstance;

  function updateMyData(rowIndex, columnId, value) {
    // We also turn on the flag to not reset the page
    setDataTable((old) =>
      old.map((row, index) => {
        if (index === rowIndex) {
          return {
            ...old[rowIndex],
            [columnId]: value,
          };
        }
        return row;
      })
    );
  }

  return (
    <div>
      <Title
        style={{
          margin: '2px auto',
          textAlign: 'center',
          marginBottom: '20px',
        }}
      >
        Bản kê khai tháng
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
          <tfoot>
            {footerGroups.map((group) => (
              <tr {...group.getFooterGroupProps()}>
                {group.headers.map((column) => (
                  <td {...column.getFooterProps()}>{column.render('Footer')}</td>
                ))}
              </tr>
            ))}
          </tfoot>
        </table>
      </Styles>
    </div>
  );
}
