import React from "react";
import { Link, NavLink } from "react-router-dom";
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
              <NavLink
                as={Link}
                className={({ isActive }) =>
                  isActive ? "btn btn-secondary" : "nav-link"
                }
                to="/categoria/Comedia"
              >
                Comedia
              </NavLink>
              <NavLink
                as={Link}
                className={({ isActive }) =>
                  isActive ? "btn btn-secondary" : "nav-link"
                }
                to="/categoria/Ciencia ficción"
              >
                Ciencia Ficción
              </NavLink>
              <NavLink
                as={Link}
                to="/categoria/Acción"
                className={({ isActive }) =>
                  isActive ? "btn btn-secondary" : "nav-link"
                }
              >
                Acción
              </NavLink>
              <NavLink
                as={Link}
                to="/categoria/Shonen"
                className={({ isActive }) =>
                  isActive ? "btn btn-secondary" : "nav-link"
                }
              >
                Shonen
              </NavLink>
              <NavLink
                as={Link}
                to="/categoria/Fantasia"
                className={({ isActive }) =>
                  isActive ? "btn btn-secondary" : "nav-link"
                }
              >
                Fantasia
              </NavLink>
              <NavLink
                as={Link}
                to="/categoria/Terror"
                className={({ isActive }) =>
                  isActive ? "btn btn-secondary" : "nav-link"
                }
              >
                Terror
              </NavLink>
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
