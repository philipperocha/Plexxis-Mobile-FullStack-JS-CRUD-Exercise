import React from 'react';
import { CustomNavbar } from './components/CustomNavbar';
import Crud from './screens/Crud';
import './App.css';

const url = 'https://localhost:5001/api/employee';
//const url = 'https://localhost:44368/api/employee';

class App extends React.Component {
  state = {
    employees: [],
    addFormVisible: false,
    editFormVisible: false,
    currentEmployee: {},
    errorMessage: '',
    successMessage: '',
    loading: false
  }
  
  componentWillMount = () => {
    fetch(url)
      .then(response => response.json())
      .then(employees => this.setState({ employees }));
  }

  showAddEmployeeForm = (value) => this.setState({ addFormVisible: value });

  showEditEmployeeForm = (value) => this.setState({ editFormVisible: value });

  setCurrentEmployee = (emp) => this.setState({ currentEmployee: emp });

  cancelEditEmployee = () => this.setState({ addFormVisible: false, editFormVisible: false, currentEmployee: {} });
  
  onCloseErrorMSG = () => this.setState({errorMessage: ''});
  
  onCloseSuccessMSG = () => this.setState({successMessage: ''});

	handleChange = (event) => {
    //console.log(event);
    this.setState({ currentEmployee: {...this.state.currentEmployee, [event.target.name]: event.target.value} });
  }

  sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
  }

  //Add employee request
  addEmployee = async () => {
    await this.myRequest('POST', url, 'created')
      .then(res => res.json())
      .then(result => {
        if (result && result.id) {
          const updatedEmployees = [...this.state.employees];
          updatedEmployees.push({...this.state.currentEmployee, id: result.id});
          this.setState({employees: updatedEmployees, addFormVisible: false});
        }
        return result; 
      });
  }

  //Update employee request
  updateEmployee = async () => {
    await this.myRequest('PUT', `${url}/${this.state.currentEmployee.id}`, 'updated')
      .then(res => {
        if (res.ok) {
          const index = this.state.employees.findIndex(e => e.id === this.state.currentEmployee.id);
          const updatedEmployees = [...this.state.employees];
          updatedEmployees[index] = this.state.currentEmployee;
          this.setState({employees: updatedEmployees, editFormVisible: false});
        }
        return res;
      });
  }

  //Delete employee request
  deleteEmployee = async (id) => {
    await this.myRequest('DELETE', `${url}/${id}`, 'deleted')
      .then(res => {
        if (res.ok) {
          const index = this.state.employees.findIndex(e => e.id === id);
          const updatedEmployees = [...this.state.employees];
          updatedEmployees.splice(index, 1);
          this.setState({employees: updatedEmployees});
        }
        return res;
      });
  }

  //Custom request method
  myRequest = async (method, url, successMsg) => {
    this.setState({ loading: true });

    console.log(method, url, successMsg);
    //It gives a better experience to the user in case of fast response
    await this.sleep(800);

    const body = (method === 'DELETE') ? {} : 
      { 
        method: method, 
        body: JSON.stringify({...this.state.currentEmployee}), 
        headers: {'Content-Type': 'application/json'}
      };

    return fetch(url, body)
      .then(res => {
        if(res.ok) {
          this.setState({successMessage: `User successfully ${successMsg}!`, loading: false});
          console.log('success => ', res);
          return res;
        } else {
          this.setState({errorMessage: `Request rejected with status ${res.status}`, loading: false});
          throw Error();
        }
      })
      .catch(err => {
        console.log(err);
        this.setState({errorMessage: err.message, loading: false});
        return err;
      });
  }
  
  render() {
    const {
      employees,
      addFormVisible,
      editFormVisible,
      currentEmployee,
      errorMessage,
      successMessage,
      loading
    } = this.state;

    console.log(this.state);

    return (
      <div>
        <CustomNavbar title={'Plexxis Software - FullStack Exercise'}/>
        <Crud
          employees={employees}
          showAddForm={this.showAddEmployeeForm}
          showEditForm={this.showEditEmployeeForm}
          setEmployee={this.setCurrentEmployee}
          addFormVisible={addFormVisible}
          editFormVisible={editFormVisible}
          cancelEditEmployee={this.cancelEditEmployee}
          handleChange={this.handleChange}
          currentEmployee={currentEmployee}
          addEmployee={this.addEmployee}
          updateEmployee={this.updateEmployee}
          deleteEmployee={this.deleteEmployee}
          errorMessage={errorMessage}
          successMessage={successMessage}
          onCloseErrorMSG={this.onCloseErrorMSG}
          onCloseSuccessMSG={this.onCloseSuccessMSG}
          loading={loading}
        />
      </div>
    );
  }
}

export default App;
