import React, { useState } from 'react';
import SideBar from "../../components/SideBar/SideBar";
import { FaBook, FaLock } from 'react-icons/fa'; // Importa os ícones
import './Escrita.css';

function Escrita() {
    // State para controlar visibilidade do dropdown
    const [showDropdown, setShowDropdown] = useState(false);

    // Função para alternar o dropdown
    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
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
                            <button>➡️</button>
                        </div>
                        <button 
                            className="album-reflexoes" 
                            onClick={toggleDropdown} // Adiciona o evento de clique
                        >
                            ÁLBUM DE REFLEXÕES
                        </button>

                        {/* Dropdown */}
                        {showDropdown && (
                            <div className="dropdown">
                                <ul>
                                    <li>Reflexão Pessoal</li>
                                    <li>Objetivos e Metas</li>
                                    <li>Gratidão</li>
                                    <li>Desafios Superados</li>
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
                                +
                            </div>
                        </div>
                    </div>
                </div>

                {/* Seção Direita */}
                <div className="right-section historico">
                    <h3>Histórico</h3>
                    <div className="search-group">
                        <input type="text" placeholder="Pesquisar" />
                        <button>🔍</button>
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
        </div>
    );
}

export default Escrita;
