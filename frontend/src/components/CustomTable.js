import React from 'react';
import ReactTable from 'react-table';
import { Button } from 'react-bootstrap';
import 'react-table/react-table.css';

export const CustomTable = ({employees, showEditForm}) => {
    const columns = React.useMemo(() => [{
      Header: 'Plexxis Employees',
      columns: [
        { Header: 'ID', accessor: 'id', minWidth: 30, maxWidth: 60 },
        { Header: 'Name', accessor: 'name' },
        { Header: 'Code', accessor: 'code', show: false },
        { Header: 'Profession', accessor: 'profession' },
        { Header: 'Color', accessor: 'color', minWidth: 60, maxWidth: 80 },
        { Header: 'City', accessor: 'city' },
        { Header: 'Branch', accessor: 'branch' },
        { Header: 'Assigned', accessor: 'assigned', show: false },
        { Header: '', id: 'options',  minWidth: 120, Cell: ({ row }) => {
            return ( 
              <div>
                <Button
                  variant="info"
                  size="sm"
                  onClick={() => {
                    showEditForm(true);
                    console.log("Updting: " + row);
                  }}
                >
                  Update
                </Button>
                <Button className="del" variant="danger" size="sm" onClick={() => alert("Updting: " + row.index)}>
                  Delete
                </Button>
              </div>
            );
          }
        },
      ]
    }], []
  );

  return (
    <ReactTable
      className='-striped -highlight'
      data={employees} // should default to []
      pages={-1} // should default to -1 (which means we don't know how many pages we have)
      loading={false}
      columns={columns}
      defaultPageSize={10}
      style={{ borderColor: '#bfbfbf', borderRadius: '4px', borderStyle: 'rigid' }}
    />
  )
}