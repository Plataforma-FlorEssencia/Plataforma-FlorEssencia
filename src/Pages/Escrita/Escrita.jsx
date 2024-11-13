import React from 'react';
import SideBar from "../../components/SideBar/SideBar";
import './Escrita.css';

function Escrita() {
    return (
        <div className="main-escrita">
            <SideBar />
            <div className="body-escrita">
                <div className="reflexao">
                    <h3>Reflexão do dia</h3>
                    <div className="input-group">
                        <input type="text" placeholder="O que me faz feliz?" />
                        <button>➡️</button>
                    </div>
                    <button className="album-reflexoes">ÁLBUM DE REFLEXÕES</button>
                </div>
                
                <div className="diarios">
                    <h3>Meus Diários</h3>
                    <div className="diarios-container">
                        <div className="diario-item pessoal">
                            <span>Pessoal</span>
                        </div>
                        <div className="diario-item novo">+</div>
                        <div className="diario-item novo">+</div>
                    </div>
                </div>

                <div className="historico">
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