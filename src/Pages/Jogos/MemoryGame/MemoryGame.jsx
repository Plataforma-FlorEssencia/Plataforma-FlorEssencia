import React, { useState, useEffect } from 'react';
import './MemoryGame.css';

// Importação direta das imagens
import beth from './assets/beth.png';
import jerry from './assets/jerry.png';
import jessica from './assets/jessica.png';
import morty from './assets/morty.png';
import pessoaPassaro from './assets/pessoa-passaro.png';
import pickleRick from './assets/pickle-rick.png';
import rick from './assets/rick.png';
import summer from './assets/summer.png';
import meeseeks from './assets/meeseeks.png';

const images = {
    beth,
    jerry,
    jessica,
    morty,
    'pessoa-passaro': pessoaPassaro,
    'pickle-rick': pickleRick,
    rick,
    summer,
    meeseeks,
};

const characters = Object.keys(images);

const MemoryGame = () => {
    const [player, setPlayer] = useState(localStorage.getItem('player') || 'Jogador');
    const [timer, setTimer] = useState(0);
    const [cards, setCards] = useState([]);
    const [firstCard, setFirstCard] = useState(null);
    const [secondCard, setSecondCard] = useState(null);
    const [disabledCards, setDisabledCards] = useState([]);
    const [lockBoard, setLockBoard] = useState(false); // Bloqueia o tabuleiro
    const [intervalId, setIntervalId] = useState(null);

    // Embaralha as cartas e inicializa o estado
    useEffect(() => {
        const shuffledCharacters = [...characters, ...characters].sort(() => Math.random() - 0.5);
        setCards(
            shuffledCharacters.map((character, index) => ({
                id: index,
                character,
                isRevealed: false,
                isDisabled: false,
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
            }, 1000); // Tempo para exibir o conteúdo antes de virar
        }
    };

    // Checa cartas quando ambas estão selecionadas
    useEffect(() => {
        if (firstCard && secondCard) {
            setLockBoard(true); // Bloqueia cliques adicionais enquanto verifica
            checkCards();
        }
    }, [firstCard, secondCard]);

    // Reseta as cartas selecionadas
    const resetCards = () => {
        setFirstCard(null);
        setSecondCard(null);
        setLockBoard(false); // Libera o tabuleiro
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
            alert(`Parabéns, ${player}! Seu tempo foi de: ${timer} segundos.`);
        }
    }, [disabledCards, cards]);

    return (
        <main>
            <header>
                <span className="player">Jogador: {player}</span>
                <span>Tempo: {timer}s</span>
            </header>
            <div className="grid">
                {cards.map((card) => (
                    <div
                        key={card.id}
                        className={`card ${card.isRevealed ? 'reveal-card' : ''} ${disabledCards.includes(card.id) ? 'disabled-card' : ''
                            }`}
                        onClick={() => revealCard(card.id)}
                    >
                        <div
                            className="face front"
                            style={{
                                backgroundImage:
                                    card.isRevealed || disabledCards.includes(card.id)
                                        ? `url(${images[card.character]})`
                                        : 'none',
                                backgroundColor: disabledCards.includes(card.id) ? 'transparent' : 'none',
                            }}
                        />
                        <div className="face back" />
                    </div>
                ))}
            </div>
        </main>
    );
};

export default MemoryGame;
