import React from 'react';
import style from './DiarioGratidao.module.css';
import Sidebar from '../../../components/SideBar/SideBar';

function DiarioGratidao() {
    return (
        <div className={style.container}>
            {/* Barra lateral */}
            <Sidebar />

            {/* Conteúdo principal */}
            <div className={style.mainContent}>
                <header className={style.header}>
                    <h1>Diário de Gratidão e Positividade</h1>
                    <button className={style.closeButton}>✖</button>
                </header>

                <p className={style.introText}>
                    Este diário é um espaço para cultivar a gratidão e a positividade no seu dia a dia.
                    Ao escrever sobre as pequenas e grandes coisas pelas quais você é grata, você treina sua mente para
                    enxergar o lado positivo da vida e promover bem-estar.
                </p>
                <p className={style.introText}>
                    Reserve alguns minutos para refletir e responder às perguntas a seguir com sinceridade. Lembre-se: você está criando um ciclo de boas energias para si mesmo! 🌱
                </p>

                {/* Seções do diário */}
                <div className={style.diarySection}>
                    <h2>Três coisas pelas quais sou grata hoje:</h2>
                    <p>Pense em três momentos ou coisas que trouxeram um sorriso ao seu rosto hoje...</p>
                    <textarea className={style.textarea}></textarea>
                </div>

                <div className={style.diarySection}>
                    <h2>O que fez meu dia especial:</h2>
                    <p>Reflita sobre o que tornou seu dia único, seja um encontro, experiência ou momento de calma...</p>
                    <textarea className={style.textarea}></textarea>
                </div>

                <div className={style.diarySection}>
                    <h2>Como posso espalhar positividade?</h2>
                    <p>Anote algo que você pode fazer para levar mais positividade aos outros...</p>
                    <textarea className={style.textarea}></textarea>
                </div>

                <button className={style.saveButton}>Salvar</button>
            </div>
        </div>
    );
}

export default DiarioGratidao;
