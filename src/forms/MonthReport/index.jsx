import React from "react";
import { useTable } from "react-table";
import Styles from "./index.style";

export default function MonthReport(props) {
  const data = React.useMemo(
    () => [
      {
        col1: "Hello",
        col2: "World",
      },
      {
        col1: "react-table",
        col2: "rocks",
      },
      {
        col1: "whatever",
        col2: "you want",
      },
    ],
    []
  );

  const columns = React.useMemo(
    () => [
      {
        Header: "Ngày",
        accessor: "ngay", // accessor is the "key" in the data
      },
      {
        Header: "Nhận",
        accessor: "nhan",
      },
      {
        Header: "Rút",
        accessor: "rut",
      },
      {
        Header: "Bàn giao",
        accessor: "banGiao",
      },
      {
        Header: "Xuất",
        accessor: "xuat",
      },
      {
        Header: "Thu",
        accessor: "thu",
      },
      {
        Header: "Lãi",
        accessor: "lai",
      },
      {
        Header: "Chi",
        accessor: "chi",
      },
      {
        Header: "Chuyển khoản",
        accessor: "chuyenKhoan",
      },
      {
        Header: "Tiền mặt",
        accessor: "tienMat",
      },
      {
        Header: "Đồ thực tế",
        accessor: "doThucTe",
      },
    ],
    []
  );
  const tableInstance = useTable({ columns, data });
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = tableInstance;

  return (
    <Styles>
      <table {...getTableProps()}>
        <thead>
          {
            // Loop over the header rows
            headerGroups.map((headerGroup) => (
              // Apply the header row props
              <tr {...headerGroup.getHeaderGroupProps()}>
                {
                  // Loop over the headers in each row
                  headerGroup.headers.map((column) => (
                    // Apply the header cell props
                    <th {...column.getHeaderProps()}>
                      {
                        // Render the header
                        column.render("Header")
                      }
                    </th>
                  ))
                }
              </tr>
            ))
          }
        </thead>
        {/* Apply the table body props */}
        <tbody {...getTableBodyProps()}>
          {
            // Loop over the table rows
            rows.map((row) => {
              // Prepare the row for display
              prepareRow(row);
              return (
                // Apply the row props
                <tr {...row.getRowProps()}>
                  {
                    // Loop over the rows cells
                    row.cells.map((cell) => {
                      // Apply the cell props
                      return (
                        <td {...cell.getCellProps()}>
                          {
                            // Render the cell contents
                            cell.render("Cell")
                          }
                        </td>
                      );
                    })
                  }
                </tr>
              );
            })
          }
        </tbody>
      </table>
    </Styles>
  );
}
