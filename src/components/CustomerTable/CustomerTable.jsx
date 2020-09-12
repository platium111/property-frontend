import React from "react";
import { useTable } from "react-table";
import Styles from "./index.style";
import dataTable from "./data";
import columnsTable from "./columns";
import { Typography } from "antd";

const { Title } = Typography;

export default function CustomerTable(props) {
  const data = React.useMemo(() => dataTable, []);

  const columns = React.useMemo(() => columnsTable, []);
  const tableInstance = useTable({ columns, data });
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = tableInstance;

  return (
    <div>
      <Title
        style={{
          margin: "2px auto",
          textAlign: "center",
          marginBottom: "20px",
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
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
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
                    return (
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    );
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
