import './TesteAutoEstima.css';
import { Link } from 'react-router-dom';

function TesteAutoEstima01() {
    return (
        <div className="container-teste-auto-estima">
            <div className="message">
                <h1>Olá, Adriana!</h1>
            </div>

            <Link to="/TesteAutoEstima02">
                <button className="continue-button">Continuar</button>
            </Link>
        </div>
    );
}

export default TesteAutoEstima01;
