import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

export default function SiteNavbar() {
  return (
    <Navbar expand="lg" fixed="top" className="navbar-custom shadow-sm" variant="dark">
      <Container>
        <Navbar.Brand href="#home" className="fw-bold text-gradient">Rahul Singh Chouhan</Navbar.Brand>
        <Navbar.Toggle aria-controls="main-nav" />
        <Navbar.Collapse id="main-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <Nav.Link href="/Rahul_Singh_Chouhan_Resume.pdf" target="_blank" rel="noopener noreferrer">Resume</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
