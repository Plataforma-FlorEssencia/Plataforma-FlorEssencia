import './TesteAutoEstima.css';
import { useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react';

function TesteAutoEstima13() {
  const navigate = useNavigate();
  const location = useLocation();
  const [score, setScore] = useState(location.state?.score || 0);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleAnswer = (answer, points) => {
    const newScore = score + points;
    setScore(newScore);
    setSelectedOption(answer);

    // Navega para o resultado final
    navigate('/ResultadoTesteAutoEstima', { state: { score: newScore } });
  };

  return (
    <div className="container-teste-auto-estima">
      <div className="progress-bar">
        <div className="progress-bar-filled" style={{ width: '95%' }}></div>
      </div>
      <div className="question-section">
        <h2>Eu me aceito como sou, com meus defeitos e qualidades</h2>
        <div className="options">
          <button
            className="option-button"
            onClick={() => handleAnswer('Concordo Fortemente', 4)}
          >
            Concordo Fortemente
          </button>
          <button
            className="option-button"
            onClick={() => handleAnswer('Concordo', 3)}
          >
            Concordo
          </button>
          <button
            className="option-button"
            onClick={() => handleAnswer('Discordo', 2)}
          >
            Discordo
          </button>
          <button
            className="option-button"
            onClick={() => handleAnswer('Discordo Fortemente', 1)}
          >
            Discordo Fortemente
          </button>
        </div>
      </div>
    </div>
  );
}

export default TesteAutoEstima13;