import React, { useState, useEffect } from 'react';
import './MemoryGame.css';
import { useNavigate } from 'react-router-dom'; // Importa o hook para navegação

// Importação direta das imagens
import beth from './assets/beth.png';
import jerry from './assets/jerry.png';
import jessica from './assets/jessica.png';
import morty from './assets/morty.png';
import pessoaPassaro from './assets/pessoa-passaro.png';

const images = {
  beth,
  jerry,
  jessica,
  morty,
  'pessoa-passaro': pessoaPassaro,
};

const activityDescriptions = {
  beth: { name: 'Beth', description: 'Beth é sobre confiança e liderança.' },
  jerry: { name: 'Jerry', description: 'Jerry simboliza a importância da vulnerabilidade.' },
  jessica: { name: 'Jessica', description: 'Jessica representa a empatia e o cuidado.' },
  morty: { name: 'Morty', description: 'Morty enfatiza coragem em situações adversas.' },
  'pessoa-passaro': { name: 'Pessoa-Pássaro', description: 'Pessoa-Pássaro é sobre liberdade e autoexpressão.' },
};

const characters = Object.keys(images);

const MemoryGame = () => {
  const [player] = useState(localStorage.getItem('Usuária') || 'Usuária');
  const [timer, setTimer] = useState(0);
  const [cards, setCards] = useState([]);
  const [firstCard, setFirstCard] = useState(null);
  const [secondCard, setSecondCard] = useState(null);
  const [disabledCards, setDisabledCards] = useState([]);
  const [lockBoard, setLockBoard] = useState(false);
  const [intervalId, setIntervalId] = useState(null);
  const [activityMessage, setActivityMessage] = useState(null);
  const [gameOver, setGameOver] = useState(false); // Adiciona estado para controle do fim do jogo

  const navigate = useNavigate(); // Usando o hook de navegação

  // Embaralha as cartas e inicializa o estado
  useEffect(() => {
    const shuffledCharacters = [...characters, ...characters].sort(() => Math.random() - 0.5);
    setCards(
      shuffledCharacters.map((character, index) => ({
        id: index,
        character,
        isRevealed: false,
      }))
    );
  }, []);

  // Inicia o timer
  useEffect(() => {
    const id = setInterval(() => setTimer((prev) => prev + 1), 1000);
    setIntervalId(id);
    return () => clearInterval(id);
  }, []);

  // Verifica se as cartas são iguais
  const checkCards = () => {
    if (firstCard.character === secondCard.character) {
      setDisabledCards((prev) => [...prev, firstCard.id, secondCard.id]);

      // Exibe a mensagem da atividade
      const { name, description } = activityDescriptions[firstCard.character];
      setActivityMessage({ name, description });

      // Remove a mensagem após 3 segundos
      setTimeout(() => setActivityMessage(null), 6000);

      resetCards();
    } else {
      setTimeout(() => {
        setCards((prev) =>
          prev.map((card) =>
            card.id === firstCard.id || card.id === secondCard.id
              ? { ...card, isRevealed: false }
              : card
          )
        );
        resetCards();
      }, 1000);
    }
  };

  // Checa cartas quando ambas estão selecionadas
  useEffect(() => {
    if (firstCard && secondCard) {
      setLockBoard(true);
      checkCards();
    }
  }, [firstCard, secondCard]);

  // Reseta as cartas selecionadas
  const resetCards = () => {
    setFirstCard(null);
    setSecondCard(null);
    setLockBoard(false);
  };

  // Revela uma carta
  const revealCard = (id) => {
    if (lockBoard || disabledCards.includes(id)) return;

    const selectedCard = cards.find((card) => card.id === id);
    if (!selectedCard || selectedCard.isRevealed) return;

    setCards((prev) =>
      prev.map((card) =>
        card.id === id ? { ...card, isRevealed: true } : card
      )
    );

    if (!firstCard) {
      setFirstCard(selectedCard);
    } else if (!secondCard) {
      setSecondCard(selectedCard);
    }
  };

  // Verifica se o jogo acabou
  useEffect(() => {
    if (disabledCards.length === cards.length && cards.length > 0) {
      clearInterval(intervalId);
      setGameOver(true); // Marca o fim do jogo
    }
  }, [disabledCards, cards]);

  // Função para encerrar a atividade
  const handleEndActivity = () => {
    navigate('/next-activity'); // Redireciona para a próxima atividade (alterar o caminho conforme necessário)
  };

  return (
    <main className="main-memory">
      <header>
        <span className="player">Jogadora: {player}</span>
        <span>Tempo: {timer}s</span>
      </header>

      <div className="grid">
        {cards.map((card) => (
          <div
            key={card.id}
            className={`card ${card.isRevealed ? 'reveal-card' : ''} ${
              disabledCards.includes(card.id) ? 'disabled-card' : ''
            }`}
            onClick={() => revealCard(card.id)}
          >
            <div
              className="face front"
              style={{
                backgroundImage: `url(${images[card.character]})`,
              }}
            />
            <div className="face back" />
          </div>
        ))}
      </div>

      {activityMessage && (
        <div className="activity-modal">
          <h2>{activityMessage.name}</h2>
          <p>{activityMessage.description}</p>
        </div>
      )}

      {gameOver && (
        <div className="finish-modal">
          <h2>Parabéns, {player}!</h2>
          <p>Você concluiu a atividade em {timer} segundos.</p>
          <button onClick={handleEndActivity}>Finalizar Atividade</button>
        </div>
      )}
    </main>
  );
};

export default MemoryGame;
