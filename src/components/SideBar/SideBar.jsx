import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { FaUser, FaHome, FaSignOutAlt, FaThLarge, FaPencilAlt, FaBook } from 'react-icons/fa';
import { RiPlantFill } from "react-icons/ri";
import { useNavigate } from 'react-router-dom'; // Importando useNavigate
import './SideBar.css';

const Sidebar = () => {
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate(); // Definindo a função navigate

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
                    <button className="toggle-btn" type="button" aria-label="Toggle Sidebar">
                        <FaThLarge style={{ color: "#FFFFFF" }} />
                    </button>
                    <div className="sidebar-logo">
                        <a href="#">FlorEssência</a>
                    </div>
                </div>
                <ul className="sidebar-nav">
                    <li className="sidebar-item">
                        <a href="/Plataforma-FlorEssencia/Atividade" className="sidebar-link" title="Atividades">
                            <FaHome className="icon" />
                            <span>Atividade</span>
                        </a>
                    </li>
                    <li className="sidebar-item">
                        <a href="/Plataforma-FlorEssencia/Escrita" className="sidebar-link" >
                            <FaPencilAlt className="icon" />
                            <span>Escrita</span>
                        </a>
                    </li>
                    <li className="sidebar-item">
                        <a href="/Plataforma-FlorEssencia/Leitura" className="sidebar-link">
                            <FaBook className="icon" />
                            <span>Leitura</span>
                        </a>
                    </li>
                    <li className="sidebar-item">
                        <a href="/Plataforma-FlorEssencia/Planos" className="sidebar-link">
                            <RiPlantFill className="icon" />
                            <span>Planos</span>
                        </a>
                    </li>
                    <li className="sidebar-item">
                        <a href="/Plataforma-FlorEssencia/Profile" className="sidebar-link">
                            <FaUser className="icon" />
                            <span>Perfil</span>
                        </a>
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