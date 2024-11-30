import './TesteAutoEstima.css';
import { Link } from 'react-router-dom';

function TesteAutoEstima02() {
    return (
        <div className="container-teste-auto-estima">
            <div className="progress-bar">
                <div className="progress-bar-filled"></div>
            </div>
            <div className="message">
                <p>Bem-vinda ao Teste de Autoestima! Este teste ajudará você a entender melhor o nível da sua autoestima. Por favor, responda com sinceridade.</p>
                <p>Lembre-se de que este teste é apenas uma ferramenta de orientação e não substitui uma avaliação profissional. Se os resultados indicarem preocupações importantes, considere procurar ajuda especializada.</p>
            </div>
            <Link to="/TesteAutoEstima03">
                <button className="continue-button">Continuar</button>
            </Link>
        </div>
    );
}

export default TesteAutoEstima02;
