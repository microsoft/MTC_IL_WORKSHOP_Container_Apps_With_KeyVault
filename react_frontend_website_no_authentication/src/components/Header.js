import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "./Header.css"

const Header = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" className="header">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={process.env.PUBLIC_URL+"images/microsoft-5.svg"}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            Microsoft MTC IL - Container Apps Application
          </Navbar.Brand>
          <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Welcome  <a href="#login">MTC User</a>
          </Navbar.Text>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
