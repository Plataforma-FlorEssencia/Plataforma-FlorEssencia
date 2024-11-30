import SideBar from "../../../components/SideBar/SideBar";
import ModalAtividades from "../../Atividades/ModalAtividades";
import style from './Album.module.css';
import { FaRegLightbulb, FaRegHeart, FaSmile, FaCalendarAlt, FaCog, FaStar, FaQuestion } from 'react-icons/fa';
import { useState } from 'react';

function AlbumAutoConhecimento() {
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
        "De quais características suas você se orgulha?",
        "Como você se comporta quando se sente inseguro ou desconfortável?",
        "Ao analisar o seu passado, de que você tem vergonha? Por quê?",
        "O que você tentaria fazer sabendo que não irá fracassar?",
        "Você costuma dizer o que pensa? Por quê?",
        "O que você faz durante algumas horas na semana e que gostaria de fazer mais?",
        "Somos os principais responsáveis pelo que acontece em nossas vidas e pelas escolhas que fazemos. Você consegue trocar o vitimismo por responsabilidade?",
        "Você consegue expressar suas emoções e sentimentos, como, por exemplo, alegria, choro, raiva, tristeza? Como faz isso?",
        "Afastar-se daquilo que lhe faz mal é a maior prova de amor-próprio. Você já conseguiu se afastar de alguém que não lhe faz bem?",
        "Seus medos são baseados em experiências vividas ou são apenas possibilidades que sua mente impõe?",
        "O que você entende por 'colocar-se em primeiro lugar'? Qual é a sua concepção de pessoa egoísta?",
        "Como você estava há cinco anos? Como você se vê daqui a cinco anos?",
        "Quem você precisa perdoar e por quê?",
        "Você costuma ser rígido e inflexível consigo mesmo e com as pessoas?",
        "Que atitudes você pode tomar para melhorar algum aspecto da sua vida que não esteja condizente com sua vontade?"
    ];

    const icons = [
        FaRegLightbulb,
        FaRegHeart,
        FaSmile,
        FaCalendarAlt,
        FaCog,
        FaStar,
        FaQuestion,
        FaRegHeart,
        FaSmile,
        FaCalendarAlt,
        FaCog,
        FaStar,
        FaRegLightbulb,
        FaRegHeart,
        FaSmile,
    ];

    return (
        <div className={style.mainAlbum}>
            <SideBar />
            <div className={style.containerAlbum}>
                <div className={style.bodyAlbum}>
                    <h1 className={style.albumTitle}>Álbum de Autoconhecimento</h1>

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

export default AlbumAutoConhecimento;
