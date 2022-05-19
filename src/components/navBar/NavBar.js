import React, { useState } from 'react'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import './NavBar.css'
import { Link } from 'react-router-dom'

function NavBar(props) {
  
    return (
        <>
            <div className = "back container-fluid" >
                <Navbar className=" nav d-flex justify-content-around back container-fluid" >

                        <Nav.Link href="/category" className="nav-hover">Novidades</Nav.Link>
                        <Nav.Link href="/plansVed" className="nav-hover">  Planos </Nav.Link>
                        <NavDropdown title="Categorias" className="nav-hover">
                            <NavDropdown.Item > <Link to="/category"> <p className = "font"> Frutas </p> </Link> </NavDropdown.Item>
                            <NavDropdown.Item > <Link to="/category"> <p className = "font">  Verduras  </p> </Link> </NavDropdown.Item>
                            <NavDropdown.Item > <Link to="/category"> <p className = "font"> Mercearia </p> </Link> </NavDropdown.Item>
                                                    </NavDropdown>   
                        <Nav.Link href="/aboutUS" className="nav-hover">Sobre Nós</Nav.Link>
                </Navbar>
            </div>
        </>
    )
}

export default NavBar