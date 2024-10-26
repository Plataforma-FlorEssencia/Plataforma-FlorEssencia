import UniversalButton from '../Button/Button';
import './Hero.css'
import mulheres_fundo_home from '../../assets/mulheres_fundo_home.jpg'

function Hero() {
    return (
        <div>
            <div className="hero">
                <div class="top-0 mt-4 ">
                    <h1 class="display-1 fw-bolder text-capitalize">Seja Bem Vindo </h1>
                    <h2 class="mt-5 mb-5 fs-3 text-uppercase">Cresça com FlorEssência</h2>
                    <UniversalButton classeEstilo="rosa" Btn="Cadastra-se" />
                </div>
            </div>
        </div>
    )
}

export default Hero;
