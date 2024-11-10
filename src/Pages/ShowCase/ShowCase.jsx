import React from "react";
import Header from "../../components/Header/Header";
import FooterPreLogin from "../../components/Footer/Footer";
import anap from "../ShowCase/assets/psicologa-ana.png";

import "./ShowCase.css";

const ShowCase = () => {
    return (
        <div>
            <div>
                <Header />
            </div>
            <div className="consulta">
                <div className="card-container">
                    <div className="card-header">
                        <span className="crp">CRP: 05/73060</span>
                    </div>
                    
                    <div className="card-body">
                    <img src={anap} alt="Ana Paula Evaldt Correa" className="profile-pic"/>
                        <div className="card-info">
                    
                            <div className="specializations">
                                <h4>Especialista em</h4>
                                <button className="specialization-btn">Traumas</button>
                                <button className="specialization-btn">Relacionamentos</button>
                                <button className="specialization-btn">Frustrações</button>
                            </div>
                            <div className="approach">
                                <h4>Abordagem</h4>
                                <button className="approach-btn">Psicanálise - Lacan</button>
                            </div>
                            
                        </div>
                    </div>
                    
                    <h3 className="name">Ana Paula Evaldt Correa</h3>
                    <div className="contact-btn">
                        <button className="whatsapp-btn">Contate-me!</button>
                    </div>
                </div>
            </div>
            <div>
                <FooterPreLogin />
            </div>
        </div>

    );
};

/* function ShowCase() {
    return (
      
      
      
      
         <div>

            <div>
                <Header />
            </div>
            <div className="consulta">
                <div className="vitrine">
                    <div className="vitrine-separado-esquerda"></div>
                    <div className="vitrine-separado-direita"></div>

                </div>

                <div className="vitrine">
                    <div className="vitrine-separado-esquerda"></div>
                    <div className="vitrine-separado-direita"></div>
                </div>
            </div>

            <div>
                <FooterPreLogin />
            </div>

        </div> 
    )
}; */

export default ShowCase;