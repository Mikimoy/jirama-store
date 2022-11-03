import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import '../styles/navigationbar.css';

const NavigationBar = () => {
  return (
    <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href='/'>Jirama Store</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href='/'>Home</Nav.Link>
                        <Nav.Link href='/mobile-legends'>Mobile Game</Nav.Link>
                        <Nav.Link href='#pc-game'>Pc Game</Nav.Link>
                        <Nav.Link href='#services'>Sevices</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href='/login'>Login</Nav.Link>
                        <Nav.Link href='/register'>Register</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
  )
}

export default NavigationBar