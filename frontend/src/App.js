import React from 'react';
import { CustomNavbar } from './components/CustomNavbar';
import Crud from './screens/Crud';

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
      <div>
        <CustomNavbar title={'Plexxis Software'}/>
        <Crud employees={employees}/>
      </div>
    );
  }
}

export default App;
