import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Importando o CSS do Swiper
import styles from './CarouselComent.module.css'; // Ajuste para CSS Modules
import avatarIcon from '../../assets/conteudo_icon.png';

const testimonials = [
    {
        name: "MARIANA FONSECA",
        age: 39,
        message: `"Minha experiência com Floressência foi transformadora! Desde os primeiros exercícios, já me senti acolhida e incentivada a explorar minha autoestima. O diário se tornou uma ferramenta poderosa de autoconhecimento, e cada atividade foi cuidadosamente pensada para me ajudar a ver o meu próprio valor. A equipe sempre disponível foi um diferencial, pronta para ouvir e guiar. Sinto que estou realmente em uma jornada de crescimento pessoal, e o apoio da plataforma é essencial nesse processo!`
    },
    {
        name: "CAROLINA MORAES",
        age: 31,
        message: `"Floressência superou minhas expectativas. Através de cada exercício, fui capaz de identificar minhas inseguranças e trabalhar nelas de forma prática. O diário é uma ferramenta valiosa, que me permite refletir sobre o progresso e enxergar minhas conquistas ao longo do caminho. A plataforma é organizada e intuitiva, e o fluxo de atividades faz com que o processo de crescimento pessoal pareça leve e motivador. A equipe, sempre presente e dedicada, me fez sentir acolhida e amparada em cada etapa. É um espaço onde posso ser eu mesma, me desenvolver e finalmente me ver com os olhos da valorização.`
    },
    {
        name: "ANA SOUZA",
        age: 27,
        message: `"Não tenho palavras para descrever como Floressência tem sido importante para mim! Entrei na plataforma cheia de dúvidas e inseguranças, e através dos exercícios e do diário, consegui entender e trabalhar em cima de várias questões pessoais. A plataforma tem um fluxo de atividades tão bem planejado que facilita o processo de autodescoberta. Além disso, a interação com a equipe foi fundamental para mim; eles estão sempre dispostos a ajudar, dar suporte e compartilhar insights valiosos. Hoje, sinto que estou muito mais confiante e preparada para enfrentar os desafios da vida.`
    },
    {
        name: "CAROLINA MORAES",
        age: 31,
        message: `"Floressência tem sido uma ferramenta de autodesenvolvimento incrível! A estrutura dos exercícios me guia em cada etapa, e o diário é um grande aliado para que eu possa expressar e processar meus pensamentos e emoções. É como ter um espelho onde, finalmente, me enxergo de uma maneira mais positiva e autêntica. A equipe é inspiradora, sempre presente para esclarecer dúvidas e dar um suporte genuíno. O ambiente na plataforma é acolhedor, e cada atividade me leva a explorar novos aspectos da minha autoestima. Floressência tem sido, sem dúvida, uma experiência de valorização pessoal inestimável.`
    },
    {
        name: "ANA SOUZA",
        age: 27,
        message: `"O Floressência foi um divisor de águas para mim. Cheguei até ele em busca de alguma ajuda com a minha autoestima e encontrei muito mais do que esperava. A plataforma é intuitiva, e o fluxo de atividades foi feito de uma maneira que me permitiu explorar a mim mesma, refletir e evoluir gradualmente. O diário é algo que passei a valorizar imensamente, pois é um espaço onde posso realmente registrar e acompanhar o meu crescimento. A equipe, sempre tão dedicada e presente, faz toda a diferença nesse processo, oferecendo uma escuta atenta e apoio constante. Hoje, me sinto mais forte e ciente do meu valor.`
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
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 2 },
                }}
                className={styles.swiperContainer}
            >
                {testimonials.map((testimonial, index) => (
                    <SwiperSlide key={index} className={styles.swiperSlide}>
                        <div className={styles.testimonialCard}>
                            <div className={styles.avatarContainer}>
                                <img src={avatarIcon} alt="Avatar" className={styles.avatar} />
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
