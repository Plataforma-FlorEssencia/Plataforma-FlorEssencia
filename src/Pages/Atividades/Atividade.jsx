import React from 'react';
import SideBar from "../../components/SideBar/SideBar";
import './Atividade.css'

function Atividade() {
    return (
        <div className="main-atividades">
            <SideBar />
            <div className="body-atividade">
                <h1>Atividade</h1>
            </div>
        </div>
    );
}

export default Atividade;