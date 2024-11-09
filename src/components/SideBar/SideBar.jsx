import React, { useEffect } from 'react';
import './SideBar.css';
import { FaUser, FaHome, FaSignOutAlt, FaThLarge, FaPencilAlt, FaBook } from 'react-icons/fa'; // Exemplo de ícones (opcional)

const Sidebar = () => {
    useEffect(() => {
        const hamBurger = document.querySelector(".toggle-btn");
        const sidebar = document.querySelector("#sidebar");

        const handleToggle = () => {
            sidebar.classList.toggle("expand");
        };

        hamBurger.addEventListener("click", handleToggle);

        return () => {
            hamBurger.removeEventListener("click", handleToggle);
        };
    }, []);

    return (
        <div className="wrapper">
            <aside id="sidebar">
                <div className="d-flex">
                    <button className="toggle-btn" type="button">
                        <FaThLarge  style={{ color: "#FFFFFF" }} />
                    </button>
                    <div className="sidebar-logo">
                        <a href="#">FlorEssência</a>
                    </div>
                </div>
                <ul className="sidebar-nav">

                    <li className="sidebar-item">
                        <a href="#" className="sidebar-link">
                            <FaHome className="icon" />
                            <span>Atividade</span>
                        </a>
                    </li>
                    <li className="sidebar-item">
                        <a href="#" className="sidebar-link">
                            <FaPencilAlt  className="icon" />
                            <span>Escrita</span>
                        </a>
                    </li>
                    <li className="sidebar-item">
                        <a href="#" className="sidebar-link">
                            <FaBook  className="icon" />
                            <span>Leitura</span>
                        </a>
                    </li>
                    <li className="sidebar-item">
                        <a href="#" className="sidebar-link">
                            <FaUser className="icon" />
                            <span>Profile</span>
                        </a>
                    </li>
                </ul>
                <div className="sidebar-footer">
                    <a href="#" className="sidebar-link">
                        <FaSignOutAlt className="icon" />
                        <span>Sair</span>
                    </a>
                </div>
            </aside>

        </div>
    );
}

export default Sidebar;
