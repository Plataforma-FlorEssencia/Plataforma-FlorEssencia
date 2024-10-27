import Header from "../../components/Header/Header";
import './about.css'
import flower from '../../assets/flowey2.png'
import folha from '../../assets/folhas.png'


function About() {

    return (
        <div>

            <Header />
            <img className="folha-about" src={folha} alt="" />
            <div className="container-about">


                <div className="container-one">
                    <h1>Afinal, como FlorEssência Surgiu?</h1>
                    <p>Fundada por um grupo de jovens, estudantes de desenvolvimento web, a FloreEssência toma forma como um projeto de conclusão de curso. Forjada nos pilares de companheirismo, e determinação, a FloreEssência segue para moldar o futuro das mulheres.</p>
                </div>
                <img className="flor" src={flower} alt="" />

            </div>
        </div>
    )
}

export default About;
