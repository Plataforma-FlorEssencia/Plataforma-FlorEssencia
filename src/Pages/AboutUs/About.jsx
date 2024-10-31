import Header from "../../components/Header/Header";
import './about.css';
import flower from '../../assets/flowey2.png';
import folha from '../../assets/folhas.png';
import retanguloVerde from '../../assets/Retangulo-verde.png';
import Mvv from "./MVV/Mvv";
import Team from "./OurTeam/Team";
import FooterPreLogin from "../../components/Footer/Footer";

function About() {
    return (
        <div>
            <Header className='navbar-about' /> {/* Assegure-se que a classe está sendo aplicada corretamente aqui */}
            <img className="folha-about" src={folha} alt="" />
            <div className="container-about">
                <div className="container-one">
                    <h1>Afinal, como FlorEssência Surgiu?</h1>
                    <p>
                        Fundada por um grupo de jovens, estudantes de desenvolvimento web, a FloreEssência toma forma como um projeto de conclusão de curso. Forjada nos pilares de companheirismo, e determinação, a FloreEssência segue para moldar o futuro das mulheres.
                    </p>
                </div>
                <img className="flor" src={flower} alt="" />
            </div>

            <div className="segundaParte">
                <img className="nosso-objetivo" src={retanguloVerde} alt="" />
                <div className="misValVis">
                    <Mvv />
                </div>
            </div>

            <div className="nosso-time">
                <h1>Desenvolvedores</h1>
                <div className="container-team">
                    <div className="developers-left">
                        <div className="team"><Team /></div>
                        <div className="team"><Team /></div>
                        <div className="team"><Team /></div>
                        <div className="team"><Team /></div>
                    </div>
                    <div className="developers-right">
                        <div className="team"><Team /></div>
                        <div className="team"><Team /></div>
                        <div className="team"><Team /></div>
                    </div>
                </div>
            </div>

            <FooterPreLogin />**
        </div>
    );
}

export default About;