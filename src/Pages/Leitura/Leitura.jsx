import React, { useState } from "react";
import Sidebar from "../../components/SideBar/SideBar";
import Slider from "react-slick";
import ModalLeitura from "../../components/ModalLeitura/ModalLeitura";
import "./Leitura.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Configurações do Slider
const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 2 } },
    { breakpoint: 768, settings: { slidesToShow: 1 } },
  ],
};

// Dados das seções e livros
const secoesLivros = [
  {
    titulo: "Autoestima & Autoconhecimento",
    livros: [
      { 
        titulo: "Empoderamento Feminino", 
        imagem: "empoderamento-feminino.png",
        descricao: "Explorando o poder do autoconhecimento feminino para transformar sua autoestima.",
        link: "https://exemplo.com/mais-confiante",
      },
      { 
        titulo: "Como Desenvolver a Autocompaixão", 
        imagem: "como-desenvolver-a-autocompaixao.png",
        descricao: "Estratégias práticas para fortalecer a autocompaixão no dia a dia.",
        link: "https://exemplo.com/mais-confiante",
        
      },
      { 
        titulo: "Amor, Liberdade e Osho", 
        imagem: "AmorLiberdadeOsho.jpg",
        descricao: "Reflexões inspiradoras sobre amor e liberdade segundo Osho.",
        link: "https://exemplo.com/mais-confiante",
      },
      { 
        titulo: "365 Dias de Amor", 
        imagem: "365diasDeAmor.png",
        descricao: "Uma jornada diária para cultivar o amor próprio todos os dias.",
        link: "https://exemplo.com/mais-confiante",
      },
    ],
  },
  {
    titulo: "Autoconfiança",
    livros: [
      { 
        titulo: "Como Ser Mais Confiante", 
        imagem: "como-ser-mais-confiante.png",
        descricao: "Estratégias e práticas para se tornar mais confiante no dia a dia.",
        link: "https://exemplo.com/mais-confiante",
      },
      { 
        titulo: "Construção da Confiança", 
        imagem: "ConstrucaoDaConfianca.png",
        descricao: "Passos fundamentais para estabelecer e fortalecer a autoconfiança.",
        link: "https://exemplo.com/mais-confiante",
      },
      { 
        titulo: "Superando o Medo da Vulnerabilidade", 
        imagem: "superando-o-medo-da-vulnerabilidade.png",
        descricao: "Como enfrentar e superar medos emocionais com autoconhecimento.",
        link: "https://exemplo.com/mais-confiante",
      },
      { 
        titulo: "Estabelecendo Limites com Seus Parceiros", 
        imagem: "estabelecendo-limites-com-seus-parceiros.png",
        descricao: "Aprenda a estabelecer relações saudáveis e limites claros em relacionamentos.",
        link: "https://exemplo.com/mais-confiante",
      },
    ],
  },
  {
    titulo: "Autoconhecimento",
    livros: [
      { 
        titulo: "Desista Nunca", 
        imagem: "desista-nunca.jpg",
        descricao: "Inspirações para persistir diante dos desafios e adversidades da vida.",
        link: "https://exemplo.com/mais-confiante",
      },
      { 
        titulo: "Não Sei o que Fazer da Minha Vida", 
        imagem: "nao-sei-o-que-fazer-da-minha-vida.png",
        descricao: "Reflexões para quem busca propósito e clareza sobre seu futuro.",
        link: "https://exemplo.com/mais-confiante",
      },
      { 
        titulo: "Mindfulness", 
        imagem: "mindfulness.png",
        descricao: "Práticas para focar no momento presente e reduzir a ansiedade.",
        link: "https://exemplo.com/mais-confiante",
      },
      { 
        titulo: "Gerenciando Emoções", 
        imagem: "GerenciandoEmoções.jpg",
        descricao: "Aprenda a identificar e controlar suas emoções de maneira saudável.",
        link: "https://exemplo.com/mais-confiante",
      },
    ],
  },
  {
    titulo: "Bem-estar e Equilíbrio Emocional",
    livros: [
      { 
        titulo: "Maneiras de Aliviar o Estresse", 
        imagem: "maneiras-de-aliviar-o-estresse.png",
        descricao: "Técnicas simples para aliviar o estresse e aumentar o bem-estar.",
        link: "https://exemplo.com/mais-confiante",
      },
      { 
        titulo: "Como Tornar Seu Trabalho Mais Agradável", 
        imagem: "como-tornar-seu-trabalho-mais-agradavel.png",
        descricao: "Dicas práticas para transformar sua rotina profissional em algo prazeroso.",
        link: "https://exemplo.com/mais-confiante",
      },
      { 
        titulo: "Como Se Sentir Melhor em Relação ao Seu Trabalho", 
        imagem: "como-se-sentir-melhor-em-relacao-ao-seu-trabalho.png",
        descricao: "Estratégias para melhorar a percepção sobre seu ambiente profissional.",
        link: "https://exemplo.com/mais-confiante",
      },
      { 
        titulo: "Como Fazer uma Pausa do Trabalho", 
        imagem: "como-fazer-uma-pausa-do-trabalho.png",
        descricao: "Aprenda a fazer pausas eficientes para recarregar suas energias.",
        link: "https://exemplo.com/mais-confiante",
      },
    ],
  },
];

const Leitura = () => {
  const [modalInfo, setModalInfo] = useState({
    isOpen: false,
    titulo: "",
    imagem: "",
    descricao: "",
    link: "",
  });

  const [clickStartTime, setClickStartTime] = useState(0);

  const abrirModal = (livro) => {
    setModalInfo({ 
      isOpen: true, 
      titulo: livro.titulo, 
      imagem: livro.imagem, 
      descricao: livro.descricao, 
      link: livro.link 
    });
  };

  const fecharModal = () => {
    setModalInfo({ isOpen: false, titulo: "", imagem: "", descricao: "", link: "" });
  };

  const handleMouseDown = () => {
    setClickStartTime(Date.now());
  };

  const handleMouseUp = (livro) => {
    const clickDuration = Date.now() - clickStartTime;
    if (clickDuration < 100) {
      abrirModal(livro);
    }
  };

  const renderLivros = (livros) =>
    livros.map((livro, index) => (
      <div
        className="livro"
        key={index}
        onMouseDown={handleMouseDown}
        onMouseUp={() => handleMouseUp(livro)}
      >
        <img src={livro.imagem} alt={livro.titulo} className="livro-img" />
        <p>{livro.titulo}</p>
      </div>
    ));

  return (
    <div className="main-leitura">
      
      <Sidebar />
      
      <div className="conteudo">
        <div className="secoes-conteudo">
          {secoesLivros.map((secao, index) => (
            <div className="secao" key={index}>
              <h2 className="titulo-secao">{secao.titulo}</h2>
              <Slider {...sliderSettings} className="livros-grid">
                {renderLivros(secao.livros)}
              </Slider>
            </div>
            
          ))}
          

        </div>
      </div>

      {/* Modal com Descrição */}
      <ModalLeitura
        isOpen={modalInfo.isOpen}
        onClose={fecharModal}
        titulo={modalInfo.titulo}
        imagem={modalInfo.imagem}
        descricao={modalInfo.descricao}
        link={modalInfo.link}
      />
    </div>
  );
};

export default Leitura;