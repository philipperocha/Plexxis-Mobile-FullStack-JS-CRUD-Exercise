import React from 'react';
import ReactTable from 'react-table';
import { Button } from 'react-bootstrap';
import 'react-table/react-table.css';

// Custom Table
export const CustomTable = ({employees, showEditForm, setEmployee, deleteEmployee, loading}) => {
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
        { Header: '', id: 'options',  width: 140, Cell: (cell) => {

            const {id, name, profession, color, city, branch} = cell.row;
            const emp = {id, name, profession, color, city, branch};
            console.log(loading);

            return ( 
              <div>
                <Button variant="info" size="sm" onClick={() => {
                    showEditForm(true);
                    setEmployee(emp);
                  }}
                >
                  Update
                </Button>
                <Button className="del" disabled={loading} variant="danger" size="sm" onClick={() => deleteEmployee(emp.id)}>
                  {loading ? 'Loading...' : 'Delete'}
                </Button>
              </div>
            );
          }
        },
      ]
    }],[]
  );

  return (
    <ReactTable
      className='-striped -highlight'
      data={employees}
      pages={-1} // should default to -1 (which means we don't know how many pages we have)
      loading={false}
      columns={columns}
      defaultPageSize={10}
      style={{ borderColor: '#bfbfbf', borderRadius: '4px', borderStyle: 'rigid' }}
    />
  )
}