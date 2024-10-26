import React from 'react';
import PricingOption from './PricingOption';
import './PricingTable.css';

// Dados das opções de preços
const options = [
    {
        title: "GRATUITO",
        features: [
            { name: "Atividades Interativas", available: true },
            { name: "Personalização do Diário", available: false },
            { name: "Ferramenta I.A", available: false }
        ],
        icon: "path/to/icon1.png"  
    },
    {
        title: "MENSAL",
        features: [
            { name: "Atividades Interativas", available: true },
            { name: "Personalização do Diário", available: true },
            { name: "Ferramenta I.A", available: true }
        ],
        icon: "path/to/icon2.png"  
    },
    {
        title: "ANUAL",
        features: [
            { name: "Atividades Interativas", available: true },
            { name: "Personalização do Diário", available: true },
            { name: "Ferramenta I.A", available: true }
        ],
        icon: "path/to/icon3.png"  
    }
];

function PricingTable() {
    return (
        <div className="pricing-table">
            {options.map((option, index) => (
                <PricingOption
                    key={index}
                    title={option.title}
                    features={option.features}
                    icon={option.icon}
                />
            ))}
        </div>
    );
}

export default PricingTable;