import React from "react";
import Sidebar from "../../components/SideBar/SideBar";
import "./Planos.css";

function Planos() {
    return (
        <div className="main-planos">
            <div>
                <Sidebar />
            </div>
            <div className="conteudo">
                <p> <div className="preco">
                    <div className="plan-column">
                        <h3>Essencial</h3>
                        <p className="price">R$ 0,00</p>
                        <p>Funcionalidades Inclusas:</p>
                        <div className="product-icon">Plano Gratuito</div>
                        <ul className="lista-funcionalidades-gratis">
                            <li>Jornada Gamificada</li>
                            <li>Reflexões Diárias</li>
                            <li>Diário para desenvolvimento pessoal</li>
                            <li>Conquistas para decorar seu perfil</li>
                            <li>Acesso limitado a artigos</li>
                            <li>Limite de 5 sessões com psicólogos</li>
                        </ul>
                    </div>
                    <div className="plan-column">
                        <h3>Avançado</h3>
                        <p className="price">R$ 29<small className="text-body-secondary fw-light">/mês</small></p>
                        <p>Funcionalidades Inclusas</p>
                        <div className="product-icon">Plano Mensal</div>
                        <button className="btn-principal">Quero!</button>
                        <ul className="lista-funcionalidades">
                            <li>Tudo do plano gratuito</li>
                            <li>Possibilidade de criar múltiplos diários</li>
                            <li>Artigos e conteúdos personalizados com base no diário</li>
                            <li>Temas de exclusivos de escrita</li>
                            <li>20 Sessões com psicólogas</li>
                            <li>Suporte com prioridade</li>
                        </ul>
                    </div>

                    <div className="plan-column">
                        <h3>Profissional</h3>
                        <p className="price">R$ 280<small className="text-body-secondary fw-light">/ano</small></p>
                        <p>Funcionalidades Inclusas</p>
                        <div className="product-icon">Plano Anual</div>
                        <button className="btn-principal">Fale conosco</button>
                        <ul className="lista-funcionalidades">
                            <li>Tudo dos planos anteriores </li>
                            <li>Conteúdo distribuído com antecedência <span className="new-badge">Exclusivo</span></li>
                            <li>Mentoria exclusiva <span className="new-badge">Exclusivo</span></li>
                            <li>Suporte Personalizado <span className="new-badge">Exclusivo</span></li>
                            <li>Sessões ilimitadas com psicólogas <span className="new-badge">Exclusivo</span></li>
                        </ul>
                    </div>
                </div> </p>
            </div>
        </div>
    )
};

export default Planos;