import Sidebar from '../../components/SideBar/SideBar';
import './Profile.css'
import { FaPencilAlt, FaTrophy } from 'react-icons/fa';


function Profile() {
    return (


        <div className="main-profile">
            <Sidebar />
            <main className="main-content">
                <div className="profile-header">
                    <div className="profile-picture"></div>
                    <h2>ADRIANA MINHOCA MERCES</h2>
                    <button className="edit-button"><FaPencilAlt color="white" />

                    </button>
                </div>
                <div className="profile-info">
                    <label>E-mail</label>
                    <input type="text" disabled value="adriana@example.com" />
                    <label>Senha</label>
                    <input type="password" disabled value="********" />
                </div>
                <div className="achievements">
                    <div className="conquistas">
                        <div className="titulo">
                            <FaTrophy style={{ fontSize: '40px', color: '#D74381' }} />
                            <h3>CONQUISTAS</h3>
                        </div>
                        <span className="ver-todas">Ver todas</span>
                    </div>
                    <div className="achievement-list">
                        <div className="achievement"></div>
                        <div className="achievement"></div>
                        <div className="achievement"></div>
                        <div className="achievement"></div>
                    </div>
                </div>
            </main>

            {/* Seção de configurações */}
            <aside className="settings">
                <h3>CONFIGURAÇÕES</h3>
                <div className="settings-item">
                    <label>Idioma</label>
                    <button className="btn btn-primary">Português</button>
                </div>
                <div className="settings-item">
                    <label>ALTO CONTRASTE</label>
                    <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" id="altoContraste" />
                        <label className="form-check-label" htmlFor="altoContraste"></label>
                    </div>
                </div>
                <div className="settings-item">
                    <label>MODO NOTURNO</label>
                    <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" id="modoNoturno" />
                        <label className="form-check-label" htmlFor="modoNoturno"></label>
                    </div>
                </div>
                <div className="settings-item">
                    <label>MODO DALTÔNICO</label>
                    <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" id="modoDaltonico" />
                        <label className="form-check-label" htmlFor="modoDaltonico"></label>
                    </div>
                </div>
            </aside>
        </div>
    )
}

export default Profile;