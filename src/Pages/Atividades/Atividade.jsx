import React from 'react';
import SideBar from "../../components/SideBar/SideBar";
import { FaBook, FaPuzzlePiece, FaChartLine, FaCogs, FaRocket } from 'react-icons/fa';
import './Atividade.css';


function Atividade() {
    return (
        <div className="main-atividades">
            <SideBar />

            <div className="body-atividade">
                <header className="hero-atividade">
                    <h1 className="display-1 fw-bolder text-capitalize">OLÁ, ADRIANA</h1>
                </header>

                <div className="grid-container">
                    <div className="grid-item" style={{ gridRow: 1, gridColumn: 51 }}>
                    <div className="atividade-btn"><img src="/vasinho.svg" alt="vaso" /></div>
                    </div>
                    <div className="grid-item" style={{ gridRow: 2, gridColumn: 52 }}>
                    <div className="atividade-btn"><img src="/vasinho.svg" alt="vaso" /></div>
                    </div>
                    <div className="grid-item" style={{ gridRow: 3, gridColumn: 53 }}>
                    <div className="atividade-btn"><img src="/vasinho.svg" alt="vaso" /></div>
                    </div>
                    <div className="grid-item" style={{ gridRow: 4, gridColumn: 52 }}>
                    <div className="atividade-btn"><img src="/vasinho.svg" alt="vaso" /></div>
                    </div>
                    <div className="grid-item" style={{ gridRow: 5, gridColumn: 51 }}>
                    <div className="atividade-btn"><img src="/vasinho.svg" alt="vaso" /></div>
                    </div>
                    <div className="grid-item" style={{ gridRow: 10, gridColumn: 52 }}>
                        <div className="atividade-btn"><img src="/vasinho.svg" alt="vaso" /></div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Atividade;
