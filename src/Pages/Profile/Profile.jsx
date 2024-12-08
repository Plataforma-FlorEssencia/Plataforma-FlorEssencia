import Sidebar from '../../components/SideBar/SideBar';
import styles from './Profile.module.css';
import { FaPencilAlt, FaTrophy } from 'react-icons/fa';

// Importando imagens para as conquistas
import achievementImg1 from '../../assets/achievement1.png';
import achievementImg2 from '../../assets/achievement2.png';
import achievementImg3 from '../../assets/achievement3.png';
import achievementImg4 from '../../assets/achievement4.png';

// Dados das conquistas
const achievements = [
    { id: 1, image: achievementImg1, title: '' },
    { id: 2, image: achievementImg2, title: '' },
    { id: 3, image: achievementImg3, title: '' },
    { id: 4, image: achievementImg4, title: '' },
];

function Profile() {
    return (
        <div className={styles['main-profile']}>
            <Sidebar />
            <main className={styles['main-content']}>
                <div className={styles['profile-header']}>
                    <div className={styles['profile-picture']}></div>
                    <h2>ADRIANA MINHOCA MERCES</h2>
                    <button className={styles['edit-button']}>
                        <FaPencilAlt color="white" />
                    </button>
                </div>
                <div className={styles['profile-info']}>
                    <label>E-mail</label>
                    <input type="text" disabled value="adriana@example.com" />
                    <label>Senha</label>
                    <input type="password" disabled value="********" />
                </div>
                <div className={styles['achievements']}>
                    <div className={styles['conquistas']}>
                        <div className={styles['titulo']}>
                            <FaTrophy style={{ fontSize: '40px', color: '#D74381' }} />
                            <h3>CONQUISTAS</h3>
                        </div>
                        <span className={styles['ver-todas']}>Ver todas</span>
                    </div>
                    <div className={styles['achievement-list']}>
                        {achievements.map((achievement) => (
                            <div key={achievement.id} className={styles['achievement']}>
                                <img src={achievement.image} alt={achievement.title} />
                                <span>{achievement.title}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </main>

            {/* Seção de configurações */}
            <aside className={styles['settings']}>
                <h3>CONFIGURAÇÕES</h3>
                <div className={styles['settings-item']}>
                    <label>Idioma</label>
                    <button className={styles['btn btn-primary']}>Português</button>
                </div>
            </aside>
        </div>
    );
}

export default Profile;
