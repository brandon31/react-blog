import React from "react";
// import { Link } from "react-router-dom";
import profileLogo from "../assets/profileLogo.png";
import { Container, Nav, Navbar as NavbarBs } from "react-bootstrap";

function Navbar() {
  return (
    <>
      <NavbarBs sticky="top" bg="primary" variant="dark">
        <Container>
          <NavbarBs.Brand href="/">
            <img
              alt=""
              src={profileLogo}
              width="60"
              height="60"
              className="d-inline-block align-center"
            />
          </NavbarBs.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/about">Home</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            <Nav.Link href="/">About</Nav.Link>
          </Nav>
        </Container>
      </NavbarBs>
    </>
  );
}
export default Navbar;
