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
                        <h1> Leitura Recomendada</h1>
                    </div>
                    <div>
                        <div class="parent">
                            <div class="div1">1</div>
                            <div class="div2">2</div>
                            <div class="div6">3</div>
                            <div class="div7">4</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Leitura;