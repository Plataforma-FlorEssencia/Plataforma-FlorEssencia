import SideBar from "../../../components/SideBar/SideBar";
import ModalAtividades from "../../Atividades/ModalAtividades";
import style from './AlbumCarreira.module.css';
import { FaRegClock, FaTasks, FaCalendarCheck, FaRegHourglass, FaUserClock } from 'react-icons/fa';
import { useState } from 'react';

function AlbumCarreira() {
    const [showModal, setShowModal] = useState(false);
    const [temaReflexao, setTemaReflexao] = useState("");

    const openModal = (tema) => {
        setTemaReflexao(tema);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    const reflexoesCarreira = [
        "Como você acredita que será o futuro da sua profissão?",
        "Quais habilidades você considera essenciais para o sucesso em sua área?",
        "Quais são os desafios mais comuns que você enfrenta no seu trabalho? Como lida com eles?",
        "Que impacto você deseja causar no mundo através da sua carreira?",
        "Como você equilibra vida profissional e pessoal em sua rotina?",
        "Que conselhos você daria a alguém que está começando na sua profissão?",
        "Quais são seus objetivos profissionais de curto, médio e longo prazo?",
        "Você já teve um mentor na sua carreira? Como isso impactou seu desenvolvimento?",
        "Como você mantém sua motivação em momentos desafiadores no trabalho?",
        "O que significa sucesso para você no contexto profissional?",
        "Você já pensou em mudar de área ou recomeçar em outra carreira? Por quê?",
        "Quais são os valores que guiam suas decisões no trabalho?"
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
                    <h1 className={style.albumTitle}>Álbum de Carreira</h1>

                    <div className={style.cardContainer}>
                        {reflexoesCarreira.map((reflexao, index) => {
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

export default AlbumCarreira;