import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import styles from './CarouselComent.module.css';
import avatarMariana from '/recMulher1.png';
import avatarCarolina from '/recMulher2.png';
import avatarAna from '/recMulher3.png';


const testimonials = [
    {
        name: "MARIANA FONSECA",
        age: 39,
        message: `"A experiência com Floressência foi transformadora! O diário é uma ferramenta poderosa, e a equipe sempre esteve disponível para ajudar. Sinto que estou em uma jornada real de crescimento pessoal!"`,
        avatar: avatarMariana
    },
    {
        name: "CAROLINA MORAES",
        age: 31,
        message: `"Floressência superou minhas expectativas. O diário me permite ver o progresso e valorizar minhas conquistas. A equipe me faz sentir acolhida e amparada. Um espaço onde posso ser eu mesma!"`,
        avatar: avatarCarolina
    },
    {
        name: "ANA SOUZA",
        age: 27,
        message: `"Floressência tem sido essencial para mim! Através dos exercícios e do diário, pude lidar com questões pessoais. A equipe é sempre disposta a ajudar, e hoje me sinto muito mais confiante."`,
        avatar: avatarAna
    },
    {
        name: "CAROLINA MORAES",
        age: 31,
        message: `"Floressência é uma incrível ferramenta de autodesenvolvimento! O diário me ajuda a processar pensamentos e emoções, e a equipe está sempre presente para apoiar. A plataforma é acolhedora e inspiradora."`,
        avatar: avatarCarolina
    },
    {
        name: "ANA SOUZA",
        age: 27,
        message: `"Floressência foi um divisor de águas. A plataforma é intuitiva, o diário é valioso, e a equipe é dedicada. Hoje me sinto mais forte e ciente do meu valor."`,
        avatar: avatarAna
    }
];

const CarouselComent = () => {
    return (
        <section className={styles.carouselSection}>
            <h2 className={styles.title}>ELAS RECOMENDAM!</h2>
            <Swiper
                spaceBetween={20}
                slidesPerView={1}
                breakpoints={{
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 3 },
                    1024: { slidesPerView: 3 },
                }}
                className={styles.swiperContainer}
            >
                {testimonials.map((testimonial, index) => (
                    <SwiperSlide key={index} className={styles.swiperSlide}>
                        <div className={styles.testimonialCard}>
                            <div className={styles.avatarContainer}>
                                {/* Exibe a imagem correspondente para cada pessoa */}
                                <img src={testimonial.avatar} alt={testimonial.name} className={styles.avatar} />
                            </div>
                            <div className={styles.testimonialContent}>
                                <p className={styles.name}>{testimonial.name}, {testimonial.age} ANOS</p>
                                <p className={styles.message}>{testimonial.message}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default CarouselComent;
