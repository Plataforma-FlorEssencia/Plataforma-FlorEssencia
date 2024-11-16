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
                    <p> <div className="titulo-preco-vitrine">
                        <h1 class="fw-bolder titulo-preco "> Se desenvolva com mais facilidade e profundidade! </h1>
                    </div></p>
                    <p> <div className="preco-vitrine">
                        <div className="plan-column">
                            <h3>Essencial</h3>
                            <p className="price">R$ 0,00</p>
                            <p>Funcionalidades Inclusas:</p>
                            <div className="product-icon">Plano Gratuito</div>
                            <ul className="lista-funcionalidades-gratis">
                                <li>Jornada Gamificada</li>
                                <li>Conquistas</li>
                                <li>Reflexões Diárias</li>
                                <li>Diários da trilha de jogos</li>
                                <li>Acesso limitado a artigos</li>
                                <li>Vitrine de psicólogas</li>
                                <li>Criação limitada de notas pessoais</li>
                            </ul>
                        </div>
                        <div className="plan-column">
                            <h3>Premium</h3>
                            <p className="price">R$ 29,90<small className="text-body-secondary fw-light">/mês</small></p>
                            <p>Funcionalidades Inclusas</p>
                            <div className="product-icon">Plano Mensal</div>
                            <button className="btn-principal">Quero!</button>
                            <ul className="lista-funcionalidades">
                                <li>Tudo do plano gratuito</li>
                                <li>Artigos e conteúdos personalizados ilimitados</li>
                                <li>Temas exclusivos de escrita</li>
                                <li>Criação ilimitada de notas pessoais</li>
                            </ul>
                        </div>

                        <div className="plan-column">
                            <h3>Profissional</h3>
                            <p className="price">R$ 299<small className="text-body-secondary fw-light">/ano</small></p>
                            <p>Funcionalidades Inclusas</p>
                            <div className="product-icon">Plano Anual</div>
                            <button className="btn-principal">Fale conosco</button>
                            <ul className="lista-funcionalidades">
                                <li>Tudo dos planos anteriores </li>
                                <li>+ meses gratuitos de desconto <span className="new-badge">Exclusivo</span></li>
                            </ul>
                        </div>
                    </div> </p>
                
            </div>
        </div>
    )
};

export default Planos;