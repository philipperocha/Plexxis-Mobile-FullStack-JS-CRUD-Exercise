import React from 'react';

class App extends React.Component {
  state = {
    employees: []
  }
  
  componentWillMount = () => {
    fetch('https://localhost:5001/api/employee')
    //fetch('https://localhost:44368/api/employee')
      .then(response => response.json())
      .then(employees => this.setState({ employees }))
  }

  render() {
    const {
      employees
    } = this.state;

    console.log(this.state);

    return (
      <div className="App">
        <h1>Plexxis Employees</h1>
        {
          employees.map(employee => (
            <div key={employee.id}>
              {
                Object.keys(employee).map(key => 
                  <span key={key}>
                    { key }:
                    { employee[key] } 
                  </span>
                )
              }
            </div>
          ))
        }
      </div>
    );
  }
}

export default App;
