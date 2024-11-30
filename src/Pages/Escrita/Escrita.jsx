import React, { useState } from 'react';
import SideBar from "../../components/SideBar/SideBar";
import ModalAtividades from "../Atividades/ModalAtividades";
import { FaBook, FaLock, FaArrowRight, FaSearch, FaPlus } from 'react-icons/fa';
import './Escrita.css';

function Escrita() {
    const [showDropdown, setShowDropdown] = useState(false); // Dropdown
    const [showModal, setShowModal] = useState(false); // Modal
    const [temaReflexao, setTemaReflexao] = useState("O que me faz feliz?"); // Tema da reflexão

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    const openModal = (tema) => {
        setTemaReflexao(tema); 
        setShowModal(true); 
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <div className="main-escrita">
            <SideBar />
            <div className="body-escrita">
                
                {/* Seção Esquerda */}
                <div className="left-section">
                    <div className="reflexao">
                        <h3>Reflexão do dia</h3>
                        <div className="input-group">
                            <input type="text" placeholder="O que me faz feliz?" />
                            <button onClick={() => openModal("O que me faz feliz?")}>
                                <FaArrowRight size={20} />
                            </button>
                        </div>
                        <button 
                            className="album-reflexoes" 
                            onClick={toggleDropdown}
                        >
                            ÁLBUM DE REFLEXÕES
                        </button>

                        {/* Dropdown */}
                        {showDropdown && (
                            <div className="dropdown">
                                <ul>
                                    <li onClick={() => openModal("Reflexão Pessoal")}>Reflexão Pessoal</li>
                                    <li onClick={() => openModal("Objetivos e Metas")}>Objetivos e Metas</li>
                                    <li onClick={() => openModal("Gratidão")}>Gratidão</li>
                                    <li onClick={() => openModal("Desafios Superados")}>Desafios Superados</li>
                                </ul>
                            </div>
                        )}
                    </div>
                    
                    <div className="diarios">
                        <h3>Meus Diários</h3>
                        <div className="diarios-container">
                            {/* Diário bloqueado */}
                            <div className="diario-item bloqueado">
                                <FaLock size={40} color="#ff0000" />
                                <span>Soft Skills</span>
                            </div>
                            {/* Diário Gratidão */}
                            <div className="diario-item">
                                <FaBook size={40} color="#00a99d" />
                                <span>Gratidão</span>
                            </div>
                            {/* Diário Superação */}
                            <div className="diario-item">
                                <FaBook size={40} color="#00a99d" />
                                <span>Superação</span>
                            </div>
                            {/* Botão para criar novo diário */}
                            <div className="diario-item novo">
                                <FaPlus size={40} color="#00a99d" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Seção Direita */}
                <div className="right-section historico">
                    <h3>Histórico</h3>
                    <div className="search-group">
                        <input type="text" placeholder="Pesquisar" />
                        <button>
                            <FaSearch size={20} />
                        </button>
                    </div>
                    <div className="historico-list">
                        <p>Sem dados criados ainda</p>
                        <p>Sem dados criados ainda</p>
                        <p>Sem dados criados ainda</p>
                        <p>Sem dados criados ainda</p>
                        <p>Sem dados criados ainda</p>
                    </div>
                </div>
            </div>

            {/* Modal */}
            {showModal && <ModalAtividades onClose={closeModal} tema={temaReflexao} />}
        </div>
    );
}

export default Escrita;
