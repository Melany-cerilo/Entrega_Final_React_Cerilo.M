import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Cartwidget from "../Cartwidget/Cartwidget";
import img from "../../img/logo.png";

const NavBar = () => {
  return (
    <>
      <Navbar expand="lg" className="">
        <Container fluid>
          <Navbar.Brand href="#home">
            <img
              alt="logo"
              src={img}
              width="70"
              height="70"
              className="d-inline-block "
            />
            {""}
            MangaManía
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Novedades</Nav.Link>
              <NavDropdown title="Categorías" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Shonen</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Seinen</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Shojo</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Fantasía</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Ciencia Ficción
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
          <Cartwidget />
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
