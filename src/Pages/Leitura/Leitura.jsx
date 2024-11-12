import React from "react";
import Sidebar from "../../components/SideBar/SideBar";
import { FaSearch, FaFilter } from "react-icons/fa";
import './Leitura.css'

const Leitura = () => {
    return (
        <div>
            <div className="main-leitura">
                <Sidebar />
                <div className="conteudo">
                    <div className="barra-pesquisa">
                        <div className="input-conteiner">
                            <div className="lupa-pesquisa">
                                <FaSearch />
                            </div>
                            <input type="text" placeholder="Pesquisar"></input>
                        </div>
                        <button className="botao-filtro"> <div className="filtro-pesquisa"><FaFilter /></div></button>
                    </div>
                    <div>
                        <div className="dentro-conteudo">
                            <h1> Leitura Recomendada</h1>
                            <div class="livros">
                                <div class="amostra1">1</div>
                                <div class="amostra2">2</div>
                                <div class="amostra3">3</div>
                                <div class="amostra4">4</div>
                            </div>
                        </div>
                        <div className="dentro-conteudo">
                            <h1>Acervo</h1>
                            <div class="livros">
                                <div class="amostra1">1</div>
                                <div class="amostra2">2</div>
                                <div class="amostra3">3</div>
                                <div class="amostra4">4</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Leitura;