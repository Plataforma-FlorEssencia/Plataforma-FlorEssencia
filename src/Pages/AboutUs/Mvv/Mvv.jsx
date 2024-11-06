import React from 'react';
import './Mvv.css';
import iconValour from '../assets/CORAÇAO.png';
import iconVision from '../assets/BANDEIRA.png';
import iconMission from '../assets/OLHO.png';

function Mvv() {
    return (
        <div className="about-section">
            
            <div className="about-item visao">
                <img src={iconVision} alt="Visão" className="about-icon" />
                <p>
                    No Floressência, nossa missão é empoderar mulheres a cultivarem autoestima e autoconfiança em uma plataforma interativa. Acreditamos no potencial único de cada uma, promovendo bem-estar e realização profissional.
                </p>
            </div>
            <div className="about-item  missao">

                <img src={iconMission} alt="Missão" className="about-icon" />
                <p>

                    Nossa visão é ser referência em bem-estar para mulheres, fortalecendo sua autoestima e carreira, e ajudando empresas a desenvolver suas funcionárias.
                </p>
            </div>

            <div className="about-item valor">
                <img src={iconValour} alt="valores" className="about-icon" />
                <p>
                    Acreditamos que inclusão, empatia e respeito são fundamentais para o desenvolvimento
                    das mulheres, promovendo diversidade e protagonismo para que possam florescer.
                </p>
            </div>
        </div>
    );
}

export default Mvv;