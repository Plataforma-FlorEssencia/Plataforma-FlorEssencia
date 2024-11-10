import React from 'react';
import './PricingTable.css';
import UniversalButton from '../Button/Button';

function PricingOption({ title, features, isAvailable, icon }) {
    return (
        <div className="pricing-option">
            <div className="header">
                <h2>{title}</h2>
            </div>
            <ul className="features-list">
                {features.map((feature, index) => (
                    <li key={index} className={feature.available ? 'available' : 'unavailable'}>
                        {feature.available ? '✔️' : '❌'} {feature.name}
                    </li>
                ))}
            </ul>

            <UniversalButton className="learn-more" classeEstilo="rosa" Btn="Ver mais" />
        </div>
    );
}

export default PricingOption;