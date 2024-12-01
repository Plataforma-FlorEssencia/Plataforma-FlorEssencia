import React, { useState } from 'react';
import SideBar from "../../components/SideBar/SideBar";
import ModalAtividades from "../Atividades/ModalAtividades"; // Importando ModalAtividades
import ModalMensagem from "../../components/Modal/Modal"; // Importe o componente do modal
import { FaBook, FaLock, FaArrowRight, FaSearch, FaPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import './Escrita.css';

function Escrita() {
    const [showDropdown, setShowDropdown] = useState(false); // Dropdown
    const [showModalAtividade, setShowModalAtividade] = useState(false); // Modal de Atividade
    const [showModalMensagem, setShowModalMensagem] = useState(false); // Modal de Mensagem
    const [temaReflexao, setTemaReflexao] = useState("O que me faz feliz?"); // Tema da reflexão
    const [modalMessage, setModalMessage] = useState(""); // Mensagem do ModalMensagem

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    const openModalAtividade = (tema) => {
        setTemaReflexao(tema);
        setShowModalAtividade(true);
    };

    const closeModalAtividade = () => {
        setShowModalAtividade(false);
    };

    // Função para abrir o modal de mensagem ao clicar no diário bloqueado
    const openBlockedDiaryModal = () => {
        setModalMessage("Esse diário ainda não está liberado, complete a trilha de jogos para desbloquear esse tema.");
        setShowModalMensagem(true);
    };

    const closeModalMensagem = () => {
        setShowModalMensagem(false);
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
                            <input
                                onClick={() => openModalAtividade("O que me faz feliz?")}
                                type="text"
                                placeholder="O que me faz feliz?"
                                readOnly
                            />
                            <button onClick={() => openModalAtividade("O que me faz feliz?")}>
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
                                <li>
                                    <Link to="/AlbumAutoConhecimento">Autoconhecimento</Link>
                                </li>
                                <li>
                                    <Link to="/AlbumCarreira">Carreira</Link>
                                </li>
                                <li>
                                    <Link to="/AlbumGestaoDeTempo">Gestão de tempo</Link>
                                </li>
                                <li>
                                    <Link to="/AlbumInteligenciaEmocional">Inteligência emocional</Link>
                                </li>
                            </ul>
                        </div>
                        )}
                    </div>

                    <div className="diarios">
                        <h3>Meus Diários</h3>
                        <div className="diarios-container">
                            {/* Diário bloqueado */}
                            <div className="diario-item bloqueado" onClick={openBlockedDiaryModal}>
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

            {/* Modal Atividade */}
            {showModalAtividade && <ModalAtividades onClose={closeModalAtividade} tema={temaReflexao} />}

            {/* Modal Mensagem (diário bloqueado) */}
            {showModalMensagem && <ModalMensagem onClose={closeModalMensagem} message={modalMessage} />}
        </div>
    );
}

export default Escrita;
