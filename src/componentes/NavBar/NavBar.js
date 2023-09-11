import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import Cartwidget from "../Cartwidget/Cartwidget";
import img from "../../img/logo.png";

const NavBar = () => {
  return (
    <>
      <Navbar expand="lg" className="">
        <Container fluid>
          <Navbar.Brand as={Link} to="/" href="#home">
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
              <Nav.Link
                as={Link}
                to="/categoria/Comedia"
                className={({ isActive }) => (isActive ? "" : "")}
              >
                Comedia
              </Nav.Link>
              <Nav.Link as={Link} to="/categoria/Ciencia ficción">
                Ciencia Ficción
              </Nav.Link>
              <Nav.Link as={Link} to="/categoria/Acción">
                Acción
              </Nav.Link>
              <Nav.Link as={Link} to="/categoria/Shonen">
                Shonen
              </Nav.Link>
              <Nav.Link as={Link} to="/categoria/Fantasia">
                Fantasia
              </Nav.Link>
              <Nav.Link as={Link} to="/categoria/Terror">
                Terror
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>

          <Link to="/cart">
            <Cartwidget />
          </Link>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
