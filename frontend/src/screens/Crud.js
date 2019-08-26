import React, { Component } from 'react';
import { Container, Row, Col, Image, Button, Form, Card } from 'react-bootstrap';
import { CustomTable } from '../components/CustomTable';
import './Crud.css';

const cities = ['Toronto','Brampton','Missisauga','Vaughan','Etobicoke','Scarborough','Makham','Richmond Hill'];
const colors = ['Blue','Red','Green','Yellow','Purple','Black','Gray','Orange']

const EditForm = ({editFormVisible, cancelEditEmployee}) => {

    const headerColor = (editFormVisible) ? '#17a2b8' : '#419641';
    const title = (editFormVisible) ? 'Update' : 'Add';
    const buttonVariant = (editFormVisible) ? 'info' : 'success';

    return (
        <Row className='justify-content-md-center'>
            <Col xs={12} sm={9}>
                <Card>
                    <Card.Header style={{backgroundColor: headerColor, color: '#fff'}}>{title} Employee</Card.Header>
                    <Card.Body>
                        <Form>
                            <Form.Row>
                                <Form.Group as={Col} controlId='formName'>
                                <Form.Label>Name</Form.Label>
                                <Form.Control placeholder='your name' />
                                </Form.Group>

                                <Form.Group as={Col} controlId='formProfession'>
                                <Form.Label>Profession</Form.Label>
                                <Form.Control placeholder='your profession' />
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} controlId='formCity'>
                                <Form.Label>City</Form.Label>
                                <Form.Control as='select'>
                                    {cities.map(city => <option key={city}>{city}</option>)}
                                </Form.Control>
                                </Form.Group>

                                <Form.Group as={Col} controlId='formColor'>
                                <Form.Label>Color</Form.Label>
                                <Form.Control as='select'>
                                    {colors.map(color => <option key={color}>{color}</option>)}
                                </Form.Control>
                                </Form.Group>

                                <Form.Group as={Col} controlId='formBranch'>
                                <Form.Label>Branch</Form.Label>
                                <Form.Control />
                                </Form.Group>
                            </Form.Row>

                            <Button variant={buttonVariant} type='submit'>
                                Submit
                            </Button>
                            <Button variant='danger' type='submit' className='del' onClick={() => cancelEditEmployee()}>
                                Cancel
                            </Button>
                        </Form>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
}

const DefaultForm = ({showAddForm, showEditForm, setEmployee, employees}) => {

    return (
        <>
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
            cancelEditEmployee
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
                        /> :
                        <DefaultForm
                            employees={employees}
                            showEditForm={showEditForm}
                            showAddForm={showAddForm}
                            setEmployee={setEmployee}
                        />
                }

            </Container>
        )
    }
}

export default Crud;