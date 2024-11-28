import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./Header.css";
import UniversalButton from '../Button/Button';
import logo from '../../assets/Logo.png';
import { Link, NavLink } from "react-router-dom";

function Header() {
    return (
        <Navbar className="navbar-header" expand="lg">
            <Container className='container-header-general'>
                {/* Substituir href por Link */}
                <Navbar.Brand as={Link} to="/" className='brand'>
                    <img src={logo} alt='Logo' />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto brand">
                        <Nav.Link as={NavLink} to="/" className="nav-link">Início</Nav.Link>
                        <Nav.Link href="/Plataforma-FlorEssencia/#plans">Planos</Nav.Link>
                        <Nav.Link href=" /Plataforma-FlorEssencia/#feedback">Depoimentos</Nav.Link>
                        <Nav.Link as={NavLink} to="/Plataforma-FlorEssencia/About" className="nav-link">Sobre</Nav.Link>
                        <Nav.Link as={NavLink} to="/ContactUs" className="nav-link">Fale conosco</Nav.Link>
                        <Nav.Link as={NavLink} to="/ShowCase" className="nav-link">Consultas</Nav.Link>
                    </Nav>
                    <Nav className='ms-auto container-buttons-header'>
                        <Link to="/login">
                            <UniversalButton
                                id="button-login"
                                classeEstilo="rosa_borda"
                                Btn="Entrar"
                            />
                        </Link>
                        <Link to="/Register">
                            <UniversalButton
                                classeEstilo="rosa"
                                Btn="Cadastrar-se"
                            />
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;