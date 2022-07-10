import React from "react";
import {Navbar, Nav, NavDropdown, Container, Form, Button, FormControl } from 'react-bootstrap';
import logo from './images/logo-head.png';

const NavbarMenu = () => {
  return (
<Navbar bg="light" expand="lg">
  <Container fluid>
  <Navbar.Brand href="/home">
  <img  
        src={logo}  
        width="30"  
        height="30"  
        className="d-inline-block align-top"  
        alt="Brand logo"  
      />{' '}
     Huy Hoang
      </Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="/book_list">Kho sách</Nav.Link>
        <Nav.Link href="/manager_book">Quản lý sách</Nav.Link>
        
      </Nav>
      <Nav className="ml-auto">
        <Nav.Link href="/login">Đăng nhập</Nav.Link>
        <Nav.Link href="/signup">Đăng ký</Nav.Link>
      </Nav>
      {/* <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form> */}
    </Navbar.Collapse>
  </Container>
</Navbar>
  );
};

export default NavbarMenu;