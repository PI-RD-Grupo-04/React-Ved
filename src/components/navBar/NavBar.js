import React, { useState } from 'react'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import './NavBar.css'

function NavBar(props) {

    return (
        <>
            <div className = "back container-fluid" >
                <Navbar className=" nav d-flex justify-content-around back container-fluid" >
                        <NavDropdown title="Categorias" >
                            <NavDropdown.Item href="#action/3.1">Frutas</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Verduras</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Mercearia</NavDropdown.Item>
                                                    </NavDropdown>
                        <Nav.Link href="#home">Novidades</Nav.Link>
                        <Nav.Link href="#home">Planos</Nav.Link>
                        <Nav.Link href="#link">Sobre Nós</Nav.Link>
                </Navbar>
            </div>
        </>
    )
}

export default NavBar