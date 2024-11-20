import React, { useState } from 'react';
import './ModalAtividades.css';

function ModalAtividades({ onClose }) {
  const [step, setStep] = useState(1); // Controla qual tela do modal será exibida

  const handleNextStep = () => {
    setStep((prevStep) => prevStep + 1); // Avança para a próxima etapa
  };

  return (
    <div className="modal-overlay">
      <div className="modal-simple-content">
        <button onClick={onClose} className="modal-simple-close">X</button>

        {/* Tela 1 */}
        {step === 1 && (
          <div>
            <h2 className="modal-title">O tema de hoje é...</h2>
            <h2 className="reflexao-texto">O que me faz feliz?</h2>
            <button
              className="modal-simple-button"
              onClick={handleNextStep}
            >
              Continuar
            </button>
          </div>
        )}

        {/* Tela 2 */}
        {step === 2 && (
          <div>
            <h2 className="reflexao-texto">O que me faz feliz?</h2>
            <textarea
              className="modal-textarea"
              rows="10"
              placeholder="Escreva aqui..."
            />
            <button
              className="modal-simple-button"
              onClick={handleNextStep}
            >
              Continuar
            </button>
          </div>
        )}

        {/* Tela 3 */}
        {step === 3 && (
          <div>
            <h2 className="modal-title">Oba!</h2>
            <p className="modal-text">
              E aí, foi legal pensar nas coisas que te fazem bem? <br />
              Dedicar um tempinho do seu dia para se lembrar das coisas que fazem feliz é importante.
            </p>
            <button
              className="modal-simple-button"
              onClick={onClose} 
            >
              Continuar
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ModalAtividades;
