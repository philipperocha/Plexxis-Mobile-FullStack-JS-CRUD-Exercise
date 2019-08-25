import React, { Component } from 'react';
import { Container, Row, Col, Image, Form, Button } from 'react-bootstrap';
import './Crud.css';

class Crud extends Component {
    render() {
        return (
            <Container>
                <Row className="show-grid text-center">
                    <Col sx={12} sm={12} className="col-wrapper">
                        <Image src="assets/plexxis_logo.png" className="image" />
                    </Col>
                </Row>
                <Row className="show-grid">
                    <Col xs={12} sm={3} className="col-wrapper">
                        <div className='formContainer'>
                            <Form>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                    <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>
                                <Form.Group controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Check me out" />
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </div>
                    </Col>
                    <Col xs={12} sm={9} className="col-wrapper text-center">
                        <div className='formContainer'>
                            {this.props.table}
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Crud;