import React from 'react';
import { Container, Navbar } from 'react-bootstrap';


export const CustomNavbar = ({title}) => (
    <Navbar bg="dark" variant="dark">
        <Container>
            <Navbar.Brand>{title}</Navbar.Brand>
        </Container>
    </Navbar>   
);