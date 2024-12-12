import { useLocation } from 'react-router-dom';
import './TesteAutoEstima.css'; // Certifique-se de que os estilos estão sendo importados
import { Link } from 'react-router-dom';

function ResultadoTesteAutoEstima() {
  const location = useLocation();
  const { score } = location.state || { score: 0 };

  let resultado = '';
  if (score < 20) {
    resultado = 'Autoestima Baixa. Pode ser um bom momento para trabalhar em sua autovalorização e autoestima.';
  } else if (score >= 20 && score < 30) {
    resultado = 'Autoestima Média. Há espaço para crescimento, mas você já reconhece suas qualidades.';
  } else {
    resultado = 'Autoestima Alta. Você se valoriza e tem uma visão positiva de si mesma.';
  }

  return (
    <div className="container-teste-auto-estima">
      <div className="progress-bar">
        <div className="progress-bar-filled" style={{ width: '100%' }}></div>
      </div>
      <h2 className="resultado-titulo">Resultado do Teste de Autoestima</h2>
      <p>{resultado}</p>
      <p>Sua pontuação total foi: {score}</p>
      <Link to="/Atividade">
        <button className="continue-button">Voltar para o Início</button>
      </Link>
    </div>
  );
}

export default ResultadoTesteAutoEstima;