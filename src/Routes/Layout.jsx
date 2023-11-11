import React from 'react'
import{Outlet,Link} from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './rutas.css'

export default function Layout() {
  return (
    <>
    
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container className='fundador'>
        <Navbar.Brand href="#home">Salchipapas-gourmet</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className='fundador1' id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Inicio</Nav.Link>
            <Nav.Link href="/Menu">Menu</Nav.Link>
            <Nav.Link href="/Reservation ">Reservation </Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <Outlet/>
    
    </>
  )
}
