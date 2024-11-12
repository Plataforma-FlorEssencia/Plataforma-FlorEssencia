import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./Header.css";
import UniversalButton from '../Button/Button';
import logo from '../../assets/Logo.png';
import { Link } from "react-router-dom"

function Header() {
    return (
        <Navbar className="navbar-header" expand="lg">
            <Container className='container-header-general'>
                <Navbar.Brand href="/" className='brand'><img src={logo} alt=''></img></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto brand">
                        <Nav.Link href="/">Início</Nav.Link>
                        <Nav.Link href="/#plans">Planos</Nav.Link>
                        <Nav.Link href=" /#feedback">Depoimentos</Nav.Link>
                        <Nav.Link href="/About">Sobre</Nav.Link>
                        <Nav.Link href="/ContactUs">Fale conosco</Nav.Link>
                        <Nav.Link href="/ShowCase">Consultas</Nav.Link>
                    </Nav>
                    <Nav className='ms-auto container-buttons-header'>
                        <Link to="/login"><UniversalButton id="button-login"
                            classeEstilo="rosa_borda"
                            Btn="Login" /></Link>
                        <Link to="/Register">
                            <UniversalButton
                                classeEstilo="rosa"
                                Btn="Cadastra-se" /></Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header;
