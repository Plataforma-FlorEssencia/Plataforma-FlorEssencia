import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { FaUser, FaHome, FaSignOutAlt, FaThLarge, FaPencilAlt, FaBook } from 'react-icons/fa';
import { RiPlantFill } from "react-icons/ri";
import { useNavigate, Link } from 'react-router-dom'; // Importando Link para navegação no React
import './SideBar.css';

const Sidebar = () => {
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate(); // Função para navegação

    const handleCloseModal = () => setShowModal(false);
    const handleShowModal = () => setShowModal(true);

    useEffect(() => {
        const hamBurger = document.querySelector(".toggle-btn");
        const sidebar = document.querySelector("#sidebar");

        const handleToggle = () => {
            sidebar.classList.toggle("expand");
        };

        hamBurger.addEventListener("click", handleToggle);

        return () => {
            hamBurger.removeEventListener("click", handleToggle);
        };
    }, []);

    return (
        <div className="wrapper">
            <aside id="sidebar">
                <div className="d-flex">
                    <button className="toggle-btn" type="button" aria-label="Toggle Sidebar" aria-expanded="false">
                        <FaThLarge style={{ color: "#FFFFFF" }} />
                    </button>
                    <div className="sidebar-logo">
                        <Link>FlorEssência</Link> {/* Usando Link ao invés de <a> */}
                    </div>
                </div>
                <ul className="sidebar-nav">
                    <li className="sidebar-item">
                        <Link to="/Atividade" className="sidebar-link" title="Atividades">
                            <FaHome className="icon" />
                            <span>Atividade</span>
                        </Link>
                    </li>
                    <li className="sidebar-item">
                        <Link to="/Escrita" className="sidebar-link">
                            <FaPencilAlt className="icon" />
                            <span>Escrita</span>
                        </Link>
                    </li>
                    <li className="sidebar-item">
                        <Link to="/Leitura" className="sidebar-link">
                            <FaBook className="icon" />
                            <span>Leitura</span>
                        </Link>
                    </li>
                    <li className="sidebar-item">
                        <Link to="/Planos" className="sidebar-link">
                            <RiPlantFill className="icon" />
                            <span>Planos</span>
                        </Link>
                    </li>
                    <li className="sidebar-item">
                        <Link to="/Profile" className="sidebar-link">
                            <FaUser className="icon" />
                            <span>Perfil</span>
                        </Link>
                    </li>
                </ul>
                <div className="sidebar-footer">
                    <a href="#" className="sidebar-link" onClick={(e) => { e.preventDefault(); handleShowModal(); }}>
                        <FaSignOutAlt className="icon" />
                        <span>Sair</span>
                    </a>
                </div>
            </aside>

            {/* Modal */}
            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Encerrar Sessão</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Tem desejo de sair da plataforma? Clique em sair para encerrar sua sessão.
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary btn-pink" onClick={() => navigate("/")}>
                        Encerrar Sessão
                    </Button>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Fechar
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default Sidebar;
