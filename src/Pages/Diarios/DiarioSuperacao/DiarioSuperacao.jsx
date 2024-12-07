import React from 'react';
import style from './DiarioSuperacao.module.css';
import Sidebar from '../../../components/SideBar/SideBar';

function DiarioSuperacao() {
    return (
        <div className={style.container}>
            <Sidebar />

            <div className={style.mainContent}>
                <header className={style.header}>
                    <h1>Diário de Desafios e Superação</h1>
                    <button className={style.closeButton}>✖</button>
                </header>

                <p className={style.introText}>
                    Este diário é para quem busca transformar os desafios da vida em oportunidades de crescimento. Ao refletir sobre os obstáculos que você enfrenta, você aprende a lidar melhor com eles, encontra forças que não sabia que tinha e celebra cada pequena vitória.
                </p>

                <p className={style.introText}>
                    Ao escrever, explore seus pensamentos e utilize este espaço como uma ferramenta para fortalecer sua resiliência. Vamos juntos aprender com cada desafio! 🌱
                </p>

                <div className={style.diarySection}>
                    <h2>Desafio Atual</h2>
                    <p>Descreva um desafio que você está enfrentando agora, seja pessoal, profissional ou qualquer outro. Como ele tem impactado sua vida?</p>
                    <textarea className={style.textarea} placeholder="Escreva aqui..."></textarea>
                </div>

                <div className={style.diarySection}>
                    <h2>Como estou lidando com isso?</h2>
                    <p>Reflita sobre as estratégias que você está usando para lidar com esse desafio. Está buscando ajuda, procurando soluções ou lidando sozinha?</p>
                    <textarea className={style.textarea} placeholder="Escreva aqui..."></textarea>
                </div>

                <div className={style.diarySection}>
                    <h2>Pequenas Vitórias</h2>
                    <p>Identifique uma vitória pequena, mas significativa, que você teve ao enfrentar esse desafio. Pode ser algo como manter a calma, pedir ajuda ou dar um passo importante na solução.</p>
                    <textarea className={style.textarea} placeholder="Escreva aqui..."></textarea>
                </div>

                <div className={style.feedbackSection}>
                    <p className={style.introText}>
                        Você está fazendo um trabalho incrível ao encarar seus desafios de frente! 💪 Cada passo dado em direção à superação é uma grande vitória. Lembre-se de que os obstáculos são apenas oportunidades para crescer e se tornar ainda mais forte. Continue assim, com coragem e perseverança — você é capaz de enfrentar tudo o que vier! 🌟
                    </p>
                </div>

                <button className={style.saveButton}>Salvar</button>
            </div>
        </div>
    );
}

export default DiarioSuperacao;
