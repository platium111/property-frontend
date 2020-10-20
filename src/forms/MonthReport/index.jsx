import React, { useEffect } from 'react';
import { useTable } from 'react-table';
import Styles from './index.style';
import dataTable from './data';
import columnsTable from './columns';
import { Typography } from 'antd';
import moment from 'moment';
import { GLOBAL_DATE_FORMAT } from '../../_constants';

const { Title } = Typography;

const EditableCell = ({
  value: initialValue,
  row: { index, values },
  column: { id },
  updateMyData, // This is a custom function that we supplied to our table instance
  myDataTable,
  rows,
  ...restProps
}) => {
  const newValues = Object.keys(values).reduce((newObj, currentKey) => {
    return values[currentKey] === '' ? { ...newObj, [currentKey]: 0 } : { ...newObj, [currentKey]: values[currentKey] };
  }, {});
  let { nhan, rut, banGiao, xuat, thu, lai, chi, chuyenKhoan, tienMat, doThucTe } = newValues;
  console.log('newValues', newValues);
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
  // useEffect(() => {
  //   if (id === 'tienMat' && index !== 0) {
  //     setValue(tienMatValue);
  //     // updateMyData(index, id, tienMatValue);
  //   } else if (id === 'doThucTe' && index !== 0) {
  //     setValue(parseFloat(rows[index - 1]?.values?.doThucTe) + parseFloat(xuat) - parseFloat(thu));
  //     // updateMyData(index, id, parseFloat(rows[index - 1]?.values?.doThucTe) + parseFloat(xuat) - parseFloat(thu));
  //   } else if (id === 'ngay' && index !== 0) {
  //     const newDate = moment(rows[index - 1]?.values?.ngay, GLOBAL_DATE_FORMAT)
  //       .add(1, 'days')
  //       .format(GLOBAL_DATE_FORMAT);
  //     setValue(newDate);
  //     // update MyData(index, id, newDate);
  //   }
  // }, [updateMyData, index, rows, id, nhan, rut, banGiao, xuat, thu, lai, chi, chuyenKhoan, tienMat, doThucTe]);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  // We'll only update the external data when the input is blurred
  const onBlur = () => {
    if (index !== 0) {
      updateMyData(index, id, value);
    updateMyData(index, 'tienMatValue', tienMatValue);
      updateMyData(index, 'doThucTe', parseFloat(rows[index - 1]?.values?.doThucTe) + parseFloat(xuat) - parseFloat(thu));
      const newDate = moment(rows[index - 1]?.values?.ngay, GLOBAL_DATE_FORMAT)
        .add(1, 'days')
        .format(GLOBAL_DATE_FORMAT);
      updateMyData(index, 'ngay', newDate);
    }
  };

  // If the initialValue is changed external, sync it up with our state
  React.useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  return (id !== 'tienMat' && id !== 'doThucTe' && id !== 'ngay') || index === 0 ? (
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
  const [data, setData] = React.useState(dataTable);

  const columns = React.useMemo(() => columnsTable, []);
  const tableInstance = useTable({ columns, data, defaultColumn, updateMyData, myDataTable: data });
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow, footerGroups } = tableInstance;

  function updateMyData(rowIndex, columnId, value) {
    // We also turn on the flag to not reset the page
    setData((old) =>
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
