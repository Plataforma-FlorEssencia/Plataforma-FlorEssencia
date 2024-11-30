import React from 'react';
import styles from './ModalMensagem.module.css'; // Importando o arquivo de estilos como módulo

const ModalMensagem = ({ onClose, message }) => {
    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
                <div className={styles.modalHeader}>
                    <button className={styles.closeBtn} onClick={onClose}>×</button>
                </div>
                <div className={styles.modalBody}>
                    <p>{message}</p>
                </div>
            </div>
        </div>
    );
};

export default ModalMensagem;