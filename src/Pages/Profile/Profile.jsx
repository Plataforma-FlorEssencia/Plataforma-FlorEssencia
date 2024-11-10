import Sidebar from '../../components/SideBar/SideBar';
import './Profile.css'

function Profile() {
    return (


        <div className="main-profile">
            <Sidebar />
            <main className="main-content">
                <div className="profile-header">
                    <div className="profile-picture"></div>
                    <h2>ADRIANA MINHOCA MERCES</h2>
                    <button className="edit-button">✏️</button>
                </div>
                <div className="profile-info">
                    <label>E-mail</label>
                    <input type="text" disabled value="adriana@example.com" />
                    <label>Senha</label>
                    <input type="password" disabled value="********" />
                </div>
                <div className="achievements">
                    <h3>CONQUISTAS</h3>
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
                    <button>Português</button>
                </div>
                <div className="settings-item">
                    <label>ALTO CONTRASTE</label>
                    <input type="checkbox" />
                </div>
                <div className="settings-item">
                    <label>MODO NOTURNO</label>
                    <input type="checkbox" />
                </div>
                <div className="settings-item">
                    <label>MODO DALTÔNICO</label>
                    <input type="checkbox" />
                </div>
            </aside>
        </div>
    )
}

export default Profile;