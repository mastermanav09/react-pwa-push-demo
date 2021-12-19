import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./MainNavigation.css";

const MainNavigation = () => {
  return (
    <Navbar bg="primary" className="px-4" variant="dark">
      <Navbar.Brand to="/" className="brand">
        Navbar
      </Navbar.Brand>
      <Nav className="me-auto flex align-items-center mx-2">
        <Link
          to="/"
          className="navlink text-white-50 text-decoration-none mx-3"
        >
          Home
        </Link>
        <Link
          className="navlink text-white-50 text-decoration-none mx-3"
          to="/users"
        >
          Users
        </Link>
        <Link
          className="navlink text-white-50 text-decoration-none mx-3"
          to="/about"
        >
          About
        </Link>
      </Nav>
    </Navbar>
  );
};

export default MainNavigation;
