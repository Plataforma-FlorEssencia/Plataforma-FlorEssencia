import React from "react";
import Sidebar from "../../components/SideBar/SideBar";
import Slider from "react-slick";
import "./Leitura.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Configurações do Slider
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: { slidesToShow: 2 },
    },
    {
      breakpoint: 768,
      settings: { slidesToShow: 1 },
    },
  ],
};

// Dados com imagens associadas para cada carrossel
const livrosAutoestima = [
  { titulo: "Diários de Reflexão", imagem: "livro1.png" },
  { titulo: "Histórias Inspiradoras", imagem: "/imagens/historias.jpg" },
  { titulo: "Exercícios de Autoconhecimento", imagem: "/imagens/exercicios.jpg" },
  { titulo: "Conteúdos Motivacionais", imagem: "/imagens/motivacionais.jpg" },
];

const livrosSaudeEmocional = [
  { titulo: "Mindfulness e Meditação", imagem: "/imagens/mindfulness.jpg" },
  { titulo: "Estratégias de Relaxamento", imagem: "/imagens/relaxamento.jpg" },
  { titulo: "Dicas para Redução do Estresse", imagem: "/imagens/estresse.jpg" },
  { titulo: "Exercícios para Saúde Mental", imagem: "/imagens/saudemental.jpg" },
];

const livrosEmpoderamentoProfissional = [
  { titulo: "Liderança para Mulheres", imagem: "/imagens/lideranca.jpg" },
  { titulo: "Desenvolvendo Confiança", imagem: "/imagens/confiança.jpg" },
  { titulo: "Planejamento de Carreira", imagem: "/imagens/planejamento.jpg" },
  { titulo: "Desenvolvimento de Soft Skills", imagem: "/imagens/softskills.jpg" },
];

const livrosDesenvolvimento = [
  { titulo: "Gestão do Tempo", imagem: "/imagens/gestao-tempo.jpg" },
  { titulo: "Planejamento Estratégico", imagem: "/imagens/planejamento-estrategico.jpg" },
  { titulo: "Organização Pessoal", imagem: "/imagens/organizacao.jpg" },
  { titulo: "Histórias de Sucesso", imagem: "/imagens/sucesso.jpg" },
];

const livrosConteudoExclusivo = [
  { titulo: "Guias Interativos", imagem: "/imagens/guias.jpg" },
  { titulo: "Desafios Gamificados", imagem: "/imagens/gamificados.jpg" },
  { titulo: "Ferramentas de Autocuidado", imagem: "/imagens/autocuidado.jpg" },
  { titulo: "Acompanhamentos Psicológicos", imagem: "/imagens/psicologia.jpg" },
];

const Leitura = () => {
  return (
    <div className="main-leitura">
      <Sidebar />
      <div className="conteudo">
        {/* Seção - Autoestima e Autoconhecimento */}
        <div className="secoes-conteudo">
          <div className="secao">
            <h2 className="titulo-secao">Autoestima & Autoconhecimento</h2>
            <Slider {...settings} className="livros-grid">
              {livrosAutoestima.map((livro, index) => (
                <div className="livro" key={index}>
                  <img src={livro.imagem} alt={livro.titulo} className="livro-img" />
                  <p>{livro.titulo}</p>
                </div>
              ))}
            </Slider>
          </div>

          {/* Seção - Saúde Emocional */}
          <div className="secao">
            <h2 className="titulo-secao">Saúde Emocional</h2>
            <Slider {...settings} className="livros-grid">
              {livrosSaudeEmocional.map((livro, index) => (
                <div className="livro" key={index}>
                  <img src={livro.imagem} alt={livro.titulo} className="livro-img" />
                  <p>{livro.titulo}</p>
                </div>
              ))}
            </Slider>
          </div>

          {/* Seção - Empoderamento Profissional */}
          <div className="secao">
            <h2 className="titulo-secao">Empoderamento no Ambiente Profissional</h2>
            <Slider {...settings} className="livros-grid">
              {livrosEmpoderamentoProfissional.map((livro, index) => (
                <div className="livro" key={index}>
                  <img src={livro.imagem} alt={livro.titulo} className="livro-img" />
                  <p>{livro.titulo}</p>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leitura;
