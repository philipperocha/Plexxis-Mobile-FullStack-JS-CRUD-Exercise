import React from 'react';
import { CustomNavbar } from './components/CustomNavbar';
import Crud from './screens/Crud';
import './App.css';

class App extends React.Component {
  state = {
    employees: [],
    addFormVisible: false,
    editFormVisible: false
  }
  
  componentWillMount = () => {
    fetch('https://localhost:5001/api/employee')
    //fetch('https://localhost:44368/api/employee')
      .then(response => response.json())
      .then(employees => this.setState({ employees }))
  }

  showAddEmployeeForm = (value) => this.setState({ addFormVisible: value });

  //hideAddEmployeeForm = () => this.setState({ addFormVisible: false });

  showEditEmployeeForm = (value) => this.setState({ editFormVisible: value });

  //hideEditEmployeeForm = () => this.setState({ editFormVisible: false });

  render() {
    const {
      employees
    } = this.state;

    console.log(this.state);

    return (
      <div>
        <CustomNavbar title={'Plexxis Software'}/>
        <Crud
          employees={employees}
          showAddForm={this.showAddEmployeeForm}
          showEditForm={this.showEditEmployeeForm}
        />
      </div>
    );
  }
}

export default App;
