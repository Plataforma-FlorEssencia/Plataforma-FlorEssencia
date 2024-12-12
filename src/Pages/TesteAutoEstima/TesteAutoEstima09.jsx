import './TesteAutoEstima.css';
import { useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react';

function TesteAutoEstima09() {  // Substitua XX pelo número correspondente
  const navigate = useNavigate(); // Usando o novo hook para navegação
  const location = useLocation();
  const [score, setScore] = useState(location.state?.score || 0); // Pegando a pontuação anterior
  const [selectedOption, setSelectedOption] = useState(null);

  const handleAnswer = (answer, points, nextPath) => {
    const newScore = score + points; // Atualizando a pontuação
    setScore(newScore);
    setSelectedOption(answer);

    // Navegando para o próximo teste ou para o resultado final
    navigate(nextPath, { state: { score: newScore } });
  };

  return (
    <div className="container-teste-auto-estima">
      <div className="progress-bar">
        <div className="progress-bar-filled" style={{ width: '60%' }}></div> {/* Altere a largura conforme necessário */}
      </div>
      <div className="question-section">
        <h2>Eu gostaria de ter mais respeito por mim mesma</h2> {/* Altere para a pergunta correspondente */}
        <div className="options">
          <button
            className="option-button"
            onClick={() => handleAnswer('Concordo Fortemente', 4, '/TesteAutoEstima10')}  // Caminho para o próximo teste
          >
            Concordo Fortemente
          </button>
          <button
            className="option-button"
            onClick={() => handleAnswer('Concordo', 3, '/TesteAutoEstima10')}  // Caminho para o próximo teste
          >
            Concordo
          </button>
          <button
            className="option-button"
            onClick={() => handleAnswer('Discordo', 2, '/TesteAutoEstima10')}  // Caminho para o próximo teste
          >
            Discordo
          </button>
          <button
            className="option-button"
            onClick={() => handleAnswer('Discordo Fortemente', 1, '/TesteAutoEstima10')}  // Caminho para o próximo teste
          >
            Discordo Fortemente
          </button>
        </div>
      </div>
    </div>
  );
}

export default TesteAutoEstima09;