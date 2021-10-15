import React from 'react'
import "./Header.css"
import {Navbar,Nav,NavDropdown,Container} from "react-bootstrap"
import { NavLink } from 'react-router-dom'

export const Header=()=>{

    return (
        <div className="header  py-3">
          <Navbar bg="dark" expand="md" variant="dark" className=" w-100 p-3" fixed="top">
                <Container>
                  <Navbar.Brand href="#home">ReactAppMovie</Navbar.Brand>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto me-5">
                      <NavLink to="/" exact activeClassName="MyActive" className="mt-4 fs-3 text-light text-decoration-none">Home</NavLink>
                     
                      
                     
                    </Nav>
                  </Navbar.Collapse>
                </Container>
              </Navbar>
        </div>
    )
}