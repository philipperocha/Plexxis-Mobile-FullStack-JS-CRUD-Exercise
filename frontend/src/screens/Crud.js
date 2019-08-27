import React, { Component } from 'react';
import { Container, Row, Col, Image, Button, Form, Card, Alert } from 'react-bootstrap';
import { CustomTable } from '../components/CustomTable';
import './Crud.css';

const cities = ['Toronto','Brampton','Missisauga','Vaughan','Etobicoke','Scarborough','Makham','Richmond Hill'];
const colors = ['Blue','Red','Green','Yellow','Purple','Black','Gray','Orange']

// Error Message
const ErrMessage = ({errorMSG, onCloseErrorMSG}) => {
  if (errorMSG && (errorMSG !== '')) {
    return (
        <Alert variant='danger' onClose={onCloseErrorMSG} dismissible>
          <Alert.Heading>Error!</Alert.Heading>
          <p>
            {errorMSG}
          </p>
        </Alert>
    );
  }
  
  return null;
}

// Success Message
const SuccMessage = ({successMSG, onCloseSuccessMSG}) => {
  if (successMSG && (successMSG !== '')) {
    return (
        <Alert variant='success' onClose={onCloseSuccessMSG} dismissible>
          <Alert.Heading>Success!</Alert.Heading>
          <p>
            {successMSG}
          </p>
        </Alert>
    );
  }

  return null;
}

// Edit Form
const EditForm = ({
    editFormVisible, 
    cancelEditEmployee, 
    handleChange, 
    currentEmployee, 
    addEmployee,
    updateEmployee,
    errorMessage, 
    successMessage, 
    onCloseErrorMSG, 
    onCloseSuccessMSG, 
    loading
}) => {

    const headerColor = (editFormVisible) ? '#17a2b8' : '#419641';
    const title = (editFormVisible) ? 'Update' : 'Add';
    const action = (editFormVisible) ? updateEmployee : addEmployee;
    const buttonVariant = (editFormVisible) ? 'info' : 'success';
    const {name, profession, city, color, branch} = currentEmployee;

    return (
        <>
            <Row className='justify-content-md-center'>
                <Col xs={12} sm={9}>
                    <ErrMessage errorMSG={errorMessage} onCloseErrorMSG={onCloseErrorMSG}/>
                    <SuccMessage successMSG={successMessage} onCloseSuccessMSG={onCloseSuccessMSG}/>
                </Col>
            </Row>
            <Row className='justify-content-md-center'>
                <Col xs={12} sm={9}>
                    <Card>
                        <Card.Header style={{backgroundColor: headerColor, color: '#fff', fontWeight: 600}}>
                            {title} Employee
                        </Card.Header>
                        <Card.Body>
                            <Form>
                                <Form.Row>
                                    <Form.Group as={Col} controlId='formName'>
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control name='name' placeholder='your name' value={name} onChange={handleChange}/>
                                    </Form.Group>

                                    <Form.Group as={Col} controlId='formProfession'>
                                    <Form.Label>Profession</Form.Label>
                                    <Form.Control name='profession' placeholder='your profession' value={profession} onChange={handleChange}/>
                                    </Form.Group>
                                </Form.Row>
                                <Form.Row>
                                    <Form.Group as={Col} controlId='formCity'>
                                    <Form.Label>City</Form.Label>
                                    <Form.Control name='city' as='select' value={city} onChange={handleChange}>
                                        <option disabled selected>Select a city</option>
                                        {cities.map(city => <option key={city}>{city}</option>)}
                                    </Form.Control>
                                    </Form.Group>

                                    <Form.Group as={Col} controlId='formColor'>
                                    <Form.Label>Color</Form.Label>
                                    <Form.Control name='color' as='select' value={color} onChange={handleChange}>
                                        <option disabled selected>Select a color</option>
                                        {colors.map(color => <option key={color}>{color}</option>)}
                                    </Form.Control>
                                    </Form.Group>

                                    <Form.Group as={Col} controlId='formBranch'>
                                    <Form.Label>Branch</Form.Label>
                                    <Form.Control name='branch' placeholder='your branch' value={branch} onChange={handleChange}/>
                                    </Form.Group>
                                </Form.Row>
                                <Button variant={buttonVariant} disabled={loading} onClick={loading ? null : () => action()} size='sm'>
                                    {loading ? 'Loading...' : 'Submit'}
                                </Button>
                                <Button variant='danger' disabled={loading} size='sm' className='del' onClick={() => cancelEditEmployee()}>
                                    Cancel
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    );
}

// Default Form
const DefaultForm = ({
    showAddForm, 
    showEditForm, 
    setEmployee, 
    employees, 
    errorMessage, 
    successMessage, 
    onCloseErrorMSG, 
    onCloseSuccessMSG,
    deleteEmployee,
    loading
}) => {
    console.log('loading no CRUD:', loading);
    return (
        <>
            <Row>
                <Col xs={12} sm={12}>
                    <ErrMessage errorMSG={errorMessage} onCloseErrorMSG={onCloseErrorMSG}/>
                    <SuccMessage successMSG={successMessage} onCloseSuccessMSG={onCloseSuccessMSG}/>
                </Col>
            </Row>
            <Row>
                <Col sx={12} sm={12} className="addEmployeeWrapper">
                    <Button
                        variant="success"
                        size="sm"
                        onClick={() => showAddForm(true)}
                    >
                        Add employee
                    </Button>
                </Col>
            </Row>
            <Row>
                <Col xs={12} sm={12} className="text-center">
                    <CustomTable
                        employees={employees}
                        showEditForm={showEditForm}
                        setEmployee={setEmployee}
                        deleteEmployee={deleteEmployee}
                        loading={loading}
                    />
                </Col>
            </Row>
        </>
    );
}

class Crud extends Component {
    render() {
        const {
            employees,
            addFormVisible,
            editFormVisible,
            showAddForm,
            showEditForm,
            setEmployee,
            cancelEditEmployee,
            handleChange,
            currentEmployee,
            addEmployee,
            updateEmployee,
            deleteEmployee,
            errorMessage,
            successMessage,
            onCloseErrorMSG,
            onCloseSuccessMSG,
            loading
        } = this.props;

        return (
            <Container>
                <Row className="text-center">
                    <Col sx={12} sm={12} className="logo-wrapper">
                        <Image src="assets/plexxis_logo.png" className="logo" />
                    </Col>
                </Row>
                {
                    (addFormVisible || editFormVisible) ?
                        <EditForm
                            editFormVisible={editFormVisible}
                            cancelEditEmployee={cancelEditEmployee}
                            handleChange={handleChange}
                            currentEmployee={currentEmployee}
                            addEmployee={addEmployee}
                            updateEmployee={updateEmployee}
                            errorMessage={errorMessage}
                            successMessage={successMessage}
                            onCloseErrorMSG={onCloseErrorMSG}
                            onCloseSuccessMSG={onCloseSuccessMSG}
                            loading={loading}
                        /> :
                        <DefaultForm
                            employees={employees}
                            showEditForm={showEditForm}
                            showAddForm={showAddForm}
                            setEmployee={setEmployee}
                            errorMessage={errorMessage}
                            successMessage={successMessage}
                            onCloseErrorMSG={onCloseErrorMSG}
                            onCloseSuccessMSG={onCloseSuccessMSG}
                            deleteEmployee={deleteEmployee}
                            loading={loading}
                        />
                }
            </Container>
        )
    }
}

export default Crud;