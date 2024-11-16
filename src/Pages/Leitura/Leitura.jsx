import React from "react";
import Sidebar from "../../components/SideBar/SideBar";
import { FaSearch, FaFilter } from "react-icons/fa";
import Slider from "react-slick";
import "./Leitura.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Leitura = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Exibe 3 slides por vez na tela grande
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // Para telas médias (até 1024px)
        settings: {
          slidesToShow: 2, // Exibe 2 slides por vez
        },
      },
      {
        breakpoint: 768, // Para telas pequenas (até 768px)
        settings: {
          slidesToShow: 1, // Exibe 1 slide por vez
        },
      },
    ],
  };

  return (
    <div className="main-leitura">
      <Sidebar />
      <div className="conteudo">
        <div className="barra-pesquisa">
          <div className="input-conteiner">
            <div className="lupa-pesquisa">
              <FaSearch />
            </div>
            <input type="text" placeholder="Pesquisar" className="input-pesquisa" />
          </div>
          <button className="botao-filtro">
            <div className="filtro-pesquisa">
              <FaFilter />
            </div>
          </button>
        </div>

        <div className="secoes-conteudo">
          <div className="secao">
            <h2 className="titulo-secao">Recomendados</h2>
            <Slider {...settings} className="livros-grid">
              <div className="livro bloco1"></div>
              <div className="livro bloco2"></div>
              <div className="livro bloco3"></div>
              <div className="livro bloco4"></div>
            </Slider>
          </div>

          {/* Acervo */}
          <div className="secao">
            <h2 className="titulo-secao">Acervo - Ambiente Profissional</h2>
            <Slider {...settings} className="livros-grid">
              <div className="livro bloco1"></div>
              <div className="livro bloco2"></div>
              <div className="livro bloco3"></div>
              <div className="livro bloco4"></div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leitura;
