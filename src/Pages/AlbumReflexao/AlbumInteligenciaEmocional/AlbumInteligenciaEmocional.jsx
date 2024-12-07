import SideBar from "../../../components/SideBar/SideBar";
import ModalAtividades from "../../Atividades/ModalAtividades";
import style from './AlbumInteligenciaEmocional.module.css';
import { FaRegSmile, FaBrain, FaHeart, FaBalanceScale, FaUsers, FaHandsHelping } from 'react-icons/fa';
import { useState } from 'react';

function AlbumInteligenciaEmocional() {
    const [showModal, setShowModal] = useState(false);
    const [temaReflexao, setTemaReflexao] = useState("");

    const openModal = (tema) => {
        setTemaReflexao(tema);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    const reflexoesEmocionais = [
        "O que você faz quando surge um obstáculo na sua vida?",
        "Que situações o deixam com raiva e como você lida com esse sentimento?",
        "Como você reagiria com a morte de um ente querido?",
        "De que forma você demonstra seus sentimentos para seus amigos?",
        "Que hábito poderia trazer mais equilíbrio à sua vida?",
        "Quais atividades físicas você está fazendo no momento?",
        "Você está dirigindo e o motorista de outro carro cortou perigosamente a sua frente. O que você faz?",
        "Você conseguiria ensinar alguma coisa para alguém hoje? O quê?",
        "Como você maneja e controla suas emoções? O que faz para se acalmar e manter o controle da ansiedade e da tristeza?",
        "Qual a melhor maneira de resolver um conflito? Relate um que você tenha vivido e qual foi o desfecho.",
        "Quando está aborrecido, você sabe exatamente o porquê?",
        "Quando tem dificuldade em lidar com uma pessoa, como você reage?"
    ];

    const icons = [
        FaRegSmile,
        FaBrain,
        FaHeart,
        FaBalanceScale,
        FaUsers,
        FaHandsHelping,
        FaHeart,
        FaBrain,
        FaRegSmile,
        FaBalanceScale,
        FaUsers,
        FaHandsHelping
    ];

    return (
        <div className={style.mainAlbum}>
            <SideBar />
            <div className={style.containerAlbum}>
                <div className={style.bodyAlbum}>
                    <h1 className={style.albumTitle}>Álbum de Inteligência Emocional</h1>

                    <div className={style.cardContainer}>
                        {reflexoesEmocionais.map((reflexao, index) => {
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

export default AlbumInteligenciaEmocional;
