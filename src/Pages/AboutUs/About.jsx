import Header from "../../components/Header/Header";
import './about.css';
import flower from '../../assets/flowey2.png';
import folha from '../../assets/folhas.png';
import retanguloVerde from '../../assets/Retangulo-verde.png';
import Mvv from "./MVV/Mvv";
import Team from "./OurTeam/Team";
import FooterPreLogin from "../../components/Footer/Footer";
import lucas from './assets/Lucas.png'; 
import paulo from './assets/Paulo.png'; 
import daniel from './assets/Daniel.png'; 
import luiz from './assets/luiz.png'; 
import ana from './assets/Ana.png'; 
import adrielle from './assets/Adrielle.png'
import malu from './assets/Malu.png'


function About() {
    return (
        <div>
            <Header className='navbar-about' />
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
                        <div className="team"><Team imagem={ana} name="Ana Mioki"
                            role="Product Owner"
                            linkedin="https://www.linkedin.com/in/ana-mioki/"
                            github="https://github.com/AnaMioki" /></div>

                        <div className="team"><Team imagem={adrielle} name="Adrielle Merces"
                            role="Scrum Master Desenvolvedora Back-End"
                            linkedin="https://www.linkedin.com/in/adriellemerces/"
                            github="https://github.com/adriellemerces" /></div>

                        <div className="team"><Team imagem={lucas} name="Lucas Alexandre"
                            role="Desenvolvedor FullStack"
                            linkedin="https://www.linkedin.com/in/lucasalexsant"
                            github="https://github.com/LucasAlexSant" /></div>

                        <div className="team"><Team imagem={daniel} name="Daniel Santos"
                            role="Desenvolvedor Front-End"
                            linkedin="https://www.linkedin.com/in/daniel-ssantoss/"
                            github="https://github.com/k4lleb" /></div>
                    </div>
                    <div className="developers-right">

                        <div className="team"><Team imagem={luiz} name="Luiz Augusto"
                            role="UI/UX Designer Front-End"
                            linkedin="https://www.linkedin.com/in/pinustranslation/"
                            github="https://github.com/coffeasack" /></div>

                        <div className="team"><Team imagem={malu} name="Maria Luiza"
                            role="Desenvolvedora Back-End e Marketing"
                            linkedin="https://www.linkedin.com/in/mariludev/"
                            github="" /></div>

                        <div className="team"><Team imagem={paulo} name="Paulo Rosseto"
                            role="Desenvolvedor FullStack e Financeiro"
                            linkedin="https://www.linkedin.com/in/paulo-rossetto/"
                            github="https://github.com/Paulo-Rossetto" /></div>
                    </div>
                </div>
            </div>

            <FooterPreLogin />
        </div>
    );
}

export default About;