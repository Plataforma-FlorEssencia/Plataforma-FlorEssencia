import UniversalButton from '../Button/Button';
import './Hero.css'


function Hero() {
    return (
        <div>
            <div className="hero">
                <div class="top-0 mt-4 ">
                    <h1 class="display-1 fw-bolder text-capitalize">Seja Bem Vinda </h1>
                    <h2 class="mt-5 mb-5 fs-3 text-uppercase">Transformando autoestima em poder profissional</h2>
                    <a href="/Register">
                        <UniversalButton classeEstilo="rosa" Btn="Cadastra-se" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Hero;
