import React, { useState } from 'react'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import './NavBar.css'

function NavBar(props) {

    return (
        <>
            <div className = "back" >
                <Navbar className=" nav d-flex justify-content-around back" bg="light" expand="lg">
                    <Container className=" nav d-flex justify-content-around back" >
                        <NavDropdown title="Categorias" id="basic-nav-dropdown back">
                            <NavDropdown.Item href="#action/3.1">Frutas</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Verduras</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Mercearia</NavDropdown.Item>
                            <NavDropdown.Divider />
                        </NavDropdown>
                        <Nav.Link href="#home">Novidades</Nav.Link>
                        <Nav.Link href="#home">Planos</Nav.Link>
                        <Nav.Link href="#link">Sobre Nós</Nav.Link>
                    </Container>
                </Navbar>
            </div>
        </>
    )
}

export default NavBar