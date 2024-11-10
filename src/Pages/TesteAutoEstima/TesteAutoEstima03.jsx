import './TesteAutoEstima.css';

function TesteAutoEstima03() {
  return (
    <div className="container-teste-auto-estima">
      <div className="progress-bar">
        <div className="progress-bar-filled" style={{ width: '75%' }}></div>
      </div>
      <div className="question-section">
        <h2>Como você se sente em relação a si mesma na maior parte do tempo?</h2>
        <div className="options">
          <button className="option-button">Muito bem</button>
          <button className="option-button">Bem</button>
          <button className="option-button">Neutro</button>
          <button className="option-button">Mal</button>
          <button className="option-button">Muito mal</button>
        </div>
      </div>
      <a href="/TesteAutoEstima04">
        <button className="continue-button">Continuar</button>
      </a>
    </div>
  );
}

export default TesteAutoEstima03;