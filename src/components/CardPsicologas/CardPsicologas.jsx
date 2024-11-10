import React from 'react';
import './CardPsicologas.css';

function CardPsicologas({ crp, nome, foto, especialidades, abordagem }) {
    return (
        <div className="card-psicologas">
            <div className="card-header">
                <p className="crp">CRP: {crp}</p>
                <img src={foto} alt={`${nome}`} className="foto" />
            </div>
            <div className="card-body">
                <h3 className="nome">{nome}</h3>
                <h4>Especialista em</h4>
                <ul className="especialidades">
                    {especialidades.map((especialidade, index) => (
                        <li key={index} className="especialidade">{especialidade}</li>
                    ))}
                </ul>
                <h4>Abordagem</h4>
                <p className="abordagem">{abordagem}</p>
                <button className="contate-me">
                    <i className="fab fa-whatsapp"></i> Contate-me!
                </button>
            </div>
        </div>
    );
}

export default CardPsicologas;