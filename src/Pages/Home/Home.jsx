import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import './Home.css'
import iconeAtividades from '../../assets/atividade_icon.png';
import iconeDiario from '../../assets/diario_icon.png';
import iconeConteudo from '../../assets/conteudo_icon.png';
import PricingTable from "../../components/Plan/PricingTable";
import folha from "../../assets/folhas.png"
import SocialMedia from "../../components/SocialMedia/SocialMedia";
import CarouselComent from "../../components/CarouselComent/CarouselComent";
import FooterPreLogin from "../../components/Footer/Footer";


function Home() {
    return (
        <div>
            <Header />
            <Hero />

            <div className="funcionalidades">
                <h2>Oquê Oferecemos</h2>

                <div className="func-item">
                    <img src={iconeAtividades} alt="Ícone de atividades" className="icone" />
                    <div className="func-info">
                        <h3 className="atividades-title">Atividades</h3>
                        <p>Desafios e atividades para estimular o autoconhecimento e autoestima.</p>
                    </div>
                </div>

                <div className="func-item">
                    <img src={iconeDiario} alt="Ícone de diário" className="icone" />
                    <div className="func-info">
                        <h3 className="diario-title">Diário</h3>
                        <p>Espaço privado e seguro para registro emocional, protegido pela LGPD.</p>
                    </div>
                </div>

                <div className="func-item">
                    <img src={iconeConteudo} alt="Ícone de conteúdos" className="icone" />
                    <div className="func-info">
                        <h3 className="conteudos-title">Conteúdos</h3>
                        <p>Conteúdos personalizados com sugestões por IA, voltados ao bem-estar profissional.</p>
                    </div>
                </div>


            </div>




            {/* parte do video */}

            <section className="video">

                <div className="folha">
                    <img src={folha} alt="" />
                </div>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/Wpp3REYs3LA?si=xatAxZFBWzMJOjEg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </section>

            <div className="planos">
                <h1>Confira nossos Planos</h1>
                <PricingTable />
            </div>


            <SocialMedia />
            <CarouselComent id="feedback"/>

            <FooterPreLogin/>
        </div>
    )
}

export default Home;