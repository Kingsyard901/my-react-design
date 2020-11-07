import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Badge from "react-bootstrap/Badge";

function Navigation() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">My React Design with Bootstrap</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/users">Users</Nav.Link>
          <Nav.Link href="/404">
            404 Page<Badge variant="secondary">New</Badge>
          </Nav.Link>
        </Nav>
      </Navbar>
    </>
  );
}

export default Navigation;