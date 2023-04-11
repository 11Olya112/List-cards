import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Navbar, Nav, Form, FormControl, Dropdown,
} from 'react-bootstrap';
import './Header.scss';

export const Header: React.FC = () => {
  return (
    <Navbar collapseOnSelect bg="white" expand="lg" className="nav-navbar-underline">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <div className="d-flex justify-content-around w-100">
          <Nav className="mr-auto ml-4px">
            <Nav.Link href="#photos" active className="nav-link-underline" font-weight-bold>
              Photos
            </Nav.Link>
            <Nav.Link href="#videos">Videos</Nav.Link>
            <Nav.Link href="#podcasts">Podcasts</Nav.Link>
          </Nav>
          <div className="d-flex justify-content-between">
            <Form className="form">
              <FormControl
                type="text"
                placeholder="Search for anything..."
                className="rounded-pill bg-light search"
                style={{ borderColor: 'transparent' }}
              />
            </Form>
            <Nav>
              <Dropdown className="d-flex justify-content-center">
                <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic">
                  English
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#action/3.2">French</Dropdown.Item>
                  <Dropdown.Item href="#action/3.3">Spanish</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Nav.Link href="#login" className="d-flex justify-content-center">Log In</Nav.Link>
            </Nav>
          </div>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};
