import SideBar from "../../../components/SideBar/SideBar";
import ModalAtividades from "../../Atividades/ModalAtividades";
import style from './AlbumGestaTempo.module.css';
import { FaRegClock, FaTasks, FaCalendarCheck, FaRegHourglass, FaUserClock } from 'react-icons/fa';
import { useState } from 'react';

function AlbumGestaoTempo() {
    const [showModal, setShowModal] = useState(false);
    const [temaReflexao, setTemaReflexao] = useState("");

    const openModal = (tema) => {
        setTemaReflexao(tema);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    const reflexoes = [
        "É comum você inventar desculpas para si mesmo para adiar o início de uma tarefa que precisa ser feita? Por quê?",
        "Quais os principais gatilhos que levam você a perder tempo e não cumprir prazos?",
        "Você já teve algum problema de saúde decorrente de acúmulo de trabalho a ser feito em um prazo exíguo? (Exíguo = insuficiente)",
        "Você já experimentou registrar o passo a passo de TODAS as suas atividades ao longo de TODO o dia por cerca de três dias consecutivos para ter uma visão realista de como seu tempo é utilizado? Como isso poderia ajudá-lo?",
        "Você já experimentou adotar a Técnica Pomodoro, que indica que se façam pequenas pausas de 3 a 5 minutos a cada 25 minutos de tarefa executada? Considera que isso pode ser importante no seu dia a dia?",
        "Você tem por hábito manter os arquivos no computador organizados, facilitando a localização rápida do que procura? O que precisa para resolver isso?",
        "O que no seu dia a dia é considerado tempo perdido? Como você lida com isso?",
        "Você costuma culpar os outros por sua falta de tempo? Por quê?",
        "Sonhar é bom, mas somente sonhar, sem nada realizar, nos leva à frustração pelo desperdício de inúmeras horas improdutivas. Você se vê como uma pessoa empreendedora ou sonhadora em excesso? Por quê?",
        "Você tem por hábito usar parte do seu tempo de descanso ou de lazer para realizar atividades profissionais? Por quê?",
        "Inúmeras pesquisas, inclusive aquelas realizadas em Harvard e no Massachusetts Institute of Technology (MIT), comprovaram que quem desenvolve diversas tarefas ao mesmo tempo, ou seja, age como multitarefa, perde até 30% a mais de tempo. Você tem tendência a fazer diversas coisas ao mesmo tempo? Como lida com isso?",
        "Você tem truques para se desvencilhar de pessoas prolixas que tomam seu precioso tempo? Quais? (Pessoas prolixas - alguém que fala ou escreve de forma demorada)"
    ];

    const icons = [
        FaRegClock,
        FaTasks,
        FaCalendarCheck,
        FaRegHourglass,
        FaUserClock,
        FaTasks,
        FaRegHourglass,
        FaCalendarCheck,
        FaUserClock,
        FaRegClock,
        FaTasks,
        FaCalendarCheck
    ];

    return (
        <div className={style.mainAlbum}>
            <SideBar />
            <div className={style.containerAlbum}>
                <div className={style.bodyAlbum}>
                    <h1 className={style.albumTitle}>Álbum de Gestão de Tempo</h1>

                    <div className={style.cardContainer}>
                        {reflexoes.map((reflexao, index) => {
                            const Icon = icons[index % icons.length];
                            return (
                                <div
                                    key={index}
                                    className={style.card}
                                    onClick={() => openModal(reflexao)}
                                >
                                    <Icon className={style.cardIcon} />
                                    <h3>{reflexao}</h3>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {showModal && <ModalAtividades onClose={closeModal} tema={temaReflexao} />}
        </div>
    );
}

export default AlbumGestaoTempo;