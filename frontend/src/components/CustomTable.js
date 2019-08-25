import React from 'react';
import { useTable, useRowSelect } from 'react-table';
import { TableStyle } from '../styles';

//TableComponent receives data and columns as parameters and then returs a mounted table
const TableComponent = ({ columns, data }) => {
  const {
    getTableProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data }, useRowSelect);

  return (
    <table {...getTableProps()}>
      {/* Head */}
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      {/* Body */}
      <tbody>
        {rows.map((row) =>
          prepareRow(row) || (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return (
                  <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                )
              })}
            </tr>
          )
        )}
      </tbody>
    </table>
  );
}

//CustomTable component defines the columns structure and pass "data" + "columns" to TableComponent via props
export const CustomTable = () => {
  const columns = React.useMemo(() => [{
      Header: 'Employees',
      columns: [
        { Header: 'ID', accessor: 'id' },
        { Header: 'Name', accessor: 'name' },
        { Header: 'Code', accessor: 'code', show: false },
        { Header: 'Profession', accessor: 'profession' },
        { Header: 'Color', accessor: 'color' },
        { Header: 'City', accessor: 'city' },
        { Header: 'Branch', accessor: 'branch' },
        { Header: 'Assigned', accessor: 'assigned', show: false },
        { Header: '', id: 'options', Cell: ({ row }) => {
            return ( 
              <div>
                <input type="submit" value="Update" onClick={() => alert("Updting: " + row.index)} />
                <input type="submit" value="Delete" onClick={() => alert("Deleting: " + row.index)} />
              </div>
            );
          }
        },
      ]
    }], []
  );

  const myJson =
    [
      {
          "id": 1,
          "name": "Philippe Rocha",
          "code": null,
          "profession": "Software Engineer",
          "color": "gray",
          "city": "Toronto, ON",
          "branch": null,
          "assigned": false
      },
      {
          "id": 2,
          "name": "John",
          "code": null,
          "profession": "Driver",
          "color": null,
          "city": "Toronto",
          "branch": null,
          "assigned": true
      },
      {
          "id": 4,
          "name": "Juan Sakai",
          "code": null,
          "profession": "CEO",
          "color": "violet",
          "city": "Etobicoke, ON",
          "branch": null,
          "assigned": false
      },
      {
          "id": 5,
          "name": "Bill",
          "code": null,
          "profession": "Engineer",
          "color": "white",
          "city": "Vancouver, ON",
          "branch": null,
          "assigned": false
      }
    ];

  return (
    <TableStyle>
      <TableComponent columns={columns} data={myJson} />
    </TableStyle>
  )
}
