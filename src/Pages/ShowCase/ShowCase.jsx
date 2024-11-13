import React from "react";
import Header from "../../components/Header/Header";
import FooterPreLogin from "../../components/Footer/Footer";

import "./ShowCase.css";
import CardPsicologas from "../../components/CardPsicologas/CardPsicologas";

const ShowCase = () => {
    const psicologos = [
        {
            crp: "05/73060",
            nome: "Ana Paula Evaldt Correa",
            foto: "psicologa-ana.png",
            especialidades: ["Traumas", "Relacionamentos", "Frustrações"],
            abordagem: "Psicanálise - Lacan",
        },
        {
            crp: "08/40729",
            nome: "Adriely Ferreira Rosa Poiani",
            foto: "mulher-registro.png",
            especialidades: ["Ansiedade", "Angústia", "Alterações de humor"],
            abordagem: "Psicanálise - Winnicott",
        },
        {
            crp: "11/20270",
            nome: "Jessica Kerolaynne",
            foto: "mulher-registro.png",
            especialidades: ["Depressão", "Vícios", "Procrastinação"],
            abordagem: "Análise do Comportamento - Behaviorism",
        }
    ];

    return (
        <div>
            <Header />

            <div className="section-hero-showcase">
                <div class="top-0 mt-4 ">
                    <h1 class="display-12 fw-bolder ">Conheça nossas pscicólogas parceiras</h1>
                </div>
            </div>

            <div className="showcase-content">
                {psicologos.map((psicologo, index) => (
                    <CardPsicologas key={index} {...psicologo} />
                ))}
            </div>
            
            <FooterPreLogin />
        </div>
    );
};

export default ShowCase;
