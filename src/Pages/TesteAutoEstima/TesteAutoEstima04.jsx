import './TesteAutoEstima.css';
import { Link } from 'react-router-dom';

function TesteAutoEstima04() {
    return (
        <div className="container-teste-auto-estima">
            <div className="progress-bar">
                <div className="progress-bar-filled" style={{ width: '100%' }}></div>
            </div>
            <div className="message">
                <p>Agradecemos por responder às perguntas essenciais que guiarão sua experiência na  Floressência</p>
                <br />
                <p>Aguarde alguns instantes enquanto preparamos uma jornada só sua...</p>
            </div>
            <Link to="/Atividade">
                <button className="continue-button">Continuar</button>
            </Link>
        </div>
    );
}

export default TesteAutoEstima04;