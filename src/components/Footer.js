import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Container } from "react-bootstrap";

function Footer() {
  return (
    <div>
    <br />
        <Navbar bg="dark" variant="dark" fixed="bottom">
        <Container>
        <Navbar.Brand href="/">
        <img
        alt="footer"
        src="../logo192.png"
        width="30"
        height="30"
        className="d-inline-block align-top"
        />{' '}
      Built with React Bootstrap
    </Navbar.Brand>
    </Container>
  </Navbar>
</div>
  );
}

export default Footer;